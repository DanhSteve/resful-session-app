# restful-session-app

## Description
A RESTful application for managing user login sessions, built with Node.js, Express, MongoDB, and session middleware.

## Features
- User registration and login
- Session management using `express-session` and session storage in MongoDB (`connect-mongo`)
- Password security with `bcryptjs`
- Cookie management with `cookie-parser`
- User management with Mongoose

## Folder Structure
```
├── app.js                # Express app entry point
├── package.json          # Project info and dependencies
├── models/
│   └── User.js           # User schema definition
├── routes/
│   └── auth.js           # Authentication routes
```

## Installation
1. Install Node.js and MongoDB
2. Install dependencies:
   ```cmd
   npm install
   ```
3. Start MongoDB server
4. Run the app:
   ```cmd
   node app.js
   ```

## Used Packages
- express
- mongoose
- express-session
- connect-mongo
- bcryptjs
- cookie-parser

## Author
- Cong Danh

## License
ISC
