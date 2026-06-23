// C:\Users\then9\Downloads\PROJECT PDD\load-tests\mobile\spike-test.js
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
    'Spike Mobile Check 0': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 1': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 2': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 3': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 4': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 5': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 6': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 7': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 8': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 9': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 10': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 11': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 12': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 13': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 14': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 15': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 16': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 17': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 18': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 19': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 20': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 21': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 22': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 23': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 24': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 25': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 26': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 27': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 28': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 29': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 30': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 31': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 32': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 33': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 34': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 35': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 36': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 37': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 38': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 39': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 40': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 41': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 42': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 43': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 44': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 45': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 46': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 47': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 48': (r) => r.status === 200,
  });
  check(res, {
    'Spike Mobile Check 49': (r) => r.status === 200,
  });
}
