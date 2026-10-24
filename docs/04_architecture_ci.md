# DCIT 208 | SOFTWARE ENGINEERING

## Unichild International School

# D4 Architecture and Engineering Baseline

Architecture • Repository baseline • Deployment • Defense • v0.0-baseline

---

## A. Architecture report

### A1. Confirmed requirements

The system serves prospective parents, current students, teachers and administrators. Public pages cover school information, admissions, academics, departments, news, announcements, events, games/competitions, gallery, downloads and contact. Authenticated areas provide student results and fee status, teacher student/result workflows and administrative management.

| Area | Requirement reflected |
|---|---|
| School levels | Creche, Nursery, Kindergarten, Primary and JHS. |
| Pages | Home, About Us, Academics, Admissions, News/Blog, Contact Us, Departments, Games/Inter-school Competitions. |
| Admissions | Administrator registers and admits students, then creates their accounts. Students do not admit self-admit. |
| Student | Access own results, fee status (owing/not owing) and approved student information. |
| Teacher | Login, view students and upload results; exact permissions need refinement. |
| Administrator | Manage student/teacher accounts, admissions, results, fee status, public content and downloads. Only administrator posts news, announcements and events. |
| Other | Events/calendar, gallery, downloads and printable/PDF results; contact, WhatsApp, Maps/location and hours. FAQ pending; no existing site/social integration. |

Confirmed contact information in the master requirements: +233 244 891 066; +233 558 636 562; Unichildschool11@gmail.com; IH41 Bletse St. GW-0926-5269; Monday-Friday, 6:30 AM-4:00 PM. Motto: "Lógia Kai Práxeis — Words and Actions." Verify details with the client before production publication.

### A2. System context

The system boundary contains the public website, authenticated portals, application/API, database and managed file storage. Users connect over HTTPS. Email, WhatsApp, maps and hosting are external services; initial WhatsApp/maps use links unless configured. There is no legacy site or social integration in scope.

**CONTEXT DIAGRAM (recreate using C4 conventions)**

```text
Prospective parent/community ─┐
Student ──────────────────────┤
Teacher ──────────────────────┼── HTTPS ──> Unichild Website
Administrator ────────────────┘                 │
                                          Application/API
                                                ├── PostgreSQL
                                                └── Private object storage

External: email provider / WhatsApp link / map provider / hosting/monitoring
Boundary: no existing website, social login, feed or synchronization.
```

### A3. Container and component architecture

Proposed stack: TypeScript and Next.js for public pages and role-based portals; a same-origin server/API layer; PostgreSQL; private managed object storage. Use a modular monolith first: one codebase and deployable application with clear domain modules. This keeps operations manageable for a student team while preserving boundaries.

```text
+---------------- Proposed managed hosting boundary ----------------+
| Next.js / TypeScript application                                  |
| Public pages | Student UI | Teacher UI | Administrator UI         |
| Server modules: auth, admissions, people, results, fees, content  |
| Validation | role/ownership authorization | audit | PDF/print     |
+-----------------------+--------------------+----------------------+
                        | SQL/TLS            | signed upload access
                        v                    v
               Managed PostgreSQL     Private object storage
Users --HTTPS--> Web app              (documents, images, PDFs)

External: configured email, map/WhatsApp links, platform monitoring
```

| Module | Responsibility |
|---|---|
| Identity/access | Sign-in sessions, password recovery policy and server-side role checks; no public student registration. |
| Admissions | Administrator registers/admit students and provisions accounts. |
| Student records | Student identity, level/class and approved profile fields. |
| Results | Teacher submits for authorized class; admin reviews/publishes; student reads own published results and printable PDF. |
| Fee status | Store owing/not-owing with effective date and authorized updater; amounts require clarification. |
| Content/media | Admin-managed news, announcements, events, admission information, downloads and gallery metadata/files. |
| Contact | Public details and, if enabled, minimal inquiry form with defined delivery/retention. |

### A4. Data model draft

Logical schema proposal, not a finalized migration. Use UUID identifiers, UTC timestamps and restrictive authorization. Do not collect unconfirmed fields. Confirm whether guardian/contact records are needed.

