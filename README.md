# CS-465
CS-465 Full Stack Development with MEAN

-Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
The static HTML page was not created with an ability to be responsive, only to display static data linked in from Handlebars partials files. It was intended to serve as a quickly-built prototype of what was to come, because it wasn't complex in structure, only having JavaScript controllers, views, and routes to contain simple application logic. All data was placed on the server, which would be sent to the client browser for every page load. The Angular single-page application introduced much more complexity, as page content updated according to changes in database content without full-page reloads, and vice-versa. Several Angular front-end components contained the logic to run this functionality. 

-Why did the  backend use a NoSQL MongoDB database?
The fact that Express and Angular both use variations of JavaScript meant that the compatibility with MongoDB's JSON document notation was not an issue. Also, MongoDB is a flexible tool which has indexing capabilities for when the number of travelers or trips becomes numerous enough to benefit from indexing. 

-How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
-Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
-Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
-How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
