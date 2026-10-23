AI Usage Log

DCIT 208 Software Engineering Project
<<<<<<< HEAD

This file records significant AI-assisted contributions to the Unichild International School Website and Student Information Management System. Each contributor is responsible for checking that their entry is accurate and supported by actual work.

## Team AI Usage Records

Every significant AI-assisted contribution must be recorded here. Entries should describe actual work and actual verification; do not claim tests, reviews, deployment, or client acceptance without supporting evidence.

| Date | Student | Tool Used | Prompt/Task Summary | Output Used? | Verification Performed | Related Issue/PR |
|---|---|---|---|---|---|---|
| September 2, 2026 | BOAHEN KWABENA (boahentech) | ChatGPT | Assistance with drafting and organizing AI_USAGE.md, including responsible AI-use principles, confidentiality guidelines, and academic integrity rules. | Yes | Review the declaration, confirm that it accurately represents the team's policies, and correct any inaccurate statements before submission. | N/A unless a related issue or PR exists |
| 24/08/2026 to 23/10/2026 | PASCAL NII TETTEY ODONKOR (niipascal51-tech) | Claude | Backend development: planning, code, debugging and documentation. Detailed entries are in the Backend Development section below. | Yes | Ran scripted API tests and checked the results against the requirements documents. Limits are stated below. | Backend pull request from `pascal-backend` |

## Backend Development AI Usage Record

**Project:** Unichild International School Website and Student Information Management System
**Team:** DevForge
**Author:** Pascal Nii Tettey Odonkor (Backend Developer, `niipascal51-tech`)
**Branch:** `pascal-backend`

### Tool used

Claude (Anthropic), through the claude.ai chat interface.

### Summary

AI was used throughout the backend work for planning, writing code, diagnosing errors, and drafting documentation. The author reports setting up the project and configuring its connection to the cloud services, running scripted tests against the live database, and checking results against the project requirements documents (D1 main system components, D2 use case model and user stories). The database and file storage started on Supabase and were later moved to Microsoft Azure (Azure Database for PostgreSQL and Azure Blob Storage).

### Backend AI usage log

| # | Date | Area | What AI helped with | What I verified or changed |
|---|---|---|---|---|
| 1 | 24/08/2026 | Planning | Proposed the stack (Node.js, Express, Sequelize), the folder structure and a phased build order. | Chose the final stack and database myself; compared the plan with the task list given to me. |
| 2 | 03/09/2026 | Requirements alignment | Summarised the D1 and D2 documents and compared them with the code built so far; recommended following D2 (the use case model and user stories) as the authority. | Read the documents; confirmed the scope with the team. |
| 3 | 09/09/2026 | Project setup | Step-by-step commands for npm, Git, `.gitignore` and the `.env` file. | Ran every command; confirmed with `git status` that `node_modules` and `.env` are not tracked. |
| 4 | 15/09/2026 | Database (first setup) | Compared hosting options; guided the initial Supabase (PostgreSQL) setup and the Sequelize connection. | Created the Supabase project and storage bucket; kept credentials only in `.env`. Later replaced by Azure (entry 16). |
| 5 | 21/09/2026 | Authentication | Wrote the `User` model, JWT middleware, login, admin-only registration and the admin seed script. | Ran the scripted tests: login works, and registration without a token is refused (401). |
| 6 | 12/10/2026 | Student management | Wrote the `Student` model, controller and routes for register, admit, create account and view. | Ran the scripted tests, all passing, including a student being refused the student list (403). |
| 7 | 12/10/2026 | Teacher management | Wrote the `Teacher` model, controller and routes, and the rule that teachers only see their assigned classes. | Ran the scripted tests, all passing, including 403 on students from other classes. |
| 8 | 12/10/2026 | Results and PDF | Wrote the `Result` model, grading helper, upload, view, edit and delete, and PDF generation. | Ran the scripted tests, all passing; opened the generated PDF and checked its contents. |
| 9 | 12/10/2026 | Validation and deactivation | Added the fixed class list, deactivate and reactivate for students and teachers, and the active-account check in the auth middleware. | Ran the scripted tests, all passing, including an old token being rejected after deactivation (401). |
| 10 | 12/10/2026 | Fees | Wrote the `Fee` model and the owing / not owing endpoints. | Ran the scripted tests, all passing. |
| 11 | 12/10/2026 | Public content | Wrote the news, announcements, events and site-content modules. | Ran the scripted tests, all passing, including drafts staying hidden from the public. |
| 12 | 12/10/2026 | Files and enquiries | Wrote the documents, gallery and contact-enquiry modules, including file uploads with file-type checks (first on Supabase Storage, later moved to Azure Blob Storage, entry 16). | Ran the scripted tests, all passing; fixed my own `.env` configuration errors. |
| 13 | 13/10/2026 | Security hardening | Added helmet, rate limits, CORS allow-list, body-size limits and clean error handling. | Ran the scripted security tests, all passing. |
| 14 | 14/10/2026 | Debugging | Diagnosed errors I pasted in: port already in use, missing modules, a syntax error in `server.js`, an empty `.env`, a malformed storage URL. | Applied each fix myself and re-ran the affected tests. |
| 15 | [add date] | Documentation | Drafted `API_DOCS.md` and the text of the pull request checklist. | Reviewed both against my routes and what I tested. |
| 16 | 21/10/2026 | Move from Supabase to Azure | Planned the move to Azure Database for PostgreSQL and Azure Blob Storage; rewrote `src/utils/storage.js` for Azure Blob Storage (same functions, so controllers and routes were unchanged); diagnosed database connection timeouts caused by firewall rules and network restrictions; updated the API documentation for the new temporary download links. | The Azure resources were created on a teammate's Azure for Students account while we worked together by screen share. I added the firewall rule for my IP, put the connection details in `.env`, recreated the admin account, ran the storage check, and ran the 11-step file test against Azure, all passing. |
| 17 | 22/10/2026 | Deployment planning | Explained and drafted the steps and GitHub Actions workflows for deploying the backend to Azure App Service and the frontend to Azure Static Web Apps; helped diagnose why the GitHub repository did not appear in Azure's repository picker. | **Deployment is not claimed as complete.** No successful deployment is recorded here yet. This entry will be updated with evidence once the deployed address answers the health check. |
| 18 | 22/10/2026 | Documentation | Produced a Word version of the API reference from `API_DOCS.md` for the frontend team. | Checked the generated pages and the endpoint tables against my routes. |

