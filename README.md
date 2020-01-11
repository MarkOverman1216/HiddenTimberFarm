# Hidden Timber Farm Stable Management App

Created by "Financially Stable" 

Project Team Members: Tiur Mawaddah, Mark Overman, Kevin Le, Gabrielle Umbach, and Jennifer Gaumnitz
____________

The target for the Hidden Timber Farm Stable Management app is the small horse boarding operation needing a way to market to potential boarders, manage a horse and owner database, and communicate with existing clients.

- - - -
Heroku-deployed app: https://hiddentimberfarm.herokuapp.com/

GitHub repository: https://github.com/MarkOverman1216/HiddenTimberFarm

Demo video: https://youtu.be/GQ0b37w_lZw
- - - -

### How You Can Get Started With This Project ###

<strong>To use the app:</strong> 

Visit the Heroku link above. 

Enter your name in the field and click "ENTER". 

![Home Page](./images_for_README/Home_Page_01.PNG)

![Hello Page](./images_for_README/Hello_Page_02.PNG)

At the bottom of the welcome screen, click the down arrow to see the services and amenities of the stable (the public-facing pages that require no login). Navigate to the four pages with the dots on the far right of the screen.


![Welcome Page](./images_for_README/Services_and_Amenities_Page_03.PNG)

![Boarding Options Page](./images_for_README/Services_and_Amenities_Page_04.PNG)

![Owner Amenities Page](./images_for_README/Services_and_Amenities_Page_05.PNG)

![Permanent Residents Page](./images_for_README/Services_and_Amenities_Page_06.PNG)

The "Contact Us" button, on the navbar at the bottom of the page, takes a user to a form that collects basic data (first and last name, phone number, email address, and a brief message). This information is emailed to the stable manager. (This is currently set to send an email to a gmail account we set up for our class project.)

![Contact Us Form](./images_for_README/Contact_Us_Page_07a.PNG)

Successful submission of the form yields this screen:
![Successful Submission of Contact Us Form](./images_for_README/Contact_Us_Page_07b.PNG)

Failed submission of the form yields this screen:
![Failed  Submission of Contact Us Form](./images_for_README/Contact_Us_Page_07c.PNG)

If the user clicks on the "Log In" button at the bottom of the page, they are taken to a login screen. 

<strong>After login,</strong> the application opens to a landing page with information about upcoming stable events and appointments for existing clients.

![Owner Login Landing Page](./images_for_README/Owner_Login_Landing_Page_08a.PNG)

The pictures flip to reveal text about each event or appointment:
![Owner Login Landing Page](./images_for_README/Owner_Login_Landing_Page_08b.PNG)

<strong>If the user who logs in is the stable manager,</strong> the application then opens to a form for entering data about clients (horse owners).

![Owner Data Input Form](./images_for_README/Owner_Info_Input_Form_Page_09a.PNG)

The form includes data validation, alerting the user when a field is invalid or left blank:

![Owner Data Input Form Validation](./images_for_README/Owner_Info_Input_Form_Page_09b.PNG)

The application also has a form for entering data about horses. 

![Horse Data Input Form ](./images_for_README/Horse_Info_Input_Form_Page_10a.PNG)

This form also includes validation.

![Horse Data Input Form Validation](./images_for_README/Horse_Info_Input_Form_Page_10b.PNG)


These forms allow the stable manager to easily create, update, and delete records about the clients and horses in the database.

And finally, this 404 page will display if the page the user requested is not found.

![Horse Data Input Form Validation](./images_for_README/404_Page_11.PNG)

----------------------

<strong>To create the app from the files in our team's GitHub repository:</strong> 

First, clone the GitHub repository. You will need to have installed:

* Node
* And these dependencies: 
    * body-parser": 1.19.0
    * dotenv: 8.2.0
    * express: 4.17.1
    * express-handlebars: 3.1.0
    * mysql: 2.17.1
    * mysql2: 2.0.2,
    * nodemailer: 6.4.2
    * nodemon: 2.0.2
    * sequelize: 5.21.3

Before running the server.js file using node.js, run "npm install" to download the dependencies defined in the package.json. 

Then run "node server.js" at the command line to begin the server, and then navigate to localhost:3000 in your browser to see the HTML home page and proceed from there.

You will also need to set up and link to your own email address (we used gmail) and update an .env file with the username and password, if you wish to have the Contact Us form function.

### Why the Project is Useful ###
There is a need for this kind of app that serves both stable managers and clients, but that is user-friendly and not cumbersome for smaller operations. This app features public-facing pages that market the amenities of the stable; a password-protected stable-manager view that allows for management of a database that contains information about clients (horse owners) and their horses; and a password-protected client view that allows existing boarders to access the stable's calendar of events

The app also fulfilled a project assignment for University of Kansas Coding Boot Camp, August 2019 to February 2020. It provided us with the opportunity to work with the following technologies:

* HTML5
* CSS
* JavaScript
* jQuery
* Node and Express web servers
* Express Handlebars
* Foundation 6 frontend framework
* Heroku for deployment
* Sequelize
* MySql and MySql2
* MySql Workbench
* jawsDB relational database in the cloud
* Auth0
* nodemailer
* nodemon
* dotenv
* Favicon & App Icon Generator
* Git version-control system
* Slack messaging platform

Dev Dependencies also included:
* eslint
* chai
* mocha
* sequelize-cli

### Who Maintains and Contributes to the Project ###

  The team members of Financially Stable (Tiur Mawaddah, Kevin Le, Mark Overman, Gabrielle Umbach, and Jennifer Gaumnitz) created the project.

### Where Users Can Get Help with This Project ###

  Questions? Contact Jennifer Gaumnitz at jlgaumnitz@gmail.com
