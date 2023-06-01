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
1. 5 HTML pages
  - Login, checking water status, previous tests, recommendations, and forums
2. Links
  - Links to different pages, starting with login
3. Text
  - Input options and instructions for text
4. Images
  - Images shown for the general idea of what a test looks like
5. Login
  - Simple username and password box
6. Database
  - Previous tests are shown
7. Websocket
  - Reviews of the products we recommend by other customers

## CSS Deliverable
* Made changes to the application to better reflect the color of pool/concrete, as well as more navigationally sensible

1. Header, footer, and main content body
2. Navigation Elements
  - Spaced out the Navigation elements a bit to make them more readable
3. Responsive to window resizing
4. Application Elements
  - Used readable color contrasts, as well as a minimalist approach to information given/asked for
5. Application Text Content
  - Consistent readable colors, and consistent font throughout
6. Application Images
  - Example test is shown on Water Status page, to help locate the information needed

## JS Deliverable
* For this deliverable I made my application functional to calculate pool chemical levels, give recommendations, and mock-track ratings given by other users

1. login
  - you log in, name is stored locally, and you are redirected to the calculations page
2. Database 
  - Calculations and recommendations are made based off of your inputted information
3. Websocket
  - setInterval function implimented to replicate real-time ratings of products we recommend, given by other users
4. Application logic 
  - based off the measurements given, you are told if your chemicals are in balance, or what they stand in need of

## Service Deliverable
* for this deliverable I created an HTTP service to host my frontend and provid ebackend endpoints

1. Node.js/Express HTTP service
  - completed
2. Statis Middleware for frontend
  - completed
3. Calls to third party endpoints
  - completed
4. Backend Service Endpoints
  - Placeholders for both user login and ratings on products
5. Frontend calls service endpoints
  - Completed with fetch function 

