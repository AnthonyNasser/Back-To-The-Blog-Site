# Back-To-The-Blog-Site
[Back-To-The-Blogs](https://back-to-the-blogs.herokuapp.com/) is a template Blog-Site I used to learn and hone skills in React and Redux. Inspired by the Back to the Future trilogy and the [delorean ipsum generator](https://satoristudio.net/delorean-ipsum/),
this site features nonsensical blog posts filled with quotes from the movies. The site also implements token-based user-authentication using Redux and bcrypt.js, but there is no real point in this feature outside of
the code's reusability. 

## Technology
- Node.js
- MongoDB
  - mongoose
- Express
  - express-async-handler
- React
  - React-DOM
  - React-redux
  - React-router-bootstrap
  - React-router-DOM
- Redux
  - redux-thunk
  - redux-devtools-extension (for development)
- Authentication:
  - JSONwebtoken
  - bcrypt
- Other:
  - dotenv
  - concurrently / nodemon (for development)
  
  ## File Structure
  ### Backend
  - config (anything that has to do with database configuration)
  - controllers (async routes can be found in controllers)
  - data (data used to seed the database)
  - middleware (for authentication and error handling)
  - models
  - routes (imports controllers, server.js uses these files for api routing)
  - utils (holds the file generates JSON web tokens)
  - seeder.js (use npm run data:import or data:destroy)
  - server.js (runs API)
  
  ### Frontend
  - build (used for production)
  - node_modules
  - public (holds landing page images and index.html, the rest of the images are not stored within the project)
  - src
    - actions (uses axios to pull data from API and controls client-side error-handling_
    - components (holds application components)
    - constants (holds constants used for actions/reducers)
    - reducers (handles action payloads and returns current state depenidng on the success of a given request)
    - screens (implements components for applications screens, react-bootstrap stuff mostly found here)
  - App.js (Client-side entry point, react-router stuff is found here)
  - store.js (combines reducers, applies middleware, and creates redux store, redux/redux-thunk stuff is mostly found here)
  
  ### Other
  - package.json
  - package-lock.json
  - Procile (this file is necessary to launch the application with heroku)
   
  ## Launch
  The site is live via this [link](https://back-to-the-blogs.herokuapp.com/), but it may take a minute to startup because the free version of heroku is slow.
 




