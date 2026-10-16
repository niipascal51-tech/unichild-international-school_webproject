# Unichild International School: Backend API

Base URL (local): `http://localhost:5000/api`
Base URL (deployed): to be added after deployment.

All requests and responses use JSON, except file uploads (`multipart/form-data`) and PDF downloads.

## Roles

| Role | How the account is created |
|---|---|
| Public visitor | No account, no login needed |
| `student` | Created by the admin after the student is admitted |
| `teacher` | Created by the admin |
| `admin` | Created with the seed script (`node src/seedAdmin.js`) |

There is no public sign-up. Parents and visitors do not log in.

## Authentication

Log in once, then send the token with every protected request:

```
Authorization: Bearer <token>
```

- Tokens expire after **1 day**. After that, log in again.
- Never put the token in a URL. Always use the header.
- A deactivated account is rejected immediately, even with a valid token.

## Errors

| Status | Meaning |
|---|---|
| 400 | Validation failed. Body is `{ "errors": [ { "path", "msg" } ] }` or `{ "message" }` |
| 401 | Missing, invalid or expired token, or the account is unavailable |
| 403 | Logged in, but your role is not allowed to do this |
| 404 | Not found |
| 409 | Conflict, for example the email already exists |
| 413 | File or request body too large |
| 429 | Too many requests (rate limited) |
| 500 | Server error: `{ "message": "..." }` |

Every other error body is `{ "message": "..." }`.

## Limits

- General: 600 requests per 15 minutes per visitor.
- Login: 10 **failed** attempts per 15 minutes per visitor, then `429`.
- Contact enquiry: 5 submissions per hour per visitor.
- JSON body: 100 KB. Document upload: 10 MB (PDF only). Gallery upload: 5 MB (JPG, PNG, WebP).

## Reference values

- **Classes** (exact spelling required): `Creche`, `Nursery`, `Kindergarten`, `Primary 1` to `Primary 6`, `JHS 1` to `JHS 3`
- **Terms:** `First Term`, `Second Term`, `Third Term`
- **Session format:** `2025/2026`
- **Dates:** `YYYY-MM-DD`
- **Grades:** A (80 and above), B (70+), C (60+), D (50+), E (40+), F (below 40). The server calculates them.

---

## Health

| Method | Path | Access | Description |
|---|---|---|---|
| GET | `/health` | Public | Returns `{ "status": "Server is running" }` |

## Auth

| Method | Path | Access | Body |
|---|---|---|---|
| POST | `/auth/login` | Public | `{ email, password }` |
| POST | `/auth/register` | Admin | `{ name, email, password (min 8), role }` |

**Login response (200):**
```json
{ "token": "...", "user": { "id": 1, "name": "School Admin", "email": "...", "role": "admin" } }
```
Errors: `401` wrong email or password, `403` account deactivated, `429` too many failed attempts.

For students and teachers, use the dedicated endpoints below instead of `/auth/register`.

## Students

The admin workflow is: **register, then admit, then create account**.

| Method | Path | Access | Description |
|---|---|---|---|
| POST | `/students` | Admin | Register a student (status `pending`) |
| PATCH | `/students/:id/admit` | Admin | Admit the student and generate the admission number |
| POST | `/students/:id/account` | Admin | Create the login. Body: `{ email, password (min 8) }`. Student must be admitted |
| GET | `/students` | Admin, Teacher | List students. Query: `status`, `className`, `includeInactive=true` (admin only). Teachers only see their assigned classes |
| GET | `/students/:id` | Admin, Teacher (own classes), Student (own record) | One student |
| GET | `/students/me` | Student | The logged-in student's own record |
| PATCH | `/students/:id` | Admin | Update student details |
| PATCH | `/students/:id/active` | Admin | Body: `{ isActive: true or false }`. Deactivating also locks the student's login |

**Register body:**
```json
{
  "firstName": "Ama", "lastName": "Mensah", "dateOfBirth": "2014-05-12",
  "gender": "female", "className": "Primary 4",
  "guardianName": "Kofi Mensah", "guardianPhone": "0240000000", "address": "optional"
}
```

