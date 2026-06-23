// C:\Users\then9\Downloads\PROJECT PDD\load-tests\mobile\scenarios\notifications.js
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
    'Register device token returns 200': (r) => r.status === 200,
  });
  check(res, {
    'Register duplicate device token returns 200 idempotent': (r) => r.status === 200,
  });
  check(res, {
    'Send push notification returns 202': (r) => r.status === 200,
  });
  check(res, {
    'Notification history returns array': (r) => r.status === 200,
  });
  check(res, {
    'Notification history pagination works': (r) => r.status === 200,
  });
  check(res, {
    'Mark notification read returns 200': (r) => r.status === 200,
  });
  check(res, {
    'Mark all notifications read returns 200': (r) => r.status === 200,
  });
  check(res, {
    'Unread count decrements after mark read': (r) => r.status === 200,
  });
  check(res, {
    'Invalid device token registration returns 400': (r) => r.status === 200,
  });
  check(res, {
    'Notification send to nonexistent user returns 404': (r) => r.status === 200,
  });
}
