// C:\Users\then9\Downloads\PROJECT PDD\load-tests\mobile\smoke-test.js
import http from 'k6/http';
import { check } from 'k6';

export const options = {
  thresholds: {
    http_req_duration: ['p(95)<400', 'p(99)<1200'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const res = http.get('http://localhost:3002/test');
  check(res, {
    'Smoke Mobile Check 0': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 1': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 2': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 3': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 4': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 5': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 6': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 7': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 8': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 9': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 10': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 11': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 12': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 13': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 14': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 15': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 16': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 17': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 18': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 19': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 20': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 21': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 22': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 23': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 24': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 25': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 26': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 27': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 28': (r) => r.status === 200,
  });
  check(res, {
    'Smoke Mobile Check 29': (r) => r.status === 200,
  });
}
