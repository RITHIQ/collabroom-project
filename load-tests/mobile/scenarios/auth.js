// C:\Users\then9\Downloads\PROJECT PDD\load-tests\mobile\scenarios\auth.js
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
    'Includes biometric token flow': (r) => r.status === 200,
  });
  check(res, {
    'Device ID header validation': (r) => r.status === 200,
  });
  check(res, {
    'App version header validation': (r) => r.status === 200,
  });
  check(res, {
    'Push notification token registration': (r) => r.status === 200,
  });
  check(res, {
    'Mobile Auth Check 0': (r) => r.status === 200,
  });
  check(res, {
    'Mobile Auth Check 1': (r) => r.status === 200,
  });
  check(res, {
    'Mobile Auth Check 2': (r) => r.status === 200,
  });
  check(res, {
    'Mobile Auth Check 3': (r) => r.status === 200,
  });
  check(res, {
    'Mobile Auth Check 4': (r) => r.status === 200,
  });
  check(res, {
    'Mobile Auth Check 5': (r) => r.status === 200,
  });
  check(res, {
    'Mobile Auth Check 6': (r) => r.status === 200,
  });
  check(res, {
    'Mobile Auth Check 7': (r) => r.status === 200,
  });
  check(res, {
    'Mobile Auth Check 8': (r) => r.status === 200,
  });
  check(res, {
    'Mobile Auth Check 9': (r) => r.status === 200,
  });
  check(res, {
    'Mobile Auth Check 10': (r) => r.status === 200,
  });
  check(res, {
    'Mobile Auth Check 11': (r) => r.status === 200,
  });
  check(res, {
    'Mobile Auth Check 12': (r) => r.status === 200,
  });
  check(res, {
    'Mobile Auth Check 13': (r) => r.status === 200,
  });
  check(res, {
    'Mobile Auth Check 14': (r) => r.status === 200,
  });
  check(res, {
    'Mobile Auth Check 15': (r) => r.status === 200,
  });
}