```text
User(id UUID PK, email UNIQUE, password_hash/provider_subject, role, active)
Student(id UUID PK, user_id FK NULL, admission_no UNIQUE, names, level,
        class_id FK, admission_status, admitted_at, created_by FK User)
Teacher(id UUID PK, user_id FK UNIQUE, display_name, active)
Class(id UUID PK, level, name, academic_year, active)
Enrollment(id UUID PK, student_id FK, class_id FK, academic_year, dates)
Result(id UUID PK, student_id FK, class_id FK, subject, assessment,
       score/grade TBD, term, academic_year, status draft|published,
       entered_by FK User)
FeeStatus(id UUID PK, student_id FK, status owing|not_owing, effective_at,
          updated_by FK User, restricted_note)
Post(id UUID PK, author_id FK, type news|announcement, title, body, status)
Event(id UUID PK, author_id FK, title, description, dates, category, status)
Download(id UUID PK, author_id FK, title, category, object_key, visibility)
GalleryItem(id UUID PK, author_id FK, caption, object_key, alt_text, visibility)
AuditEvent(id UUID PK, actor_id FK NULL, action, entity_type/id, created_at)
```

Relationships: User may have a student or Teacher profile; Classes have enrollments; Students have results and fee-status history; authorized Users author posts, events and media. Enforce teacher-to-class scope and preserve result/status history when corrections are made.

### A5. API/interface contract

Proposed JSON over HTTPS. Validate at the server boundary, paginate lists and return consistent errors. All endpoints are protected unless marked Public. PDFs require authorization before generation or delivery.

| Method / path | Access | Purpose |
|---|---|---|
| `GET /api/public/content?type=` | Public | Published public page content/news/announcements. |
| `GET /api/public/events?from=&to=` | Public | Published calendar events in range. |
| `GET /api/public/downloads` | Public | List only public files with safe URLs. |
| `POST /api/auth/session` | Unauthenticated | Authenticate; set secure session cookie; generic failure. |
| `POST /api/admin/admissions` | Admin | Register/admit; return student ID/status. No self-admit route. |
| `POST /api/admin/students/id/account` | Admin | Provision student account using approved onboarding. |
| `GET /api/student/me/results` | Student | Caller's published results; optional term/year. |
| `GET /api/student/me/results/id/pdf` | Student | Printable PDF after ownership check. |
| `GET /api/student/me/fee-status` | Student | Caller's status and effective date. |
| `GET /api/teacher/classes/id/students` | Teacher | Roster only for authorized class; minimal fields. |
| `POST /api/teacher/results` | Teacher | Submit draft for authorized class. |
| `PATCH /api/admin/results/id/publish` | Admin | Review/publish with actor and time. |
| `PUT /api/admin/students/id/feestatus` | Admin | Set status and record actor/effective date. |
| `POST/PATCH /api/admin/content[/id]` | Admin | Create/edit/publish/archive content and audit changes. |
| `POST /api/public/inquiries` | Public, if enabled | Minimal inquiry intake with rate limits. |

Success:

```json
{ "data": { "status": "owing", "effectiveAt": "2026-09-01T00:00:00Z" } }
```

Error:

```json
{ "error": { "code": "VALIDATION_ERROR", "fields": { "term": "Required" }, "requestId": "..." } }
```

Responses: 401 unauthenticated; 403 denied; 404 absent; 409 conflict; 422 invalid; 429 rate limit; 500 generic error plus request ID. Never return hashes, tokens, stack traces, or another student's records.

### A6. Architecture Decision Records

#### ADR-001: TypeScript and Next.js modular application

**Status:** Proposed; team approval pending.
**Context:** Public pages and role portals must be delivered by a small team.
**Decision:** Propose TypeScript/Next.js modular monolith with UI and server/domain modules by capability.
**Consequences:** One deployment and shared language reduce overhead. Preserve module boundaries; authorization must run server-side.

#### ADR-002: PostgreSQL

**Status:** Proposed; team approval pending.
**Context:** Students, classes, results, fee status and content have relationships and integrity constraints.
**Decision:** Propose managed PostgreSQL, migrations, foreign keys, transactions and unique constraints.
**Consequences:** Supports integrity; requires reviewed migrations, backups and least privilege credentials.

#### ADR-003: Server-side role and ownership authorization

