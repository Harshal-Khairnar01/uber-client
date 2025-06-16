# Uber Clone Frontend

This project is a clone of the Uber mobile application's frontend, built using React and modern web technologies.

## Pages Documentation

### User Login Page

The User Login page provides authentication functionality for regular users of the Uber clone application.

#### Features
- Email and password authentication
- Form validation
- "Create new Account" option
- "Sign in as Captain" alternative
- Responsive mobile-first design

#### Technical Details
- Component: `UserLogin.jsx`
- State Management: React useState for email, password
- Form validation using HTML5 attributes
- Tailwind CSS for styling

### Captain Login Page

The Captain Login page handles authentication for drivers (captains) in the application.

#### Features
- Email and password authentication
- Form validation
- "Register as a Captain" option
- "Sign in as User" alternative
- Consistent UI with User Login

#### Technical Details
- Component: `CaptainLogin.jsx`
- State Management: React useState for email, password
- Form validation using HTML5 attributes
- Tailwind CSS for styling

#### Common Styling
- Full-screen responsive layout
- Light gray (#eeeeee) input fields
- Black primary action buttons
- Role-specific accent colors
  - User: Orange (#f99705)
  - Captain: Yellow (#f9c005)

### Home Page

The Home page serves as the landing page for the Uber clone application. It provides users with a simple and intuitive interface to get started with the service.

#### Features

- **Header Logo**: Displays the Uber logo in the top-left corner of the page
- **Background Image**: Features a full-screen background image related to transportation
- **Get Started Section**: Contains a call-to-action section at the bottom of the page

#### Component Structure

```jsx
Home
├── Header Section
│   └── Uber Logo Image
└── Get Started Section
    ├── Heading ("Get Started with Uber")
    └── Continue Button (Links to Login page)
```

#### Styling

- Uses Tailwind CSS for responsive design
- Full-screen height layout with flexbox
- White background for the call-to-action section
- Black button with white text for high contrast

#### Navigation

The Home page includes a "Continue" button that redirects users to the login page (`/login`) using React Router's `Link` component.

#### Technical Details

- **Component**: `Home.jsx`
- **Location**: `src/pages/Home.jsx`
- **Dependencies**:
  - React
  - React Router DOM (`Link` component)
  - Tailwind CSS (for styling)

#### Implementation Example

```jsx
// Key elements in the Home component
<div className="bg-cover bg-center pt-10 h-screen flex justify-between flex-col w-full">
  {/* Uber Logo */}
  <img className="w-14 ml-8" src="uber-logo.png" alt="Uber" />
  
  {/* Get Started Section */}
  <div className="bg-white pb-7 py-5 px-10">
    <h2 className="text-2xl font-bold">Get Started with Uber</h2>
    <Link to="/login" className="...">Continue</Link>
  </div>
</div>
```