**Student object:** `id`, `userId`, `admissionNumber` (for example `UIS/2026/0001`, set on admission), `firstName`, `lastName`, `dateOfBirth`, `gender` (`male` or `female`), `className`, `guardianName`, `guardianPhone`, `address`, `status` (`pending` or `admitted`), `admittedAt`, `isActive`, `createdAt`, `updatedAt`.

## Teachers

| Method | Path | Access | Description |
|---|---|---|---|
| POST | `/teachers` | Admin | Create the teacher and the login together |
| GET | `/teachers` | Admin | List all teachers |
| GET | `/teachers/me` | Teacher | Own profile |
| GET | `/teachers/:id` | Admin, Teacher (own) | One teacher |
| PATCH | `/teachers/:id` | Admin | Update `phone`, `subjects`, `assignedClasses` |
| PATCH | `/teachers/:id/active` | Admin | Body: `{ isActive }`. Deactivating also locks the login |

**Create body:**
```json
{
  "name": "Kwame Owusu", "email": "kwame@example.com", "password": "min 8 chars",
  "phone": "0200000000", "subjects": ["Mathematics"], "assignedClasses": ["Primary 4"]
}
```
Response includes a generated `staffId` (for example `UIS/T/001`). Teachers can only see students and upload results for their `assignedClasses`.

## Results

| Method | Path | Access | Description |
|---|---|---|---|
| POST | `/results` | Teacher (own classes), Admin | Upload results for one subject. Re-uploading the same student, subject, term and session updates the score |
| GET | `/results/me` | Student | Own results |
| GET | `/results/me/pdf` | Student | Own results as PDF |
| GET | `/results/student/:studentId` | Admin, Teacher (own classes), Student (own) | A student's results |
| GET | `/results/student/:studentId/pdf` | Same as above | PDF |
| PATCH | `/results/:id` | Admin | Body: `{ score }` |
| DELETE | `/results/:id` | Admin | Delete one result |

The GET endpoints accept the optional queries `term` and `session`.

**Upload body:**
```json
{
  "subject": "Mathematics", "term": "First Term", "session": "2025/2026",
  "records": [ { "studentId": 1, "score": 72 }, { "studentId": 2, "score": 55 } ]
}
```
Scores are 0 to 100. Only admitted students can receive results.

**Results response:**
```json
{
  "student": { "id": 1, "name": "Ama Mensah", "admissionNumber": "UIS/2026/0001", "className": "Primary 4" },
  "results": [ { "id": 5, "subject": "Mathematics", "term": "First Term", "session": "2025/2026", "score": 72, "grade": "B", "remark": "Very Good" } ],
  "summary": { "subjects": 1, "total": 72, "average": 72 }
}
```

**PDF notes for the frontend:**
- The PDF endpoint needs the token, so you cannot link to it directly. Request it with `fetch` and the `Authorization` header, then turn the response into a blob.
- **Download button:** request without extra parameters. The server sends it as an attachment.
- **Print button:** add `?disposition=inline` so it opens in the browser, ready to print.
- If there are no results, the response is `404 { "message": "No results available" }`.

## Fees

Fee status is either `owing` or `not_owing`.

| Method | Path | Access | Description |
|---|---|---|---|
| GET | `/fees/me` | Student | Own fee status |
| GET | `/fees` | Admin | All records. Query: `term`, `session`, `status`, `className` |
| GET | `/fees/student/:studentId` | Admin | One student's fee status |
| PUT | `/fees/student/:studentId` | Admin | Set or update the status for a term |
| DELETE | `/fees/:id` | Admin | Delete a record |

**PUT body:** `{ "term": "First Term", "session": "2025/2026", "status": "owing", "amountOwed": 450, "note": "optional" }`

**Student response:**
```json
{
  "student": { "id": 1, "name": "...", "admissionNumber": "...", "className": "..." },
  "overallStatus": "owing",
  "records": [ { "id": 1, "term": "First Term", "session": "2025/2026", "status": "owing", "amountOwed": 450, "note": null } ]
}
```
`overallStatus` is `owing` if any term is owing, `not_owing` if records exist and none are owing, and `unavailable` if there are no records yet.

## News and announcements

`/news` and `/announcements` work identically.