**Status:** Proposed; team approval pending.
**Context:** Student data is sensitive and roles differ.
**Decision:** Propose secure server-managed sessions and role plus resource-ownership checks on every protected request. Admin provisions student accounts.
**Consequences:** Requires denied-access tests, account recovery policy and audit logging.

#### ADR-004: Managed deployment services

**Status:** Proposed; team approval pending.
**Context:** The team should avoid operating servers while retaining recovery paths.
**Decision:** Propose managed web hosting, PostgreSQL and private object storage, subject to cost, residency and school approval.
**Consequences:** Less operations work; confirm vendor, backup/restore, secrets, costs and export plan.

### A7. Security and privacy assumptions

- Treat names, class membership, results and fee status as personal/sensitive. Collect only approved fields; agree access, retention and disclosure with the school.
- Enforce access on the server: students see own published records; teachers see assigned classes; only administrators manage admission, accounts, fee status and school posts.
- Use HTTPS, secure HttpOnly/SameSite cookies, CSRF protection as applicable, rate limits, reviewed password hashing/identity provider and secret storage outside source control.
- Log security actions without passwords, tokens or unnecessary student details. Restrict audit logs and define retention.
- Validate/encode content; restrict uploads by type, size and access; keep private records out of public paths.
- Encrypt and access-control backups; test restores. Agree with recovery objectives before promising service levels.
- Use synthetic records in development, demos, screenshots and tests.
- Confirm applicable Ghana privacy duties, hosting location, parental notice/consent and incident handling with client/supervisor; this is not a legal determination.

---

## B. Repository engineering baseline

### B1. Proposed repository layout

```text
.github/workflows/ci.yml
.github/ISSUE_TEMPLATE/{feature_request,bug_report,documentation}.yml
.github/pull_request_template.md
.github/CODEOWNERS
app/ src/ db/ tests/ public/
docs/04_architecture_ci/
presentations/mid_sem_architecture_defense/
.env.example Makefile package.json package-lock.json README.md
```

### B2. Makefile contract

Targets are intended for the proposed Node/Next.js stack. Map them to real package scripts and verify them locally before committing; CI must run real commands, not echo-only placeholders.

```makefile
.PHONY: setup lint test build run check
setup:
	npm ci
lint:
	npm run lint
test:
	npm test -- --run
build:
	npm run build
run:
	npm run dev
check: lint test build
```

If the test runner does not support `--run`, adjust and document the command. Use a test database or mocks, never production records.

### B3. GitHub Actions workflow

```yaml
name: CI
on:
  pull_request:
    branches: [main]
  push:
    branches: [main]
permissions:
  contents: read
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: make setup
      - run: make lint
      - run: make test
      - run: make build
```

Draft only; no workflow run is asserted. Review and preferably pin third-party actions to approved commit SHAs. Require checks only after verifying the real workflow.

### B4. Pull request template

```markdown
## Summary
What changed and why?

## Related issue
Closes #

## Verification
- [ ] make lint  [ ] make test  [ ] make build when relevant
- [ ] Manual checks and outcomes:

## UI evidence
- [ ] Screenshots attached for UI work, using synthetic data
- [ ] Not applicable (explain):

## Safety and data
- [ ] Authorization, validation, privacy and migration impact reviewed
- [ ] No secrets or real student data added

## AI assistance disclosure
- Tools used:
- Assistance provided:
- What the author verified or changed:
```

### B5. Issue templates

Create three separate valid YAML form files under `.github/ISSUE_TEMPLATE/`. Each form must have a clear title, description and labels.

| Template | Required fields |
|---|---|
| `feature_request.yml` | Requirement/story link; user outcome; Given/When/Then acceptance criteria; user role; owner; flags for student data/security and client clarification. Label `requirement`. |
| `bug_report.yml` | Reproduction steps; expected vs actual; environment/build; safe evidence with personal data removed. Label `bug`. |
| `documentation.yml` | Document/section; proposed change and reason; owner. Label `docs`. |

### B6. CODEOWNERS and main protection

```text
# Replace placeholders with actual GitHub teams/users
/Makefile @TEAM_DEVOPS
/.github/workflows/ @TEAM_DEVOPS
/.github/CODEOWNERS @TEAM_DEVOPS
/package.json @TEAM_DEVOPS
/package-lock.json @TEAM_DEVOPS
/docs/04_architecture_ci/ @TEAM_ARCHITECTURE
/presentations/mid_sem_architecture_defense/ @TEAM_PRODUCT
```

