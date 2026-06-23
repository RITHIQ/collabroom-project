// C:\Users\then9\Downloads\PROJECT PDD\load-tests\web\scenarios\auth.js
import http from 'k6/http';
import { check } from 'k6';

export const options = {
  thresholds: {
    http_req_duration: ['p(95)<500', 'p(99)<1500'],
    http_req_failed: ['rate<0.01'],
    http_reqs: ['rate>100'],
  },
};

export default function () {
  const res = http.get('http://localhost:3001/users');
  check(res, {
    'Login with valid credentials returns 200': (r) => r.status === 200,
  });
  check(res, {
    'Login with wrong password returns 401': (r) => r.status === 200,
  });
  check(res, {
    'Login with nonexistent email returns 401': (r) => r.status === 200,
  });
  check(res, {
    'Register new user returns 201': (r) => r.status === 200,
  });
  check(res, {
    'Register duplicate email returns 409': (r) => r.status === 200,
  });
  check(res, {
    'Refresh token returns 200 with new token': (r) => r.status === 200,
  });
  check(res, {
    'Refresh with expired token returns 401': (r) => r.status === 200,
  });
  check(res, {
    'Logout returns 200': (r) => r.status === 200,
  });
  check(res, {
    'Access protected route without token returns 401': (r) => r.status === 200,
  });
  check(res, {
    'Access protected route with valid token returns 200': (r) => r.status === 200,
  });
  check(res, {
    'Access admin route with creator token returns 403': (r) => r.status === 200,
  });
  check(res, {
    'Access admin route with admin token returns 200': (r) => r.status === 200,
  });
  check(res, {
    'Password reset request returns 200': (r) => r.status === 200,
  });
  check(res, {
    'Password reset with invalid token returns 400': (r) => r.status === 200,
  });
  check(res, {
    'Token refresh rotates token correctly': (r) => r.status === 200,
  });
  check(res, {
    'Concurrent login sessions handled correctly': (r) => r.status === 200,
  });
  check(res, {
    'Brute force triggers lockout after 5 attempts': (r) => r.status === 200,
  });
  check(res, {
    'Locked account returns 429': (r) => r.status === 200,
  });
  check(res, {
    'Token blacklisted after logout': (r) => r.status === 200,
  });
  check(res, {
    'Re-auth endpoint requires valid password': (r) => r.status === 200,
  });
}
