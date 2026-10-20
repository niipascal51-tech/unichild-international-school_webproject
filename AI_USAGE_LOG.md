AI Usage Log

DCIT 208 Software Engineering Project

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

4              15/09/206      Database         Compared hosting  Created the
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

Rules

Do not submit confidential client data to AI tools unless explicitly
authorized.

Do not submit AI-generated work that you cannot explain.

Never use AI to fabricate tests, commits, client feedback, or
project evidence.

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