Protect `main`: pull request required; one review by someone other than author; require verified CI checks; dismiss stale approvals after new commits; resolve conversations; block force push and deletion; limit bypass to named maintainers under team policy. CODEOWNERS requests reviewers but does not replace protection. Capture settings as evidence after configuration.

### B7. Ownership areas

| Course role | Responsibility |
|---|---|
| DevOps / Release Lead | GitHub, Makefile, CI, secrets, branch protection, deployment and release evidence. |
| Architecture Lead | Diagrams, data models, API, ADRs and security assumptions. |
| Product / Client Manager | Backlog/traceability, clarifications, board and defense framing. |
| Implementation/QA team | Role flows, tests, reviews, evidence and meaningful defense contribution. |

Insert actual team member names and assignments; these are responsibilities, not claims of completed work.

---

## C. Deployment and environment plan

### C1. Platform rationale

Propose a managed application platform for Next.js, managed PostgreSQL and private object storage. Separate development, staging and production, with version-controlled deployment configuration. This limits server operations for the student team and supports backups. Choose the provider only after reviewing cost, regional availability, data location, school approval, backup/export and course access. No provider is client-confirmed.

### C2. Environment variables and secrets

| Variable | Purpose and handling |
|---|---|
| `DATABASE_URL` | Secret; separate least-privilege database credential per environment; TLS. |
| `SESSION_SECRET` | Random per environment; secret manager only. |
| `APP_BASE_URL` | Non-secret canonical origin per environment. |
| `STORAGE_BUCKET` / `STORAGE_ENDPOINT` | Storage target; endpoint configuration reviewed. |
| `STORAGE_ACCESS_KEY` / `STORAGE_SECRET_KEY` | Secrets; least privilege, rotate, never commit. |
| `EMAIL_PROVIDER_API_KEY` | Optional secret if an email provider is approved. |
| `MAPS_EMBED_URL` | Non-secret approved map link; verify location. |
| `LOG_LEVEL` / `SENTRY_DSN` | Configuration; review privacy and log redaction. |

```dotenv
# .env.example: safe placeholders only
APP_BASE_URL=http://localhost:3000
DATABASE_URL=postgresql://app:replace-me@localhost:5432/unichild_dev
SESSION_SECRET=replace-with-local-random-value
STORAGE_BUCKET=unichild-local
STORAGE_ENDPOINT=http://localhost:9000
STORAGE_ACCESS_KEY=replace-me
STORAGE_SECRET_KEY=replace-me
EMAIL_PROVIDER_API_KEY=
MAPS_EMBED_URL=
LOG_LEVEL=debug
SENTRY_DSN=
```

Ignore real `.env` files; commit only `.env.example`. Never commit production credentials/data. Rotate exposed secrets immediately; deleting a later copy does not revoke them.

### C3. Fresh local setup

1. Install team-approved Node.js LTS, Git and package manager; document versions.
2. Clone [REPOSITORY URL] and check out the README development branch.
3. Copy `.env.example` to `.env.local` and use local-only values. Never use production credentials or pupil data.
4. Start local PostgreSQL, apply documented migrations and seed synthetic records only.
5. Use local-only admin/teacher/student test accounts with non-production passwords.
6. Run `make setup`, `make lint`, `make test` and `make build`; start with `make run`.
7. Check public pages and role boundaries using synthetic accounts; record results in the issue/PR.

Define exact migration and seed commands in package scripts/README when implemented; none are fabricated here.

### C4. Staging and Releasing path

| Stage | Control and evidence |
|---|---|
| Pull request | Issue, review, lint/test/build CI; synthetic data; migrations reviewed. |
| Staging | Deploy reviewed commit; migrate isolated DB; check public pages, admin admission, teacher results, student own-record access, PDF printing, accessibility and contact links. |
| Release candidate | Client/team content and access review; confirm retention, hosting and high-risk defects; capture dated evidence. |
| Production | Tag reviewed commit; back up DB; apply compatible migrations; deploy; smoke-test public and role flows; monitor. |
| After release | Record URL, tag, SHA, deploy time, approver, smoke results and rollback point. None is claimed complete here. |

