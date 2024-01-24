<h1 align="center">Hi 👋, I'm Ignacio</h1>
<h3 align="center">A passionate developer from Argentina</h3>
- 🌱 I’m currently learning **Node.js, Express, javaScript**

<h2>Project README</h2>
<h3>Project Overview</h3>
<p>
    This project is a Node.js server that provides user
    authentication and profile management functionality through a set
    of API endpoints. It utilizes the Express.js framework to handle
    HTTP requests and responses. The server follows a modular structure,
    separating concerns by organizing code into controllers and DTOs (Data Transfer Objects).
</p>

<h3>Installation</h3>
<h4>To get started with this project, follow these steps:</h4>
<p>Clone the repository to your local machine:</p>
<code>git clone &lt;repository-url&gt;</code>

<p>Navigate to the project directory:</p>
<code>cd &lt;project-directory&gt;</code>
<p>Install dependencies using npm:</p>
<code>npm install</code>

<p>Create a copy of the .env.example file and name it .env. Update the values of the environment variables according to your configuration.</p>
<code>cp .env.example .env</code>

<h3>Environment Variables</h3>
<p>Ensure that the .env file contains the necessary environment variables.</p>

<h3>API Endpoints</h3>
<h4>User Registration</h4>
<p>
    Endpoint: POST /register<br>
    Request DTO: user-register.dto.js<br>
    Controller: user-register.controller.js
 </p>

<h4>User Login</h4>
<p>
    Endpoint: POST /login
    Request DTO: user-login.dto.js
    Controller: user-login.controller.js
</p>

<h4>User Profile</h4>
<p>
    Endpoint: GET /profile
    Request DTO: user-jwt.dto.js
    Controller: user-profile.controller.js
</p>

<h4>Update User Data</h4>
<p>
    Endpoint: PATCH /update-data
    Request DTOs: user-jwt.dto.js, user-update-data.dto.js
    Controller: user-update-data.controller.js
</p>

<h4>Update User Email</h4>
<p>
    Endpoint: PATCH /update-email
    Request DTOs: user-jwt.dto.js, user-update-email.dto.js
    Controller: user-update-email.controller.js
</p>

<h4>Update User Password</h4>
<p>
    Endpoint: PATCH /update-password
    Request DTOs: user-jwt.dto.js, user-update-password.dto.js
    Controller: user-update-password.controller.js
</p>

<h4>Unregister User</h4>
<p>
    Endpoint: DELETE /unregister
    Request DTOs: user-jwt.dto.js, user-unregister.dto.js
    Controller: user-unregister.controller.js
</p>

<h3>Usage</h3>
<p>Start the server:</p>
<code>npm start</code>

<p>Access the API endpoints using a tool like Postman or curl.</p>

<h3>Contributing</h3>
<p>If you wish to contribute to this project, please follow the contribution guidelines.</p>
<h3>License</h3>
<p>This project is licensed under the MIT License.</p>
<h3 align="left">Connect with me:</h3>
<p align="left">
ignacio.rodriguez.sistemas@gmail.com
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> 
</a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> 
</a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> 
</a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> 
</a> 
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
  </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/>
  </a> 
  <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> 
  </a>
</p>
