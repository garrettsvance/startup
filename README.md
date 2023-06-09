# startup
BYU CS260 Startup Project

## Elevator Pitch

Managing and maintaining a healthy pool can be exhausting, especially when trying to remember all the different measurements and chemicals that need to be added in order to create a safe and clean environment. Wouldn't it be nice to have all of those calculations done for you? All you would need to do is input your information, and you're immediately told what they all mean, as well as given instructions to fix and adjust the things that need it! Each user would create an account that stores the information regarding their pool. By entering in the PH level readings, chlorine levels, and alkalinity, they'll be provided with helpful links and measurements for adjusting their pool water to be optimal.


## Design

Log in/authentication mock-up

![Screenshot of the sign-in page](https://github.com/garrettsvance/startup/assets/88953533/33ccd6b8-c72b-4c84-8e36-55fdbdc94724)

Data Entry mock-up as well as links to previous entries/group forums

![3vpMMuh](https://github.com/garrettsvance/startup/assets/88953533/687bb48f-8a40-4fa7-b935-a60d7e60fa7a)




## Key Features
* Secure Sign on through https
* Ability to access previous entries
* Calculations given based off of data entry
* Access to forums from community
* Links for recommendations of products

## Technologies

### HTML
* Uses correct HTML structure for the application. Four(?) HTML pages, log in, data entry, recommendations page, and forums

### CSS
* Style and Sizing that will translate well between differing screen sizes, and has good design language as far as whitespace, color, and layout


### JavaScript
* Will run pages like the login, data entry, recommendations, and forums


### Service
* Endpoints for log-in, retreiving previous entries, submitting data, and finding links


### DB
* Store login and data entries


### Login
* Register and login users. Credentials are securely stored in DB, cannot get recommendations or access forms without user authentication


### WebSocket
* Forums that are updated as posts/replies are sent, visible to all authenticated users


### React
* Application ported to use the React web framework

## HTML deliverable
For this deliverable, the application structure was created.
- 5 HTML pages
  - Login, checking water status, previous tests, recommendations, and forums
- Links
  - Links to different pages, starting with login
- Text
  - Input options and instructions for text
- Images
  - Images shown for the general idea of what a test looks like
- Login
  - Simple username and password box
- Database
  - Previous tests are shown
- Websocket
  - Reviews of the products we recommend by other customers

## CSS Deliverable
Made changes to the application to better reflect the color of pool/concrete, as well as more navigationally sensible

- Header, footer, and main content body
- Navigation Elements
  - Spaced out the Navigation elements a bit to make them more readable
- Responsive to window resizing
- Application Elements
  - Used readable color contrasts, as well as a minimalist approach to information given/asked for
- Application Text Content
  - Consistent readable colors, and consistent font throughout
- Application Images
  - Example test is shown on Water Status page, to help locate the information needed

## JS Deliverable
For this deliverable I made my application functional to calculate pool chemical levels, give recommendations, and mock-track ratings given by other users

- login
  - you log in, name is stored locally, and you are redirected to the calculations page
- Database 
  - Calculations and recommendations are made based off of your inputted information
- Websocket
  - setInterval function implimented to replicate real-time ratings of products we recommend, given by other users
- Application logic 
  - based off the measurements given, you are told if your chemicals are in balance, or what they stand in need of

## Service Deliverable
For this deliverable I created an HTTP service to host my frontend and provid ebackend endpoints

- Node.js/Express HTTP service
  - Completed
- Statis Middleware for frontend
  - Completed
- Calls to third party endpoints
  - Completed
- Backend Service Endpoints
  - Placeholders for both user login and ratings on products
- Frontend calls service endpoints
  - Completed with fetch function 

## DB Deliverable
For this deliverable I stored and retrieved data from MongoDB.

- MongoDB Atlas database created
  - completed
- Endpoints for data 
  - Submit ratings button sends information to MongoDB
- Stores Data in MongoDB
  - completed

## Login Deliverable
For this deliverable I added user registration and authentication

- User Registration
  - Creates a new account in the database
- Existing User
  - Verififes the user's name and password from the data stored
- Use MongoDB to store credentials
  - Compeleted
- Restricts Functionality
  - You cannot access/save information without an account, defaults to guest account without

## WebSocket Deliverable
For this deliverable I enabled realtime reporting of product ratings from other users.

- Backend Listens for websocket connection
  - Completed
- Frontend makes websocket connection
  - Completed
- Data sent over Websocket connection
  - Completed
- Websocket data displayed
  - Completed (mostly. displays twice for some reason, but still displays)