### C5. Backups and rollback

- Enable encrypted database backups and point-in-time recovery if available; a starting proposal is daily backups retained 14 days, subject to client/provider approval and cost.
- Back up/version private files; separate storage credentials and test restoration of both DB and referenced files in an isolated environment.
- Keep previous known-good application deployment and a backup. Prefer backward-compatible migrations; avoid destructive schema changes in a release.
- If new data was written after a faulty migration, stop writing and follow a reviewed recovery plan; do not blindly overwrite current data.
- Agree recovery time (RTO) and data loss window (RPO) with the school. Both remain TBD.

---

## D. Mid-semester architecture defense deck content

Target 8-9 minutes, maximum 10. Use 16:9 landscape, readable text and synthetic screenshots/data only. Assign meaningful speaking parts to every team member. Deliver PPTX and PDF under `presentations/mid_sem_architecture_defense/`.

| Slide / time | Slide content | Speaker notes and evidence |
|---|---|---|
| 1 Title / 0:20 | Unichild International School; DCIT 208 D4; [TEAM]; [DATE]. | Introduce team and purpose; make no unsupported implementation claims. |
| 2 Problem/client / 0:45 | Client; one access point for information and school workflows; Creche through JHS. | Use supplied requirements; verify any public contact details before publishing. |
| 3 Users / 0:55 | Parent/community; administrator admits and creates account; teacher views authorized students/enters results; student sees own results/fee status. | Explain students do not self-admit; administrator alone posts news/announcements/events. |
| 4 Requirements/scope / 0:55 | Pages, calendar, competitions, gallery, downloads/printing, contact routes, role portals; FAQ pending; no legacy/social connection. | Link to actual D3 stories. Note unresolved fee/result rules, guardian fields, teacher assignments and retention. |
| 5 Backlog / 0:55 | Epics: public info; content/calendar; admissions/accounts; results; fees; media; access/security; deployment. [SPRINT]. | Show actual board link and owners only when board exists; separate planned and completed work. |
| 6 Architecture / 1:20 | Context and container diagram; Next.js app/modules; PostgreSQL; private object storage; external services; modular monolith proposal. | Explain server-side role boundaries. Stack and hosting remain proposed. |
| 7 Data/API/security / 1:05 | User, Student, Teacher, Class, Enrollment, Result, Fee Status, Post, Event, Download, GalleryItem, Audit Event. HTTPS and ownership checks. | Teacher class scope, student own-record access, synthetic demo data. Cite test evidence only if it exists. |
| 8 Repository/CI / 1:00 | [REPO URL]; Makefile; CI; templates; CODEOWNERS; [BOARD URL]. | Show actual tree, CI run and branch protection. State verified status honestly. |
| 9 Risks/progress/lessons / 1:00 | Risks: student data, unclear fee/result rules, content, recovery, media consent, backups/cost. [DONE/EVIDENCE] [NEXT]. | Explain requirements shaped access design; state blockers and owners. |
| 10 Release/close / 0:35 | v0.0-baseline [TAG LINK OR PLACEHOLDER]; YouTube [LINK OR NOT REQUIRED/NOT RECORDED]; next milestone. | Recap and invite feedback. Never fabricate URLs or evidence. |

### Defense production checklist

- Replace repository, board, release, team, sprint, evidence and video fields with verified information; if no video exists, say so accurately.
- Export PPTX and PDF; check landscape layout, legible text, clear audio/visuals and under-10-minute timing.
- Assign each member a speaking segment and contribution.
- Use real repo/board/app screenshots only; remove all personal and student information.

---

## E. Baseline release notes for v0.0-baseline

Draft release record. Create the tag only after repository review and commit verification. This text does not assert existing release, implementation, CI, test, deployment or client approval.

### Release title

v0.0-baseline - Architecture and repository engineering baseline

### Summary

Records the proposed architecture, domain model, API contract, security assumptions, repository quality gates, local setup and deployment approach as a starting point for implementation.

### Included when committed

- Architecture report and context/container diagrams.
- Proposed data model, API contract and ADRs.
- Makefile, CI workflow, PR/issue templates, CODEOWNERS and main-branch policy.
- Environment, local setup, staging, backup and rollback plans.
- Defense deck source and exports, if committed.

