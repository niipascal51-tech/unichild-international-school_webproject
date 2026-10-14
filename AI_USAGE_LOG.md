# AI Usage Log

**Project:** Unichild International School Website and Student Information Management System
**Team:** DevForge
**Author:** Pascal (Backend Developer)
**Branch:** `pascal-backend`

## Tool used

Claude (Anthropic), through the claude.ai chat interface.

## Summary

AI was used throughout the backend work: planning, writing code, diagnosing errors and drafting documentation. I set up the project and the cloud services myself, ran every test against the live database, and checked results against the project requirements documents (D1 main system components, D2 use case model and user stories).

## Log

| # | Date | Area | What AI helped with | What I verified or changed |
|---|---|---|---|---|
| 1 |24/08/2026 | Planning | Proposed the stack (Node.js, Express, Sequelize), the folder structure and a phased build order | Chose the final stack and database myself; compared the plan with the task list given to me |
| 2 |03/09/2026 | Requirements alignment | Summarised the D1 and D2 documents and compared them with the code built so far; recommended following D2 (the use case model and user stories) as the authority | Read the documents; confirmed the scope with the team |
| 3 |09/09/2026 | Project setup | Step-by-step commands for npm, Git, `.gitignore` and the `.env` file | Ran every command; confirmed with `git status` that `node_modules` and `.env` are not tracked |
| 4 |15/09/206 | Database | Compared hosting options; guided Supabase (PostgreSQL) setup and the Sequelize connection | Created the Supabase project and storage bucket; kept credentials only in `.env` |
| 5 |21/09/2026 | Authentication | Wrote the `User` model, JWT middleware, login, admin-only registration and the admin seed script | Ran the scripted tests: login works, and registration without a token is refused (401) |
| 6 |12/10/2026 | Student management | Wrote the `Student` model, controller and routes for register, admit, create account and view | Ran the scripted tests, all passing, including a student being refused the student list (403) |
| 7 |12/10/2026 | Teacher management | Wrote the `Teacher` model, controller and routes, and the rule that teachers only see their assigned classes | Ran the scripted tests, all passing, including 403 on students from other classes |
| 8 |12/10/2026 | Results and PDF | Wrote the `Result` model, grading helper, upload, view, edit and delete, and PDF generation | Ran the scripted tests, all passing; opened the generated PDF and checked its contents |
| 9 |12/10/2026 | Validation and deactivation | Added the fixed class list, deactivate and reactivate for students and teachers, and the active-account check in the auth middleware | Ran the scripted tests, all passing, including an old token being rejected after deactivation (401) |
| 10 |12/10/2026 | Fees | Wrote the `Fee` model and the owing / not owing endpoints | Ran the scripted tests, all passing |
| 11 |12/10/2026 | Public content | Wrote the news, announcements, events and site-content modules | Ran the scripted tests, all passing, including drafts staying hidden from the public |
| 12 12/10/2026| | Files and enquiries | Wrote the documents, gallery and contact-enquiry modules, including Supabase Storage uploads and file-type checks | Ran the scripted tests, all passing; fixed my own `.env` configuration errors |
| 13 |13/10/2026 | Security hardening | Added helmet, rate limits, CORS allow-list, body-size limits and clean error handling | Ran the scripted security tests, all passing |
| 14 |14/10/2026 | Debugging | Diagnosed errors I pasted in: port already in use, missing modules, a syntax error in `server.js`, an empty `.env`, a malformed storage URL | Applied each fix myself and re-ran the affected tests |
| 15 |14/10/2026 | Documentation | Drafted `API_DOCS.md` and the text of the pull request checklist | Reviewed both against my routes and what I tested |

## What I personally verified

- Ran the scripted API tests for every module against the live Supabase database and compared each result with its expected value.
- Confirmed that `.env` and the test scripts are not committed.
- Opened a generated PDF result sheet in the browser.
- Checked role restrictions: students, teachers and the public are refused admin actions, and teachers are limited to their assigned classes.

## Limits of my verification

- The tests are manual scripts, not committed automated tests.
- I rely on AI-generated code in places I may not have reviewed line by line. Reviewers should check security-sensitive parts: `src/middleware/auth.js`, the upload checks in `src/utils/storage.js`, and `server.js`.
