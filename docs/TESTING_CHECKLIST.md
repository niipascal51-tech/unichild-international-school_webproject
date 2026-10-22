# Website Testing and Release Checklist

Use this checklist to record actual results before deployment. Do not mark a test as passed unless it has been performed.

| ID | Test | Expected result | Actual result / evidence | Status |
|---|---|---|---|---|
| T01 | Open home page | Page loads without a 404 | Record result | Not tested |
| T02 | Open About page | Correct page content displays | Record result | Not tested |
| T03 | Open Academics page | Correct page content displays | Record result | Not tested |
| T04 | Open Admissions page | Admissions information is readable | Record result | Not tested |
| T05 | Open Contact page | Verified contact details display | Record result | Not tested |
| T06 | Navigate through main menu | Each link opens the intended page | Record result | Not tested |
| T07 | Load CSS and images | Assets load without broken paths | Record result | Not tested |
| T08 | Mobile viewport | Content remains usable at narrow widths | Record result | Not tested |
| T09 | Forms | Validation and success/error feedback are appropriate | Record result | Not tested |
| T10 | Authentication, if implemented | Only valid authorized users can sign in | Record result | Not tested |
| T11 | Role access, if implemented | Users cannot access unauthorized records/actions | Record result | Not tested |
| T12 | Results and fee status, if implemented | Student can access only their own permitted data | Record result | Not tested |
| T13 | Direct page refresh | Page loads or routes correctly | Record result | Not tested |
| T14 | Browser console/network | No unexplained critical errors | Record result | Not tested |
| T15 | Privacy review | No real student data or secrets exposed | Record result | Not tested |

## Test record
- Tester:
- Date:
- Branch/commit:
- Environment:
- Browser/device:
- Deployment URL (if applicable):
- Defects found:
- Follow-up issue links:

## Status definitions
- **Not tested:** The test has not been performed.
- **Pass:** The expected result was observed and evidence was recorded.
- **Fail:** The expected result was not observed; create or link a defect issue.
- **Blocked:** The test cannot be performed because a dependency is unavailable.
- **Not applicable:** The feature is not in scope or is not implemented; explain why.
