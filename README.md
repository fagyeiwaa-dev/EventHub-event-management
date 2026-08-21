#  EventHub – Event Management & Ticketing Platform

##  Project Overview

EventHub is a web-based **Event Management and Ticketing Platform** designed to make it easier for people to discover, register for, and manage events. The platform brings together event attendees and event organizers in one convenient digital space.

Users can browse and discover different events, view event details, register for free events, purchase tickets for paid events, save interesting events as favourites, and receive reminders about events they plan to attend.

Event organizers can use EventHub to create and publish events, manage event information, monitor registrations, and view the list of attendees.

The overall goal of EventHub is to provide a simple, user-friendly, and organized platform for discovering and managing events.

---

##  Problem Statement

Finding information about events can sometimes be difficult because event details may be spread across different social media platforms, websites, posters, and communication channels. People may also forget about events they are interested in or find it difficult to keep track of the events they have registered for.

Event organizers also face challenges in promoting events, collecting registrations, selling tickets, and managing attendee information.

EventHub aims to address these problems by creating one platform where:

* Users can discover and explore events.
* Users can register or purchase tickets for events.
* Users can save events to view later.
* Users can receive reminders about upcoming events.
* Organizers can create and manage events.
* Organizers can track registrations and attendees.

---

##  Project Objectives

The main objectives of EventHub are to:

1. Provide a central platform for discovering different events.
2. Make event registration and ticket purchasing easier.
3. Allow users to save their favourite events.
4. Help users remember upcoming events through reminders.
5. Provide organizers with tools to create and manage events.
6. Help organizers track registrations and attendees.
7. Create a responsive and user-friendly interface that works on different screen sizes.

---

##  Target Users

EventHub is designed for two main groups of users:

###  Event Attendees

These are people who want to find and attend events. They may be interested in:

* Music events
* Conferences
* Technology events
* Workshops
* Cultural events
* Educational programs
* Networking events
* Business events
* Entertainment events

Event attendees will be able to browse available events and interact with the platform to manage their event experiences.

###  Event Organizers

These are individuals, businesses, institutions, and organizations that organize events.

They will be able to:

* Create events
* Add event details
* Publish events
* Manage event information
* View registered attendees
* Track registrations
* Monitor the progress of their events

---

#  Key Features

##  Event Discovery

Users will be able to discover and browse different events available on the platform.

Events may be organized according to categories such as:

* Music
* Technology
* Business
* Education
* Arts and Culture
* Sports
* Entertainment

Users will eventually be able to search for events based on their interests, location, category, or date.

---

##  Event Registration and Ticketing

Users will be able to register for events directly through EventHub.

For paid events, the platform is intended to support a ticket purchasing process. Users may eventually be able to:

1. Select an event.
2. View the event details.
3. Choose a ticket type.
4. Register or make payment.
5. Receive confirmation of their registration or ticket purchase.

---

##  Favourite Events

Users will be able to save events they are interested in.

This feature will allow users to:

* Keep track of interesting events.
* Return to events later.
* Avoid searching for the same event again.
* Easily view their saved events from their account.

---

##  Event Reminders

EventHub is intended to help users remember events they have registered for.

Users may receive reminders about:

* Upcoming events
* Changes to event information
* Registration confirmations
* Event dates and times

---

##  Event Creation and Management

Event organizers will be able to create events by providing information such as:

* Event title
* Event description
* Event category
* Date
* Time
* Location
* Event image
* Ticket information
* Number of available tickets

Organizers will also be able to update or manage their events.

---

##  Attendee Management

Event organizers will be able to view and manage people who have registered for their events.

This feature is intended to help organizers:

* View attendee information.
* Monitor the number of registrations.
* Keep track of event participants.
* Manage event capacity.

---

##  Registration Tracking

Organizers will eventually have access to registration information that can help them monitor their events.

This may include:

* Total number of registrations.
* Number of available spaces or tickets.
* Attendee details.
* Registration status.
* Event performance information.

---

#  Current Pages

The first version of EventHub currently includes the following pages.

##  Home Page

The Home page acts as the main landing page of EventHub.

It contains:

* A navigation bar.
* A hero section.
* Calls to action.
* Information about EventHub.
* Feature cards.
* Featured event cards.
* A footer.

The Home page introduces users to the purpose of the platform and encourages them to explore events.

---

##  Login Page

The Login page allows existing users to enter their account credentials.

It currently includes:

* Email input.
* Password input.
* Show/hide password functionality.
* Remember me option.
* Forgot password option.
* Login button.
* Link to the Sign Up page.

Authentication functionality can be connected to a backend in future development.

---

##  Sign Up Page

The Sign Up page allows new users to create an EventHub account.

It includes:

* Full name.
* Email address.
* Password.
* Confirm password.
* Terms and Conditions checkbox.
* Show/hide password functionality.
* Create Account button.
* Link to the Login page.

---

##  About Page

The About page explains:

* What EventHub is.
* The problem the platform aims to solve.
* The project's mission.
* The project's vision.
* Event attendees.
* Event organizers.

---

##  Contact Us Page

The Contact page allows users to communicate with the EventHub team.

It currently includes:

* Full name field.
* Email address field.
* Subject field.
* Message field.
* Contact information.
* Basic form submission feedback.

---

#  Components

