# Selenium Test Execution Report

## Summary
- **Total Tests**: 100
- **Passed**: 96
- **Failed**: 4
- **Pending/Skipped**: 0

## Detailed Results

### TC_081: TC_081: Admin login successful
- **Status**: ❌ FAIL
- **Error**: `NoSuchElementError: no such element: Unable to locate element: {"method":"css selector","selector":"[data-testid="email-input"]"}
  (Session info: chrome=149.0.7827.103)
    at Object.throwDecodedError (C:\Users\then9\Downloads\PROJECT PDD\collabroom-tests\selenium\node_modules\selenium-webdriver\lib\error.js:523:15)
    at parseHttpResponse (C:\Users\then9\Downloads\PROJECT PDD\collabroom-tests\selenium\node_modules\selenium-webdriver\lib\http.js:526:13)
    at Executor.execute (C:\Users\then9\`

### TC_082: TC_082: Admin login fails non-admin
- **Status**: ✅ PASS

### TC_083: TC_083: Admin dashboard loads stats
- **Status**: ✅ PASS

### TC_084: TC_084: Admin users list loads
- **Status**: ✅ PASS

### TC_085: TC_085: Admin search users
- **Status**: ✅ PASS

### TC_086: TC_086: Admin ban user
- **Status**: ✅ PASS

### TC_087: TC_087: Admin unban user
- **Status**: ✅ PASS

### TC_088: TC_088: Admin campaigns list
- **Status**: ✅ PASS

### TC_089: TC_089: Admin pause campaign
- **Status**: ✅ PASS

### TC_090: TC_090: Admin disputes list
- **Status**: ✅ PASS

### TC_091: TC_091: Admin resolve dispute
- **Status**: ✅ PASS

### TC_092: TC_092: Admin announcements list
- **Status**: ✅ PASS

### TC_093: TC_093: Admin create announcement
- **Status**: ✅ PASS

### TC_094: TC_094: Admin delete announcement
- **Status**: ✅ PASS

### TC_095: TC_095: Admin navigation sidebar
- **Status**: ✅ PASS

### TC_096: TC_096: AI Brief generator form loads
- **Status**: ✅ PASS

### TC_097: TC_097: AI Brief generate submission
- **Status**: ✅ PASS

### TC_098: TC_098: 404 Not Found page
- **Status**: ❌ FAIL
- **Error**: `Error: expect(received).toContain(expected) // indexOf

Expected substring: "404"
Received string:    "http://localhost:8081/#/this-route-does-not-exist"
    at Object.<anonymous> (C:\Users\then9\Downloads\PROJECT PDD\collabroom-tests\selenium\tests\TC_081_TC_100.test.ts:112:17)
    at processTicksAndRejections (node:internal/process/task_queues:104:5)`

### TC_099: TC_099: Error boundary fallback
- **Status**: ✅ PASS

### TC_100: TC_100: Global loader behavior
- **Status**: ✅ PASS

### TC_001: TC_001: Login with valid creator credentials
- **Status**: ✅ PASS

### TC_002: TC_002: Login with valid brand credentials
- **Status**: ✅ PASS

### TC_003: TC_003: Login with invalid credentials shows error
- **Status**: ✅ PASS

### TC_004: TC_004: Register as brand
- **Status**: ✅ PASS

### TC_005: TC_005: Register as creator
- **Status**: ✅ PASS

### TC_006: TC_006: Forgot password sends email
- **Status**: ✅ PASS

### TC_007: TC_007: Reset password updates password
- **Status**: ✅ PASS

### TC_008: TC_008: Logout clears session
- **Status**: ❌ FAIL
- **Error**: `Error: expect(received).toContain(expected) // indexOf

Expected substring: "login"
Received string:    "http://localhost:8081/#/dashboard"
    at Object.<anonymous> (C:\Users\then9\Downloads\PROJECT PDD\collabroom-tests\selenium\tests\TC_001_TC_020.test.ts:84:17)
    at processTicksAndRejections (node:internal/process/task_queues:104:5)`

### TC_009: TC_009: Session restores on refresh
- **Status**: ✅ PASS

### TC_010: TC_010: Protected route redirects to login when not authenticated
- **Status**: ❌ FAIL
- **Error**: `Error: expect(received).toContain(expected) // indexOf

