# iTunes-Search-App

iTunes Search App

### Summary

* This is a full stack application built using react.js and express.js for front and backend respectively. 
   A user can enter any search term and the application will search and return relevant results using the iTunes API.

 ### Check out on how to use the app

 ## Express Backend (localhost:3001) Setup

   * Type "npm install" to install the node modules required for the backend

   * Once installation has completed, type "npm start" to start the backend server which will run on port 3001

### React frontend (localhost: 3000) setup

  * Open a new command line but keep the old one open.(This is hosting our backend)

  * Navigate to the "frontend" folder inside the "capstone" folder using the command line and 
    install node modules for the react front end. To do this type "npm install" again.

  * When the installation has been completed, type "npm start" to start the front end which will open on localhost:3000. 
    It is important for the other command line to remain open as that is being used as the proxy server listening on port 3001

### Helpful Packages

  * Express: Installing this will give us our Server

  * Node Fetch: Used to fetch data from the API

  * Helmet: Used to secure our application

  * Check the package.json file to see these included dev dependences 
