# AI Usage Log

**Project:** Unichild International School Website and Student Information Management System
**Team:** DevForge
**Author:** Pascal (Backend Developer)
**Branch:** `pascal-backend`

> Draft. Edit before committing: fill in the dates, correct anything that does not match what you did, and add anything missing. This log must be honest. Do not claim verification you did not perform.

## Tool used

Claude (Anthropic), through the claude.ai chat interface.

## Summary

AI was used throughout the backend work: planning, writing code, diagnosing errors and drafting documentation. I set up the project and configured its connection to the cloud services, ran scripted tests against the live database, and checked results against the project requirements documents (D1 main system components, D2 use case model and user stories). The database and file storage started on Supabase and were later moved to Microsoft Azure (Azure Database for PostgreSQL and Azure Blob Storage).

## Log

| # | Date | Area | What AI helped with | What I verified or changed |
|---|---|---|---|---|
| 1 | | Planning | Proposed the stack (Node.js, Express, Sequelize), the folder structure and a phased build order | Chose the final stack and database myself; compared the plan with the task list given to me |
| 2 | | Requirements alignment | Summarised the D1 and D2 documents and compared them with the code built so far; recommended following D2 (the use case model and user stories) as the authority | Read the documents; confirmed the scope with the team |
| 3 | | Project setup | Step-by-step commands for npm, Git, `.gitignore` and the `.env` file | Ran every command; confirmed with `git status` that `node_modules` and `.env` are not tracked |
| 4 | | Database (first setup) | Compared hosting options; guided the initial Supabase (PostgreSQL) setup and the Sequelize connection | Created the Supabase project and storage bucket; kept credentials only in `.env`. Later replaced by Azure (row 16) |
| 5 | | Authentication | Wrote the `User` model, JWT middleware, login, admin-only registration and the admin seed script | Ran the scripted tests: login works, and registration without a token is refused (401) |
| 6 | | Student management | Wrote the `Student` model, controller and routes for register, admit, create account and view | Ran the scripted tests, all passing, including a student being refused the student list (403) |
| 7 | | Teacher management | Wrote the `Teacher` model, controller and routes, and the rule that teachers only see their assigned classes | Ran the scripted tests, all passing, including 403 on students from other classes |
| 8 | | Results and PDF | Wrote the `Result` model, grading helper, upload, view, edit and delete, and PDF generation | Ran the scripted tests, all passing; opened the generated PDF and checked its contents |
| 9 | | Validation and deactivation | Added the fixed class list, deactivate and reactivate for students and teachers, and the active-account check in the auth middleware | Ran the scripted tests, all passing, including an old token being rejected after deactivation (401) |
| 10 | | Fees | Wrote the `Fee` model and the owing / not owing endpoints | Ran the scripted tests, all passing |
| 11 | | Public content | Wrote the news, announcements, events and site-content modules | Ran the scripted tests, all passing, including drafts staying hidden from the public |
| 12 | | Files and enquiries | Wrote the documents, gallery and contact-enquiry modules, including file uploads with file-type checks (first on Supabase Storage, later moved to Azure Blob Storage, row 16) | Ran the scripted tests, all passing; fixed my own `.env` configuration errors |
| 13 | | Security hardening | Added helmet, rate limits, CORS allow-list, body-size limits and clean error handling | Ran the scripted security tests, all passing |
| 14 | | Debugging | Diagnosed errors I pasted in: port already in use, missing modules, a syntax error in `server.js`, an empty `.env`, a malformed storage URL, and database connection timeouts caused by firewall rules and network restrictions | Applied each fix myself and re-ran the affected tests |
| 15 | | Documentation | Drafted `API_DOCS.md` and the text of the pull request checklist | Reviewed both against my routes and what I tested |
| 16 | | Move from Supabase to Azure | Planned the move to Azure Database for PostgreSQL and Azure Blob Storage; rewrote `src/utils/storage.js` for Azure Blob Storage (same functions, so controllers and routes were unchanged); diagnosed the connection timeouts; updated the API documentation for the new temporary download links | The Azure resources were created on a friend’s Azure for Students account while we worked together by screen share. I added the firewall rule for my IP, put the connection details in `.env`, recreated the admin account, ran the storage check, and ran the 11-step file test against Azure, all passing |

## What I personally verified

- Ran the scripted API tests for every module and compared each result with its expected value. All modules were tested while the project used Supabase.
- After moving to Azure, re-ran the file-storage flow end to end (upload, public link, temporary download link, rejection of fake or wrong-type files, deletion removing the file), all passing, and recreated and checked the admin account.
- Confirmed that `.env` and the test scripts are not committed.
- Opened a generated PDF result sheet in the browser.
- Checked role restrictions: students, teachers and the public are refused admin actions, and teachers are limited to their assigned classes.

## Limits of my verification

- The tests are manual scripts, not committed automated tests.
- After the move to Azure, only the file-storage flow was re-tested end to end. The other modules (students, teachers, results, fees, news, events, content) were tested on Supabase and use the same PostgreSQL and Sequelize code, so I expect them to behave the same, but I have not re-run their tests on Azure.
- The Azure database and storage live on a friend’s account, so their availability depends on that account.
- I rely on AI-generated code in places I may not have reviewed line by line. Reviewers should check security-sensitive parts: `src/middleware/auth.js`, the upload checks in `src/utils/storage.js`, and `server.js`.