Dates for entries 15 to 18 are approximate and should be confirmed against the author's own records.

### What I personally verified (as reported by the author)

- Ran the scripted API tests for every module and compared each result with its expected value. All modules were tested while the project used Supabase.
- After moving to Azure, re-ran the file-storage flow end to end (upload, public link, temporary download link, rejection of fake or wrong-type files, deletion removing the file), all passing, and recreated and checked the admin account.
- Confirmed that `.env` and the test scripts are not committed.
- Opened a generated PDF result sheet in the browser.
- Checked role restrictions: students, teachers and the public are refused admin actions, and teachers are limited to their assigned classes.

### Limits of verification (as reported by the author)

- The tests are manual scripts kept on the author's computer, not committed automated tests, so reviewers cannot re-run them. The evidence offered is the output shown in the pull request.
- After the move to Azure, only the file-storage flow was re-tested end to end. The other modules (students, teachers, results, fees, news, events, content) were tested on Supabase and use the same PostgreSQL and Sequelize code, so they are expected to behave the same, but their tests have not been re-run on Azure.
- No successful deployment of the backend or the frontend is claimed.
- The Azure database and storage live on a teammate's student account, so their availability depends on that account.
- The author reports relying on AI-generated code in places that may not have been reviewed line by line. Reviewers should check the security-sensitive parts: `src/middleware/auth.js`, the upload checks in `src/utils/storage.js`, and `server.js`.
=======

This file records significant AI-assisted contributions to the Unichild
International School Website and Student Information Management System.
Each contributor is responsible for checking that their entry is
accurate and supported by actual work.

Backend Development AI Usage Record

Project: Unichild International School Website and Student
Information Management System
Team: DevForge
Author: Pascal (Backend Developer)
Branch: pascal-backend

Tool used

Claude (Anthropic), through the claude.ai chat interface.

Summary

AI was used throughout the backend work for planning, writing code,
diagnosing errors, and drafting documentation. The author reports
setting up the project and cloud services, running tests against the
live database, and checking results against the project requirements
documents (D1 main system components, D2 use case model and user
stories).

Backend AI usage log

#             Date as        Area             What AI helped    What I verified
recorded                        with              or changed

1              24/08/2026     Planning         Proposed the      Chose the final
stack (Node.js,   stack and
Express,          database myself;
Sequelize), the   compared the
folder structure  plan with the
and a phased      task list given
build order.      to me.

2              03/09/2026     Requirements     Summarised the D1 Read the
alignment        and D2 documents  documents;
and compared them confirmed the
with the code     scope with the
built so far;     team.
recommended
following D2 (the
use case model
and user stories)
as the authority.

3              09/09/2026     Project setup    Step-by-step      Ran every
commands for npm, command;
Git, .gitignore confirmed with
and the .env    git status
file.             that
node_modules
and .env are
not tracked.

4              15/09/2026      Database         Compared hosting  Created the
options; guided   Supabase project
Supabase          and storage
(PostgreSQL)      bucket; kept
setup and the     credentials only
Sequelize         in .env.
connection.

5              21/09/2026     Authentication   Wrote the User  Ran the scripted
model, JWT        tests: login
middleware,       works, and
login, admin-only registration
registration and  without a token
the admin seed    is refused
script.           (401).

