# startup
BYU CS260 Startup Project

##Elevator Pitch

Managing and maintaining a healthy pool can be exhausting, especially when trying to remember all the different measurements and chemicals that need to be added in order to create a safe and clean environment. Wouldn't it be nice to have all of those calculations done for you? All you would need to do is input your information, and you're immediately told what they all mean, as well as given instructions to fix and adjust the things that need it! Each user would create an account that stores the information regarding their pool. By entering in the PH level readings, chlorine levels, and alkalinity, they'll be provided with helpful links and measurements for adjusting their pool water to be optimal.


##Design

Log in/authentication mock-up
![Screenshot of the sign-in page](https://github.com/garrettsvance/startup/assets/88953533/33ccd6b8-c72b-4c84-8e36-55fdbdc94724)

Data Entry mock-up as well as links to previous entries/group forums
![Screenshot of data entry page](https://github.com/garrettsvance/startup/assets/88953533/06121829-23b1-4e5a-85f5-86ea99c32257)



##Key Features
* Secure Sign on through https
* Ability to access previous entries
* Calculations given based off of data entry
* Access to forums from community
* Links for recommendations of products

##Technologies

###HTML
* Uses correct HTML structure for the application. Four(?) HTML pages, log in, data entry, recommendations page, and forums
###CSS
* Style and Sizing that will translate well between differing screen sizes, and has good design language as far as whitespace, color, and layout
###JavaScript
* Will run pages like the login, data entry, recommendations, and forums
###Service
* Endpoints for log-in, retreiving previous entries, submitting data, and finding links
###DB
* Store login and data entries
###Login
* Register and login users. Credentials are securely stored in DB, cannot get recommendations or access forms without user authentication
###WebSocket
* Forums that are updated as posts/replies are sent, visible to all authenticated users
###React
* Application ported to use the React web framework