### Scaffolded / proposed

Next.js application, PostgreSQL schema, authorization, hosting, file storage and provider integrations are proposals until implemented and approved. Replace this with verified scaffold details at release.

### Tests and CI

Tests run: [COMMANDS AND RESULTS]. CI run: [WORKFLOW URL/STATUS]. If failing, state failure, impact and instructor-approved remediation: [DETAILS]. Do not claim pass without linked evidence.

### Not implemented / limitations

- Do not imply admissions, portals, results, fees, editing, uploads, PDF generation, backups or deployment are implemented unless verified. Replace this list with observed status.
- FAQ is optional and pending confirmation.
- Teacher assignments, grade fields, fee workflow, retention and provider require decisions.
- Before production: privacy review, approved content, accessibility, restore and release smoke evidence.

| Release metadata | Value to verify |
|---|---|
| Repository URL | [INSERT] |
| Tag URL / actual SHA | [INSERT] |
| Release date | [INSERT] |
| CI run/result | [INSERT] |
| Tests run | [INSERT] |
| Deployment URL | [INSERT OR NOT DEPLOYED] |
| Failures/remediation | [INSERT] |
| Reviewer | [INSERT VERIFIED NAME] |

### Evidence and readiness checklist

A checked item means the team has verified it and can show the artifact; this document marks none of the external implementation evidence complete.

- [ ] Architecture matches scope and backlog.
- [ ] At least three ADRs are committed, dated and approved.
- [ ] Data model/API permissions reviewed against roles.
- [ ] Makefile setup/lint/test/run/build commands work.
- [ ] CI runs real commands on PRs; build gate is agreed.
- [ ] Three issue forms are separate valid files; PR template includes AI disclosure.
- [ ] CODEOWNERS and main protection are configured and evidenced.
- [ ] Fresh developer setup works with synthetic data.
- [ ] Staging/release owners and evidence locations are recorded.
- [ ] Backup retention/objectives approved and restore tested before production.
- [ ] Defense covers required topics and contains real links or honest placeholders.
- [ ] Tag and commit SHA match submitted source.
- [ ] Required baseline PDF and defense PPTX/PDF are ready.
- [ ] Open questions have owners and target dates.

### AI assistance disclosure

AI assistance helped organize and draft this baseline, including example diagrams, contracts, templates and defense notes. AI did not verify the team repository, run CI/tests, configure GitHub, deploy the application, create a release, validate requirements with the client or produce project evidence. The team must review every section, adapt commands to the actual repository, confirm sensitive requirements with the client, and accurately disclose further AI use in submitted work and pull requests.

---

## Appendix: traceability and open questions

| Requirement | Design/evidence target |
|---|---|
| Public school pages and motto | Public content module; client-approved text. |
| Administrator-led admissions | Admissions API; admin-only account provisioning. |
| Student results and fee status | Student portal; own-record checks; printable result PDF. |
| Teacher access/results | Teacher class authorization and result draft/publish flow. |
| Admin-only content | Protected content management and audit events. |
| Competitions/gallery/downloads | Content categories, media metadata/storage and visibility. |
| Contact routes | Phone/email/WhatsApp/map/hours; verify before release. |
| FAQ and external integrations | FAQ pending; no legacy/social integration assumed. |

| Question | Reason | Owner/date |
|---|---|---|
| Approved hosting provider and data location? | Cost, privacy and recovery. | [OWNER/DATE] |
| Guardian fields and access? | Minimize collection. | [OWNER/DATE] |
| Result format/review/corrections? | Schema and PDF workflow. | [OWNER/DATE] |
| Who updates fees, how often, amounts or only status? | Avoid stale/unsupported disclosure. | [OWNER/DATE] |
| Teacher-to-class assignment rules? | Roster/result authorization. | [OWNER/DATE] |
| Account invitation/reset method? | Safe onboarding and recovery. | [OWNER/DATE] |
| Inquiry form delivery and retention? | Third-party processing and data collection. | [OWNER/DATE] |
| Photo consent and media retention? | Safeguard children in gallery. | [OWNER/DATE] |
| FAQ desired? | Source says "Maybe". | [OWNER/DATE] |
| RTO/RPO? | Avoid unsupported uptime commitments. | [OWNER/DATE] |
