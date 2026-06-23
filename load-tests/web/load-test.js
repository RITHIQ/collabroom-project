// C:\Users\then9\Downloads\PROJECT PDD\load-tests\web\load-test.js
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
    'Load Web Check 0': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 1': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 2': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 3': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 4': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 5': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 6': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 7': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 8': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 9': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 10': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 11': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 12': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 13': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 14': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 15': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 16': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 17': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 18': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 19': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 20': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 21': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 22': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 23': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 24': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 25': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 26': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 27': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 28': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 29': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 30': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 31': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 32': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 33': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 34': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 35': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 36': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 37': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 38': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 39': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 40': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 41': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 42': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 43': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 44': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 45': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 46': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 47': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 48': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 49': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 50': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 51': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 52': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 53': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 54': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 55': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 56': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 57': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 58': (r) => r.status === 200,
  });
  check(res, {
    'Load Web Check 59': (r) => r.status === 200,
  });
}
