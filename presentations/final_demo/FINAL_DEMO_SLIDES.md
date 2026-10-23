# Uni Child International School Website and Student Information Management System
## Team DevForge — Final Demo and Handoff

### Slide 1: Title
**Project:** Uni Child International School Website and Student Information Management System (SMS)  
**Team:** DevForge  
**Course:** DCIT 208 — Software Engineering  
**Presentation:** Final Demo and Handoff  
**Frontend:** https://zealous-flower-03357b203.4.azurestaticapps.net  
**Backend Health:** https://unichildinternationalschoolbackend-bfg4hwd8fpduavgp.westus3-01.azurewebsites.net/api/health

### Slide 2: Problem and Project Motivation
- School information and administrative records need to be accessible and organised.
- Manual processes can make information retrieval and communication more difficult.
- Parents and guardians need clear information about the school and admissions.
- School administrators and teachers need appropriate tools for managing student-related information.

### Slide 3: Project Objectives
- Provide an online platform for Uni Child International School.
- Present school information, academics, admissions, news, events and gallery content.
- Support student information management and role-based access.
- Provide a foundation for managing results, fees and school communications.
- Demonstrate a deployable web application with a separate backend API.


### Slide 4: Intended Users
**Administrator**
- Manage student records and relevant school information.
- Perform authorised administrative activities.

**Teacher**
- Access relevant teaching functions and student-related workflows.

**Student**
- Access the student portal and relevant academic information.

**Public visitor**
- Browse school information and admissions-related content.

### Slide 5: Main Features
- Public school website and navigation.
- About, academics and admissions pages.
- News, events and gallery pages.
- Student management dashboard.
- Student and teacher portal interfaces.
- Backend API routes for authentication, students, teachers, results, fees, content and enquiries.

*The availability of each complete workflow must be confirmed through demonstration.*

### Slide 6: Technology and Architecture
**Frontend**
- HTML
- CSS
- JavaScript

**Backend**
- Node.js
- Express.js
- REST API

**Data layer**
- PostgreSQL
- Sequelize ORM

**Hosting and delivery**
- Azure Static Web Apps for the frontend.
- Azure App Service for the backend.
- GitHub repository and GitHub Actions deployment workflows.

**Architecture flow**

User's browser → Frontend website → Backend REST API → Database

### Slide 7: Example User Workflows
**Workflow 1 — Public visitor**
1. Open the school website.
2. Navigate through school information and academics.
3. Open admissions or contact information.

**Workflow 2 — Student administration**
1. Open the administrator dashboard.
2. View the student directory.
3. Demonstrate student registration or record management where the workflow is operational.

**Workflow 3 — Student or teacher access**
1. Open the appropriate portal.
2. Demonstrate authentication using an authorised test account.
3. Show the relevant functionality only if it works in the deployed environment.

### Slide 8: Deployment and CI/CD
- The frontend is accessible through its Azure Static Web Apps URL.
- The backend health endpoint returned `{"status":"Server is running"}` during the deployment check.
- GitHub Actions deployment workflows are configured for the frontend and backend.
- A successful deployment workflow does not, by itself, establish that every application feature works correctly.
- Final verification of API integration and user workflows remains necessary.

### Slide 9: Security and Privacy
- Backend authentication uses JSON Web Tokens (JWT).
- Role-based authorisation is implemented through backend middleware.
- Helmet adds HTTP security headers.
- Rate limiting is configured for API requests and login attempts.
- The application restricts cross-origin requests using configured CORS origins.
- Student information and credentials should only be accessed by authorised users.
- Deployment secrets must be stored securely in hosting settings or GitHub Secrets, not committed to the repository.

### Slide 10: Testing and Quality Assurance
**Current evidence**
- The deployed frontend loaded in the browser.
- The backend health endpoint responded successfully.
- Browser developer tools showed frontend resources loading.
- Formal end-to-end quality assurance has not yet been completed.

**Outstanding checks**
- Authentication and role permissions.
- Student registration and record updates.
- Results and fees workflows.
- Form validation and error handling.
- Mobile layout and accessibility.
- API integration and database-backed operations.

No unperformed test should be reported as passed.

### Slide 11: Sprint Progress and Changes
- Developed the public-facing school website and portal interfaces.
- Established a separate backend API and database integration.
- Configured cloud hosting and deployment workflows.
- Updated the frontend API configuration to point to the deployed backend.
- Prepared user, deployment and client handoff documentation.

*The team should confirm these activities against its actual commits, project board and work records before presenting them as sprint evidence.*

### Slide 12: AI Use and Academic Integrity
- AI tools may support brainstorming, explanations, drafting and development assistance.
- Significant AI use must be recorded in the project's AI-use documentation.
- Team members remain responsible for checking generated content and code.
- The team must be able to explain its implementation and engineering decisions.
- The AI usage log and acknowledgements must be completed using accurate information.

### Slide 13: Known Limitations and Future Improvements
- Formal end-to-end QA remains outstanding.
- Automated backend tests have not been established in the supplied project package.
- Database backup, recovery and rollback procedures require practical verification.
- Client acceptance and feedback have not yet been documented as confirmed.
- Further improvements should follow verified testing results and stakeholder feedback.

### Slide 14: Handoff and Maintenance
Handoff documentation prepared:
- User Manual
- Deployment and Operations Guide
- Client Handoff document

Recommended next steps:
1. Complete and record QA checks.
2. Verify the deployed workflows and API integration.
3. Capture genuine screenshots for the manual and presentation.
4. Obtain and document client feedback where available.
5. Confirm the final release tag and repository evidence.
6. Record the unlisted demo video link.

### Slide 15: Repository and Closing
**Project:** Uni Child International School Website and Student Information Management System  
**Team:** DevForge

**Frontend repository:**  
https://github.com/niipascal51-tech/unichild-international-school_webproject

**Deployed website:**  
https://zealous-flower-03357b203.4.azurestaticapps.net
 

 # Slide 16 — Project Evidence and Release

**GitHub Repository:**  
https://github.com/niipascal51-tech/unichild-international-school_webproject

**Main Branch:** `main`

**D9 Release Tag:** `v1.0-demo`

**Tagged Commit:** `93012d5` — `docs: prepare D9 final demo and handoff`

**Release Tag Link:**  
https://github.com/niipascal51-tech/unichild-international-school_webproject/tree/v1.0-demo

**Deployed Frontend:**  
https://zealous-flower-03357b203.4.azurestaticapps.net

**Backend Health Check:**  
https://unichildinternationalschoolbackend-bfg4hwd8fpduavgp.westus3-01.azurewebsites.net/api/health

**Handoff Documents:**
- Client Handoff
- User Manual
- Deployment and Operations Guide

**Demo Video:** Unlisted YouTube link pending upload.

**Project Board:** Add the team's actual project board URL before the presentation.

**Final message:**  
The project provides an online school website and a foundation for student information management. The next priority is to verify the complete user workflows, finalise the handoff evidence and document the remaining limitations transparently.

Thank you.