6              12/10/2026     Student          Wrote the         Ran the scripted
management       Student model,  tests, all
controller and    passing,
routes for        including a
register, admit,  student being
create account    refused the
and view.         student list
(403).

7              12/10/2026     Teacher          Wrote the         Ran the scripted
management       Teacher model,  tests, all
controller and    passing,
routes, and the   including 403 on
rule that         students from
teachers only see other classes.
their assigned
classes.

8              12/10/2026     Results and PDF  Wrote the         Ran the scripted
Result model,   tests, all
grading helper,   passing; opened
upload, view,     the generated
edit and delete,  PDF and checked
and PDF           its contents.
generation.

9              12/10/2026     Validation and   Added the fixed   Ran the scripted
deactivation     class list,       tests, all
deactivate and    passing,
reactivate for    including an old
students and      token being
teachers, and the rejected after
active-account    deactivation
check in the auth (401).
middleware.

10             12/10/2026     Fees             Wrote the Fee   Ran the scripted
model and the     tests, all
owing / not owing passing.
endpoints.

11             12/10/2026     Public content   Wrote the news,   Ran the scripted
announcements,    tests, all
events and        passing,
site-content      including drafts
modules.          staying hidden
from the public.

12             12/10/2026     Files and        Wrote the         Ran the scripted
enquiries        documents,        tests, all
gallery and       passing; fixed
contact-enquiry   my own .env
modules,          configuration
including         errors.
Supabase Storage
uploads and
file-type checks.

13             13/10/2026     Security         Added helmet,     Ran the scripted
hardening        rate limits, CORS security tests,
allow-list,       all passing.
body-size limits
and clean error
handling.

14             14/10/2026     Debugging        Diagnosed errors  Applied each fix
I pasted in: port myself and
already in use,   re-ran the
missing modules,  affected tests.
a syntax error in
server.js, an
empty .env, a
malformed storage
URL.

Date verification note: Entry 4 records 15/09/206 in the supplied
text. Pascal should verify the intended year and correct it if needed
before final submission. The dates and test statements above are
recorded claims and should be checked against the contributor's actual
evidence.

What I personally verified (as reported by the author)

Ran the scripted API tests for every module against the live
Supabase database and compared each result with its expected value.

Confirmed that .env and the test scripts are not committed.

Opened a generated PDF result sheet in the browser.

Checked role restrictions: students, teachers and the public are
refused admin actions, and teachers are limited to their assigned
classes.

Limits of verification (as reported by the author)

The tests are manual scripts, not committed automated tests.

The author reports relying on AI-generated code in places that may
not have been reviewed line by line. Reviewers should check
security-sensitive parts: src/middleware/auth.js, the upload
checks in src/utils/storage.js, and server.js.

Team AI Usage Records

Every significant AI-assisted contribution must be recorded here.
Entries should describe actual work and actual verification; do not
claim tests, reviews, deployment, or client acceptance without
supporting evidence.

Date        Student          Tool Used  Prompt/Task       Output     Verification   Related
Summary           Used?      Performed      Issue/PR

September   BOAHEN KWABENA   ChatGPT    Assistance with   Yes        Review the     N/A unless
2, 2026     (boahentech)              drafting and                 declaration,   a related
organizing                   confirm that   issue or
AI_USAGE.md,               it accurately  PR exists
including                    represents the
responsible                  team's
AI-use                       policies, and
principles,                  correct any
confidentiality              inaccurate
guidelines, and              statements
academic                     before
integrity rules.             submission.
>>>>>>> origin/main

Rules

<<<<<<< HEAD
- Do not submit confidential client data to AI tools unless explicitly authorized.
- Do not submit AI-generated work that you cannot explain.
- Never use AI to fabricate tests, commits, client feedback, or project evidence.
- AI may assist with learning, brainstorming, debugging, documentation, and development, but the team remains responsible for the accuracy, security, and maintainability of its work.
- Record significant AI-assisted contributions honestly and update this log as needed.
=======
Do not submit confidential client data to AI tools unless explicitly
authorized.
>>>>>>> origin/main

Do not submit AI-generated work that you cannot explain.

Never use AI to fabricate tests, commits, client feedback, or
project evidence.

<<<<<<< HEAD
Website deployment, code testing, and code review must not be reported as completed unless supported by actual evidence.
=======
AI may assist with learning, brainstorming, debugging,
documentation, and development, but the team remains responsible for
the accuracy, security, and maintainability of its work.

Record significant AI-assisted contributions honestly and update
this log as needed.

Current Audit Status

This log records the AI assistance identified so far. Additional
AI-assisted work must be documented if it occurs.

Website deployment, code testing, and code review must not be reported
as completed unless supported by actual evidence.
>>>>>>> origin/main
