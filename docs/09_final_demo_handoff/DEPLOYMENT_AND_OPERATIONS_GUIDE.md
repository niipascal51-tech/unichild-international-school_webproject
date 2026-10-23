# Deployment and Operations Guide

## Uni Child International School Website and Student Information Management System

**Team:** DevForge  
**Project:** Uni Child International School Website and Student Information Management System  
**Version:** 1.0 Demo  
**Status:** Academic project — deployment and operational verification in progress

## 1. System Architecture

The system consists of:
- **Frontend:** HTML, CSS and JavaScript hosted on Azure Static Web Apps.
- **Backend:** Node.js and Express REST API hosted on Azure App Service.
- **Database:** PostgreSQL accessed through Sequelize ORM.
- **API communication:** HTTPS requests between the frontend and backend.

**Frontend URL:** https://zealous-flower-03357b203.4.azurestaticapps.net

**Backend health endpoint:** https://unichildinternationalschoolbackend-bfg4hwd8fpduavgp.westus3-01.azurewebsites.net/api/health

The health endpoint previously returned `{"status":"Server is running"}`. This confirms the endpoint responded at that time; it does not replace complete application testing.

## 2. Prerequisites

Before setting up the backend, ensure you have:
- Node.js compatible with the project configuration.
- npm.
- Access to a PostgreSQL database.
- The backend source code.
- The required environment variables.
- Access to the hosting platform and its deployment settings.

## 3. Backend Setup

1. Obtain the backend source code from the project repository.
2. Open a terminal in the backend directory.
3. Install the dependencies using:

   `npm ci`

4. Create a local `.env` file based on `.env.example`.
5. Configure the required environment variables.
6. Start the application using the start command defined in `package.json`, typically:

   `npm start`

7. Open `/api/health` on the configured server to confirm that the health endpoint responds.

Do not commit `.env` files, database credentials, JWT secrets, or deployment credentials to the repository.

## 4. Environment Configuration

Configure these values in the hosting platform's secure environment settings:

- `DATABASE_URL`: PostgreSQL connection string.
- `JWT_SECRET`: a strong secret of at least 32 characters.
- `CORS_ORIGINS`: the permitted frontend origin or origins.
- `NODE_ENV`: set to `production` for production deployment.
- `PORT`: supplied by the hosting environment where applicable.

Configure any additional variables required by `.env.example` and the application's file-storage implementation. Use actual values from the hosting configuration; do not include secrets in this document.

## 5. Frontend Deployment

1. Commit and push approved frontend changes to the appropriate GitHub branch.
2. Allow the configured GitHub Actions workflow to deploy the frontend.
3. Review the workflow result.
4. Open the deployed frontend URL.
5. Confirm that the frontend is configured to call the deployed HTTPS backend API rather than `localhost`.
6. Confirm that the backend permits requests from the deployed frontend origin.

A successful workflow is deployment evidence, but does not by itself prove that every application feature works.

## 6. Backend Deployment

1. Confirm that the backend source and deployment workflow are present in the repository.
2. Configure the required application settings and deployment credentials securely.
3. Confirm that the PostgreSQL database is reachable.
4. Deploy through the configured GitHub Actions workflow.
5. Review the deployment logs and application startup logs.
6. Check the health endpoint and confirm that application routes respond as expected.

Database connectivity, authentication, CORS and application functionality must be verified separately.

## 7. Database Operations

- Restrict database access to authorised users and application services.
- Keep database credentials confidential.
- Back up the database regularly according to the school's agreed retention policy.
- Test restoration before relying on a backup for recovery.
- Review schema changes before deployment.
- Confirm the database state before performing destructive maintenance.

The current backend startup code calls Sequelize synchronization. Review the database migration and schema-management strategy before using the system for real school records.

## 8. Security and Maintenance

- Use HTTPS for deployed services.
- Keep dependencies updated and review security advisories.
- Protect administrator and user credentials.
- Apply role-based access controls.
- Monitor application errors and failed authentication attempts.
- Keep secrets in hosting-platform settings.
- Review access permissions when team responsibilities change.
- Avoid using real student information in demonstrations unless properly authorised.

## 9. Backup, Recovery and Rollback

Before a release:
1. Back up the database using the selected PostgreSQL backup procedure.
2. Record the deployed application version or Git commit.
3. Verify that the previous stable version can be redeployed.
4. Document any database changes that could affect rollback.

If a deployment fails, inspect the workflow and application logs, restore the previous stable application version where appropriate, and verify database integrity. Database restoration should be performed only by an authorised person.

**Note:** The backup schedule, recovery time objectives and restoration procedure must be agreed and verified by the system owner before operational handoff.

## 10. Troubleshooting

| Problem | Checks |
|---|---|
| Frontend does not load | Confirm the deployment URL and hosting workflow status. |
| API request fails | Check the backend URL, browser Network panel, HTTPS and CORS settings. |
| Login fails | Check credentials, authentication response, JWT configuration and database availability. |
| Database connection fails | Verify `DATABASE_URL`, network access and database service status. |
| Uploaded files fail | Check configured storage settings, permissions and service logs. |
| Deployment fails | Review GitHub Actions logs and hosting-platform logs. |

## 11. Current Limitations and Handoff

- Automated backend tests have not yet been established in the supplied project package.
- Formal end-to-end quality assurance remains outstanding.
- Backup restoration and rollback procedures require practical verification.
- Production readiness and client acceptance have not been established by this guide.

The project team should update this document after the remaining checks, demonstrations and handoff arrangements are completed.

## 12. Ownership

**Project team:** DevForge  
**System owner:** To be confirmed with the school  
**Maintenance contact:** To be designated  
**Document review:** Update after verified system or infrastructure changes.
