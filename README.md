# CS-465
CS-465 Full Stack Development with MEAN

-Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
The static HTML page was not created with an ability to be responsive, only to display static data linked in from Handlebars partials files. It was intended to serve as a quickly-built prototype of what was to come, because it wasn't complex in structure, only having JavaScript controllers, views, and routes to contain simple application logic. All data was placed on the server, which would be sent to the client browser for every page load. The Angular single-page application introduced much more complexity, as page content updated according to changes in database content without full-page reloads, and vice-versa. Several Angular front-end components contained the logic to run this functionality. 

-Why did the  backend use a NoSQL MongoDB database?
The fact that Express and Angular both use variations of JavaScript meant that the compatibility with MongoDB's JSON document notation was not an issue. Also, MongoDB is a flexible tool which has indexing capabilities for when the number of travelers or trips becomes numerous enough to benefit from indexing. JSON is also more compact than XML, so that more data can be transported via HTTP using less bandwidth.

-How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JSON can't possess functions, because it is meant to be language independent. However, its ability to contain multiple types of data such as arrays, booleans, null values, strings, numbers and objects (Holmes, Harber, 2019) allows it to serve as an effective way to exchange data between the frontend and backend of the application. JSON is therefore used in database queries sent by the REST API whenever documents are added or updated.

-Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
Creating Handlebars partials files to contain editable data helped to segment travel data away from page view code. It also removed the need to make changes to static page data in more than one place, as all pages share headers, footers, and navigation code brought in from partials files. Handlebars #each loops within view code also placed travel data in view pages by iterating through each item in partials files. 

-Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
Methods for request and retrieval are contained within controller files, which provide the logic needed to build database queries which are sent according to corresponding endpoints defined in route files. A layer of security is added to controller methods which validates that the user is known by the system, using a JSON Web Token which ensures that the user making the requests is logged in with a username and password. The password is not stored in the database, but is reformatted with a hash and salt value to protect its actual value. The authentication result is awaited by a Promise which was created when the authorization check was initiated by the controller.

-How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
Obtaining the basic skills to develop both public facing and administrative portions of a full stack professional website is what I'll be needing in my future as so much business activity is conducted via online applications. Working to ensure the security of such applications is one of my top priorities, especially when compliance with regulations surrounding financial and personal data is required. I am also grateful to have been exposed to complex Angular development in a structured classroom setting, as I've benefitted from the guidance of the knowledgable people who assembled this course curriculum. 

Reference:
Holmes, S., Harber, C. (2019). Getting MEAN with Mongo, Express, Angular, and Node.js 2ED. Manning Publications.  
