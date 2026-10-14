# User Flows — Unichild International School Website

## 1. Introduction

This document describes the main user flows for the Unichild International School website designed by Team DevForge. It outlines how different users navigate the system to complete their tasks.

## 2. User Roles

The website may support the following user roles, subject to the agreed project requirements:

* **School Administrator:** Manages school information, users, and administrative activities.
* **Teacher:** Accesses relevant teaching and student information.
* **Parent/Guardian:** Views relevant information about their child and receives school notifications.
* **Student:** Accesses student-related information and available services.

## 3. Login Flow

**Objective:** Allow authorized users to access the appropriate section of the website.

1. The user opens the login page.
2. The user enters their email address or username and password.
3. The user selects the Login button.
4. The system validates the submitted credentials.
5. If the credentials are invalid, an error message is displayed and the user can try again.
6. If the credentials are valid, the user is redirected to the appropriate dashboard based on their role.

**End Result:** The authorized user reaches the appropriate dashboard.

## 4. Student Registration Flow

**Objective:** Allow an authorized user to register a student.

1. The administrator opens the student registration page.
2. The administrator enters the required student details.
3. The system validates the submitted information.
4. If required information is missing or invalid, the system displays an appropriate message.
5. If the information is valid, the administrator submits the registration.
6. The system saves the information and displays a confirmation message.

**End Result:** The student record is created successfully.

## 5. Parent/Guardian Flow

**Objective:** Allow parents or guardians to access relevant information about their children.

1. The parent or guardian opens the website.
2. The user logs in with valid credentials.
3. The system displays the appropriate dashboard.
4. The user selects the relevant student or child.
5. The user views the available student information and notifications.
6. The user logs out when finished.

**End Result:** The parent or guardian accesses the information available to their account.

## 6. Student Pickup Authorization Flow

**Objective:** Support the safe and authorized pickup of students.

1. The parent or guardian accesses the relevant pickup authorization feature, if provided.
2. The user submits the required pickup information.
3. The system validates the submitted information.
4. The authorized school staff member reviews the pickup details.
5. The system records the pickup status according to the agreed requirements.
6. The relevant parent or guardian receives a notification if this feature is implemented.

**End Result:** The pickup request or record is processed according to the school's approved procedure.

## 7. Notifications Flow

**Objective:** Allow users to receive relevant school notifications.

1. An authorized user performs an action that triggers a notification, or the school publishes an announcement.
2. The system generates or publishes the relevant notification.
3. The intended recipient accesses the notification.
4. The user views the notification details.

**End Result:** The intended user can view relevant notifications.

## 8. Logout Flow

**Objective:** Allow users to end their authenticated session securely.

1. The user selects the Logout option.
2. The system ends the authenticated session.
3. The user is redirected to the login page or another agreed public page.
4. Protected pages require authentication before they can be accessed again.

**End Result:** The user's session is terminated.

## 9. Design Reference

* **Figma Design File:** [https://www.figma.com/design/oQFl125QsXSR8xrUSlcyTF/Unichild-International-School-%E2%80%94-Website-Wireframes?node-id=34-1367&t=FusXeJY9ZCMfLJNJ-1]
* **Interactive Frontend Prototype:** [https://www.figma.com/make/SJlE2YTq91RKSe9c6MbGPs/DevForge-Frontend-Mockup-Dashboard?fullscreen=1&t=xupmRRKKH110Lji9-1&code-node-id=0-6]
* **Interactive Backend Prototype:** [https://www.figma.com/make/dBPdSJgqFJQ3i8ZQ01gko4/DevForge-Backend-Mockup-Dashboard?fullscreen=1&t=nmxgsffZYZtK25K4-1&code-node-id=0-6]

## 10. Notes for Developers

* Follow the approved Figma designs when implementing the user interface.
* Implement authentication, authorization, validation, and error handling according to the agreed requirements.
* Ensure that users can access only the pages and information permitted by their roles.
* Maintain consistent navigation and provide clear feedback after user actions.
* Confirm any unclear user-flow requirements with the project team before implementation.

## 11. Document Status

**Prepared by:** Nicholas Wilson
**Role:** UI/UX Designer
**Team:** DevForge
**Status:** Under Review