| Method | Path | Access | Description |
|---|---|---|---|
| GET | `/news` | Public | Published posts, newest first. Query: `limit` (max 100, default 20), `offset` |
| GET | `/news/:id` | Public | One published post |
| GET | `/news/admin/all` | Admin | All posts including drafts |
| POST | `/news` | Admin | Body: `{ title (max 200), body, status }`. `status` is `draft` (default) or `published` |
| PATCH | `/news/:id` | Admin | Any of `title`, `body`, `status` |
| DELETE | `/news/:id` | Admin | Delete |

**Post object:** `id`, `type`, `title`, `body`, `status`, `publishedAt`, `createdAt`, `updatedAt`.

## Events and calendar

| Method | Path | Access | Description |
|---|---|---|---|
| GET | `/events` | Public | Query: `category`, `from`, `to` (events overlapping that date range) |
| GET | `/events/:id` | Public | One event |
| POST | `/events` | Admin | Create |
| PATCH | `/events/:id` | Admin | Update |
| DELETE | `/events/:id` | Admin | Delete |

Categories: `academic`, `event`, `meeting`, `examination`, `admission`, `holiday`.

**Create body:** `{ "title": "...", "description": "optional", "category": "examination", "startDate": "2026-12-01", "endDate": "2026-12-05", "location": "optional" }`. `endDate` defaults to `startDate`, and cannot be earlier than it.

## Website content (about, admissions and so on)

One text block per section. Valid sections: `home`, `about`, `academics`, `admissions`, `departments`, `games`, `fees`, `contact`.

| Method | Path | Access | Description |
|---|---|---|---|
| GET | `/content` | Public | Every published section, as an object keyed by section name |
| GET | `/content/:section` | Public | One section. `404` if the admin has not published it yet |
| PUT | `/content/:section` | Admin | Create or replace. Body: `{ title, body, data }` (`data` is optional JSON for lists, dates and so on) |
| DELETE | `/content/:section` | Admin | Remove |

## Documents (downloads)

| Method | Path | Access | Description |
|---|---|---|---|
| GET | `/documents` | Public | Query: `category` |
| POST | `/documents` | Admin | `multipart/form-data`: `file` (PDF, max 10 MB), `title`, `category`, optional `description` |
| DELETE | `/documents/:id` | Admin | Delete (also removes the file) |

Categories: `about`, `admissions`, `fees`, `forms`, `other`.

Each document has `url` (opens in the browser, good for print) and `downloadUrl` (forces a download). Both are public links.

## Gallery

| Method | Path | Access | Description |
|---|---|---|---|
| GET | `/gallery` | Public | Query: `category` |
| POST | `/gallery` | Admin | `multipart/form-data`: `file` (JPG, PNG or WebP, max 5 MB), `category`, optional `caption` |
| PATCH | `/gallery/:id` | Admin | Update `caption` or `category` |
| DELETE | `/gallery/:id` | Admin | Delete (also removes the file) |

Categories: `building`, `events`, `activities`, `other`. Each item has a public `url` to use as an image source.

## Contact enquiries

| Method | Path | Access | Description |
|---|---|---|---|
| POST | `/enquiries` | Public | Body: `{ name, email, phone?, subject?, message (10 to 2000 characters) }`. Limited to 5 per hour |
| GET | `/enquiries` | Admin | Query: `status` (`new`, `read`, `resolved`) |
| PATCH | `/enquiries/:id` | Admin | Body: `{ status }` |
| DELETE | `/enquiries/:id` | Admin | Delete |

---

## Notes for the frontend

1. **Always send the token in the header**, never in the URL.
2. **Uploads:** send `FormData` with the file in a field named `file`. Do not set the `Content-Type` header yourself, so the browser adds the correct boundary.
3. **Text is plain text.** Show it as text, and never insert it as raw HTML, otherwise a stored script could run.
4. **Handle `401` globally:** clear the saved token and redirect to the login page.
5. **Show the right screens per role.** The server enforces permissions, but hiding buttons a user cannot use makes for a better experience.
6. **Deployed CORS:** the backend only accepts browser requests from the frontend address configured at deployment. Tell the backend developer your final URL.