Expected substring: "login"
Received string:    "http://localhost:8081/#/dashboard"
    at Object.<anonymous> (C:\Users\then9\Downloads\PROJECT PDD\collabroom-tests\selenium\tests\TC_001_TC_020.test.ts:99:17)
    at processTicksAndRejections (node:internal/process/task_queues:104:5)`

### TC_011: TC_011: Onboarding shows roles step
- **Status**: ✅ PASS

### TC_012: TC_012: Onboarding creator profile step
- **Status**: ✅ PASS

### TC_013: TC_013: Onboarding brand profile step
- **Status**: ✅ PASS

### TC_014: TC_014: Onboarding social links step
- **Status**: ✅ PASS

### TC_015: TC_015: Completing onboarding redirects to dashboard
- **Status**: ✅ PASS

### TC_016: TC_016: Dashboard loads creator stats
- **Status**: ✅ PASS

### TC_017: TC_017: Dashboard loads brand stats
- **Status**: ✅ PASS

### TC_018: TC_018: Dashboard recent campaigns widget
- **Status**: ✅ PASS

### TC_019: TC_019: Dashboard wallet balance widget
- **Status**: ✅ PASS

### TC_020: TC_020: Dashboard quick actions
- **Status**: ✅ PASS

### TC_041: TC_041: Campaign creation step 3: Budget
- **Status**: ✅ PASS

### TC_042: TC_042: Campaign creation submission
- **Status**: ✅ PASS

### TC_043: TC_043: Campaign details view
- **Status**: ✅ PASS

### TC_044: TC_044: Apply to campaign (creator)
- **Status**: ✅ PASS

### TC_045: TC_045: Accept application (brand)
- **Status**: ✅ PASS

### TC_046: TC_046: Reject application (brand)
- **Status**: ✅ PASS

### TC_047: TC_047: Collab room loads
- **Status**: ✅ PASS

### TC_048: TC_048: Collab room submit deliverable
- **Status**: ✅ PASS

### TC_049: TC_049: Collab room approve deliverable
- **Status**: ✅ PASS

### TC_050: TC_050: Collab room complete campaign
- **Status**: ✅ PASS

### TC_051: TC_051: Wallet balance shows
- **Status**: ✅ PASS

### TC_052: TC_052: Wallet transaction history
- **Status**: ✅ PASS

### TC_053: TC_053: FakeRazorpay add funds modal opens
- **Status**: ✅ PASS

### TC_054: TC_054: FakeRazorpay form validation
- **Status**: ✅ PASS

### TC_055: TC_055: FakeRazorpay successful deposit
- **Status**: ✅ PASS

### TC_056: TC_056: Withdraw funds modal opens
- **Status**: ✅ PASS

### TC_057: TC_057: Contracts list loads
- **Status**: ✅ PASS

### TC_058: TC_058: Contract details view
- **Status**: ✅ PASS

### TC_059: TC_059: Contract sign flow (authenticated)
- **Status**: ✅ PASS

### TC_060: TC_060: Contract sign flow (public link)
- **Status**: ✅ PASS

### TC_021: TC_021: Dashboard shows empty state for new user
- **Status**: ✅ PASS

### TC_022: TC_022: Navigation to Discover from dashboard
- **Status**: ✅ PASS

### TC_023: TC_023: Navigation to Wallet from dashboard
- **Status**: ✅ PASS

### TC_024: TC_024: Navigation to Campaigns from dashboard
- **Status**: ✅ PASS

### TC_025: TC_025: Navigation to Messages from dashboard
- **Status**: ✅ PASS

### TC_026: TC_026: Discover creators loads list
- **Status**: ✅ PASS

### TC_027: TC_027: Filter creators by category
- **Status**: ✅ PASS

### TC_028: TC_028: Search creators by name
- **Status**: ✅ PASS

### TC_029: TC_029: Sort creators by followers
- **Status**: ✅ PASS

### TC_030: TC_030: View creator profile from discover
- **Status**: ✅ PASS

### TC_031: TC_031: Discover brands loads list
- **Status**: ✅ PASS

### TC_032: TC_032: Filter brands by industry
- **Status**: ✅ PASS

### TC_033: TC_033: Search brands by name
- **Status**: ✅ PASS

### TC_034: TC_034: View brand profile from discover
- **Status**: ✅ PASS

### TC_035: TC_035: Discover empty state handling
- **Status**: ✅ PASS

### TC_036: TC_036: Campaigns list loads
- **Status**: ✅ PASS

### TC_037: TC_037: Filter campaigns by status
- **Status**: ✅ PASS

### TC_038: TC_038: Search campaigns
- **Status**: ✅ PASS

### TC_039: TC_039: Campaign creation step 1: Basics
- **Status**: ✅ PASS

### TC_040: TC_040: Campaign creation step 2: Details
- **Status**: ✅ PASS

### TC_061: TC_061: Profile view loads data
- **Status**: ✅ PASS

### TC_062: TC_062: Profile edit form loads
- **Status**: ✅ PASS

### TC_063: TC_063: Profile edit save basic info
- **Status**: ✅ PASS

### TC_064: TC_064: Profile edit save social links
- **Status**: ✅ PASS

### TC_065: TC_065: Settings page loads
- **Status**: ✅ PASS

### TC_066: TC_066: Theme toggle works
- **Status**: ✅ PASS

### TC_067: TC_067: Notification preferences toggle
- **Status**: ✅ PASS

### TC_068: TC_068: Privacy policy loads
- **Status**: ✅ PASS

### TC_069: TC_069: Terms of service loads
- **Status**: ✅ PASS

### TC_070: TC_070: Account deletion request
- **Status**: ✅ PASS

### TC_071: TC_071: Inbox loads threads
- **Status**: ✅ PASS

### TC_072: TC_072: Open message thread
- **Status**: ✅ PASS

### TC_073: TC_073: Send message
- **Status**: ✅ PASS

### TC_074: TC_074: Real-time message receive (simulated via UI update)
- **Status**: ✅ PASS

### TC_075: TC_075: Create new message thread
- **Status**: ✅ PASS

### TC_076: TC_076: Notifications list loads
- **Status**: ✅ PASS

### TC_077: TC_077: Mark notification as read
- **Status**: ✅ PASS

### TC_078: TC_078: Mark all notifications as read
- **Status**: ✅ PASS

### TC_079: TC_079: Support assistant opens
- **Status**: ✅ PASS

### TC_080: TC_080: Support assistant send message
- **Status**: ✅ PASS

