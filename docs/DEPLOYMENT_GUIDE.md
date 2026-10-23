# Deployment Guide

## 1. Purpose and deployment model

This guide describes how to prepare and deploy the Unichild International School project. The repository screenshot showed HTML pages and `css/`, `images/`, and `js/` directories in the main branch, which may support deployment of the public frontend as a static website. Confirm the current branch structure and application architecture before deploying.

**Important:** If the project includes a separate API/backend or database, deploying the static frontend does not deploy those services. The backend must be deployed separately using the team's approved hosting provider, and the frontend must be configured to call the verified backend URL. Do not put database credentials or private keys in frontend files.

## 2. Before deployment

- [ ] Confirm with the team which branch is approved for deployment (usually `main` only after review).
- [ ] Confirm the actual entry page. It may be `index.html`; verify that it exists at the repository root.
- [ ] Confirm required assets load using relative paths.
- [ ] Check navigation links and forms.
- [ ] Remove demo credentials and any real student or client-sensitive data.
- [ ] Confirm no `.env` files, passwords, API keys, or database credentials are committed.
- [ ] Run the checks documented by the repository. Inspect `Makefile` before running `make setup`, `make lint`, or `make test`; record the actual result.
- [ ] Get the required team review before production deployment.
- [ ] Confirm whether the project is frontend-only or has a separate backend/API.

## 3. Option A — Deploy a static frontend to Netlify

Use this path only if the approved site can be served as static HTML/CSS/JavaScript and its dependencies do not require a build step.

### Step 1: Sign in
1. Open the official Netlify website: https://www.netlify.com/
2. Sign in or create an account using an account approved by your team.
3. Prefer a team-controlled account or team-approved ownership arrangement rather than leaving the project dependent on one person's personal account.

### Step 2: Import the GitHub repository
1. In Netlify, choose the option to add or import a new project/site.
2. Choose deployment from an existing Git provider.
3. Select GitHub and authorize access if prompted.
4. Choose `niipascal51-tech/unichild-international-school_webproject`.
5. Select the approved deployment branch, normally `main` after the team has reviewed it.

### Step 3: Configure the build
For a plain static HTML/CSS/JavaScript site:
- **Build command:** leave blank if no build is required.
- **Publish directory:** use the repository root (`.`) only if the entry HTML file and assets are at the repository root.
- If the application has a build system, use the actual build command and output directory specified by its configuration. Do not guess these values.

Before deploying, verify that the selected directory contains the site's entry page, usually `index.html`.

### Step 4: Deploy
1. Review the selected repository, branch, build command, and publish directory.
2. Click the deploy button.
3. Wait for the deployment process to finish.
4. Open the generated site URL.
5. If deployment fails, open the deploy log and address the actual error rather than changing settings at random.

### Step 5: Test the deployed website
- [ ] Home page opens without a 404.
- [ ] CSS and images load.
- [ ] Navigation links go to the intended pages.
- [ ] Pages work at mobile and desktop widths.
- [ ] Forms show appropriate validation and feedback.
- [ ] WhatsApp, email, phone, and location links use verified client details.
- [ ] No private student data or credentials are visible.
- [ ] Browser console and network panel have been checked for errors.
- [ ] Any API-backed functions work against the approved backend, if one exists.
- [ ] Refreshing a page or opening a direct page URL behaves as expected.

### Step 6: Record evidence
Record:
- Deployment date.
- Hosting provider and site URL.
- Repository and deployed branch.
- Commit hash deployed.
- Build/deploy result.
- Test cases performed and actual results.
- Known defects or limitations.
- Person who reviewed the deployment.

Do not label the site production-ready unless the team has completed its required checks and approvals.

## 4. Option B — Update an existing Netlify site

If the project is already connected to Netlify:
1. Open the existing site in the team-approved Netlify account.
2. Check its Git repository and production branch.
3. Confirm the branch matches the approved release branch.
4. Push approved changes to that branch through the team's GitHub workflow.
5. Watch the deployment status in Netlify.
6. Open the deployed URL and repeat the smoke tests in Section 3, Step 5.
7. Save the deployment URL, commit hash, and test evidence.

Do not create a second production site without checking with the team first.

## 5. Backend and database warning

If the project includes an Express/Node.js API, a PostgreSQL database, Supabase, or another backend service:
- Deploy the backend separately using the team's chosen and approved service.
- Configure secrets only in the backend host's environment-variable settings.
- Use the correct production API URL in the frontend configuration.
- Apply database migrations and seed only safe, approved test data.
- Verify authentication, role-based authorization, and data access controls.
- Ensure the database is not publicly exposed without appropriate controls.
- Test the frontend-to-backend connection after both services are deployed.

The existence of backend code or a successful frontend deployment does not prove that the backend is deployed or secure.

## 6. Rollback and incident response
If a deployment breaks the website:
1. Capture the error and deployment identifier.
2. Inform the project manager and relevant developer.
3. Use the hosting provider's deployment history to restore the last known good deployment if the team authorizes it.
4. Record what was rolled back and why.
5. Fix and test the issue before redeploying.

## 7. Completion checklist
- [ ] Deployment target and owner approved by the team.
- [ ] Correct branch and publish directory verified.
- [ ] Secrets and sensitive data checked.
- [ ] Deployment completed successfully.
- [ ] Public URL opens and core pages tested.
- [ ] Backend separately verified if applicable.
- [ ] Evidence and limitations documented.
- [ ] README deployment link/instructions updated.
- [ ] GitHub issue updated with actual results.
