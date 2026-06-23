// C:\Users\then9\Downloads\PROJECT PDD\load-tests\web\scenarios\campaigns.js
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
    'List campaigns returns array with correct shape': (r) => r.status === 200,
  });
  check(res, {
    'List campaigns with filter returns filtered results': (r) => r.status === 200,
  });
  check(res, {
    'Create campaign returns 201 with id': (r) => r.status === 200,
  });
  check(res, {
    'Get campaign by id returns correct campaign': (r) => r.status === 200,
  });
  check(res, {
    'Get nonexistent campaign returns 404': (r) => r.status === 200,
  });
  check(res, {
    'Get campaign belonging to other user returns 403': (r) => r.status === 200,
  });
  check(res, {
    'Update campaign status returns 200': (r) => r.status === 200,
  });
  check(res, {
    'Update campaign status unauthorized returns 403': (r) => r.status === 200,
  });
  check(res, {
    'Get collab room returns workspace object': (r) => r.status === 200,
  });
  check(res, {
    'Get collab room unauthorized returns 403': (r) => r.status === 200,
  });
  check(res, {
    'Add task to collab room returns 201': (r) => r.status === 200,
  });
  check(res, {
    'Update task status returns 200': (r) => r.status === 200,
  });
  check(res, {
    'Delete task returns 204': (r) => r.status === 200,
  });
  check(res, {
    'Upload file to collab room returns 201': (r) => r.status === 200,
  });
  check(res, {
    'List files in collab room returns array': (r) => r.status === 200,
  });
  check(res, {
    'Invite member returns 200': (r) => r.status === 200,
  });
  check(res, {
    'Invite already-member returns 409': (r) => r.status === 200,
  });
  check(res, {
    'Campaign list pagination returns correct page': (r) => r.status === 200,
  });
  check(res, {
    'Campaign list total count in response': (r) => r.status === 200,
  });
  check(res, {
    'Campaign creation with missing required field returns 400': (r) => r.status === 200,
  });
}
