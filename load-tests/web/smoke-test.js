// C:\Users\then9\Downloads\PROJECT PDD\load-tests\web\smoke-test.js
import http from 'k6/http';
import { check } from 'k6';

export const options = {
  thresholds: {
    http_req_duration: ['p(95)<500', 'p(99)<1500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const res = http.get('http://localhost:3001/test');
  check(res, {
    'Smoke Web Check 0': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 1': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 2': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 3': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 4': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 5': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 6': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 7': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 8': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 9': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 10': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 11': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 12': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 13': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 14': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 15': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 16': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 17': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 18': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 19': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 20': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 21': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 22': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 23': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 24': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 25': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 26': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 27': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 28': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Web Check 29': (r) => r.status === 200,
  });
}
