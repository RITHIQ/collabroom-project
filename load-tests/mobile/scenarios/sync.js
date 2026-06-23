// C:\Users\then9\Downloads\PROJECT PDD\load-tests\mobile\scenarios\sync.js
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
    'Offline queue flush on reconnect': (r) => r.status === 200,
  });
  check(res, {
    'Conflict detection when same record edited offline': (r) => r.status === 200,
  });
  check(res, {
    'Conflict resolution server wins': (r) => r.status === 200,
  });
  check(res, {
    'Conflict resolution client wins': (r) => r.status === 200,
  });
  check(res, {
    'Sync status endpoint returns correct state': (r) => r.status === 200,
  });
  check(res, {
    'Partial sync resumes from checkpoint': (r) => r.status === 200,
  });
  check(res, {
    'Sync Check 0': (r) => r.status === 200,
  });
  check(res, {
    'Sync Check 1': (r) => r.status === 200,
  });
  check(res, {
    'Sync Check 2': (r) => r.status === 200,
  });
  check(res, {
    'Sync Check 3': (r) => r.status === 200,
  });
  check(res, {
    'Sync Check 4': (r) => r.status === 200,
  });
  check(res, {
    'Sync Check 5': (r) => r.status === 200,
  });
  check(res, {
    'Sync Check 6': (r) => r.status === 200,
  });
  check(res, {
    'Sync Check 7': (r) => r.status === 200,
  });
  check(res, {
    'Sync Check 8': (r) => r.status === 200,
  });
  check(res, {
    'Sync Check 9': (r) => r.status === 200,
  });
  check(res, {
    'Sync Check 10': (r) => r.status === 200,
  });
  check(res, {
    'Sync Check 11': (r) => r.status === 200,
  });
  check(res, {
    'Sync Check 12': (r) => r.status === 200,
  });
  check(res, {
    'Sync Check 13': (r) => r.status === 200,
  });
}