EventHub uses reusable React components.

##  Navbar

The navigation bar provides links to important pages:

* Home
* About
* Contact
* Login
* Sign Up

React Router is used to allow users to navigate between pages without refreshing the entire application.

---

##  Footer

The Footer is a reusable component that appears at the bottom of the application.

It provides:

* EventHub branding.
* A short description.
* Copyright information.

---

#  How EventHub Is Expected to Operate

## Event Attendee Flow

A typical user will interact with EventHub as follows:

1. Visit the EventHub website.
2. Browse or search for events.
3. Select an event.
4. View the event details.
5. Create an account or log in if necessary.
6. Register for the event or purchase a ticket.
7. Receive confirmation.
8. Save the event as a favourite if desired.
9. Receive reminders before the event.
10. Attend the event.

---

## Organizer Flow

An event organizer is expected to use EventHub as follows:

1. Create an account or log in.
2. Access the organizer section.
3. Create a new event.
4. Add the event information.
5. Publish the event.
6. Allow users to discover and register for the event.
7. Monitor registrations.
8. View and manage attendees.
9. Track the performance of the event.

---

#  React Router DOM

EventHub uses the `react-router-dom` package to manage navigation between pages.

`react-router-dom` allows a React application to have multiple routes and pages while remaining a Single Page Application (SPA).

Instead of creating separate HTML files for every page, React Router displays the correct React component based on the URL.

The current routes include:

| Route      | Page    |
| ---------- | ------- |
| `/`        | Home    |
| `/login`   | Login   |
| `/signup`  | Sign Up |
| `/about`   | About   |
| `/contact` | Contact |

The project also uses React Router features such as:

* `BrowserRouter`
* `Routes`
* `Route`
* `Link`
* `Outlet`

### `BrowserRouter`

`BrowserRouter` enables routing within the React application.

### `Routes`

`Routes` contains the different routes available in the application.

### `Route`

`Route` connects a URL path to a React component.

### `Link`

`Link` allows users to navigate between pages without a full browser refresh.

### `Outlet`

`Outlet` is used inside the main layout to display the currently active page.

---

#  Technologies Used

##  React

React is used to build the user interface using reusable components.

##  Vite

Vite is used to create and run the React application. It provides a fast development environment.

##  Tailwind CSS

Tailwind CSS is used to style the application and create responsive designs.

##  React Router DOM

React Router DOM is used for navigation and routing between pages.

##  JavaScript

JavaScript is used to create interactive features and manage application logic.

##  Git and GitHub

Git is used for version control, while GitHub is used to store and manage the project's source code online.

---

#  Project Structure

```text
eventhub/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

# 🚀 Installation and Setup

To run this project locally:

## 1. Clone the repository

```bash
git clone <your-repository-url>
```

## 2. Move into the project directory

```bash
cd eventhub
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

The application will then be available on the local address provided by Vite.

---

# Future Development

EventHub is designed to grow beyond the current frontend version.

Future development may include:

* User authentication.
* Backend integration.
* Database storage.
* Event search functionality.
* Event filtering.
* Event detail pages.
* Ticket purchasing.
* Payment integration.
* Favourite event functionality.
* Event reminder notifications.
* User dashboards.
* Organizer dashboards.
* Event creation forms.
* Event editing and deletion.
* Attendee management.
* Registration analytics.
* Email notifications.
* Mobile optimization.

---

#  Project Feasibility

EventHub is a feasible project because it can be developed gradually using modern web technologies.

The project can begin with a frontend application where users can view events and navigate through the platform. Additional features can then be introduced in stages.

### Phase 1: Frontend

The first phase focuses on:

* User interface development.
* Responsive design.
* Navigation.
* Forms.
* Event display.
* Landing pages.

### Phase 2: Backend and Database

A backend can later be introduced to support:

* User accounts.
* Authentication.
* Event data.
* Registrations.
* Favourite events.
* Organizer information.

### Phase 3: Advanced Features

The final stages can introduce:

* Payment processing.
* Ticket generation.
* Notifications.
* Reminders.
* Analytics.
* Organizer dashboards.

This phased approach makes the project realistic because features can be developed and tested gradually instead of building the entire platform at once.

---

#  Current Development Status

The current version of EventHub includes:

* Responsive user interface.
* Home/Landing page.
* Login page.
* Sign Up page.
* About page.
* Contact page.
* Navigation system.
* Footer.
* React Router setup.
* Tailwind CSS styling.
* Basic form interactions.
* Password show/hide functionality.
* Contact form submission feedback.

Additional event management and ticketing features will be developed as the project progresses.

---

# What I Am Learning Through This Project

Through the development of EventHub, I am learning and practicing:

* React fundamentals.
* Component-based development.
* React state using `useState`.
* React Router DOM.
* Client-side routing.
* Reusable components.
* Responsive design.
* Tailwind CSS.
* Form development.
* User interface design.
* Git and GitHub.
* Project documentation.
* Planning a feasible web application.

---

##  Conclusion

EventHub aims to make event discovery, registration, ticketing, and event management easier by bringing users and organizers together on one platform.

The platform is designed to provide value to people looking for events while also giving organizers useful tools for creating and managing those events. The current version focuses on establishing a strong frontend foundation, with additional functionality planned for future development.

**Discover. Connect. Experience.**
