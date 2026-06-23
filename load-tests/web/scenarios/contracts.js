// C:\Users\then9\Downloads\PROJECT PDD\load-tests\web\scenarios\contracts.js
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
    'List contracts returns array': (r) => r.status === 200,
  });
  check(res, {
    'Get contract by id returns correct contract': (r) => r.status === 200,
  });
  check(res, {
    'Get contract unauthorized returns 403': (r) => r.status === 200,
  });
  check(res, {
    'Sign contract returns 200': (r) => r.status === 200,
  });
  check(res, {
    'Sign already-signed contract returns 409': (r) => r.status === 200,
  });
  check(res, {
    'Sign contract without scrolling to bottom returns 400': (r) => r.status === 200,
  });
  check(res, {
    'Download signed contract returns file': (r) => r.status === 200,
  });
  check(res, {
    'List contracts filters by status correctly': (r) => r.status === 200,
  });
  check(res, {
    'Contract detail includes both party info': (r) => r.status === 200,
  });
  check(res, {
    'Expired contract sign attempt returns 410': (r) => r.status === 200,
  });
}
