// C:\Users\then9\Downloads\PROJECT PDD\load-tests\mobile\load-test.js
import http from 'k6/http';
import { check } from 'k6';

export const options = {
  thresholds: {
    http_req_duration: ['p(95)<400', 'p(99)<1200'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const res = http.get('http://localhost:3002/users');
  check(res, {
    'Load Mobile Check 0': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 1': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 2': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 3': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 4': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 5': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 6': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 7': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 8': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 9': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 10': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 11': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 12': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 13': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 14': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 15': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 16': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 17': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 18': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 19': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 20': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 21': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 22': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 23': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 24': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 25': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 26': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 27': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 28': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 29': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 30': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 31': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 32': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 33': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 34': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 35': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 36': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 37': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 38': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 39': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 40': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 41': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 42': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 43': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 44': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 45': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 46': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 47': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 48': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 49': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 50': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 51': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 52': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 53': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 54': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 55': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 56': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 57': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 58': (r) => r.status === 200,
  });
  check(res, {
    'Load Mobile Check 59': (r) => r.status === 200,
  });
}
