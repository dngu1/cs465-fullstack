# cs465-fullstack
CS 465 Full Stack Development with MEAN
##

## PROJECT REFLECTION:

### Architecture: 

#### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
In this project, I utilized multiple frontend approaches to create both customer-facing and administrative experiences. The customer-facing site began as a traditional Express HTML and JavaScript application, rendering static content and dynamically displaying JSON data through Handlebars templates. This approach allowed for a straightforward rendering of trip information and customer itineraries while maintaining a server-driven flow.
For the administrative side, I implemented a Single Page Application (SPA) using Angular. This SPA provides a richer, more interactive user experience with real-time updates, data binding, and modular components. Unlike the Express setup, the SPA communicates asynchronously with the backend via RESTful API calls, reducing full page reloads and improving responsiveness.

#### Why did the backend use a NoSQL MongoDB database?
The backend uses a NoSQL MongoDB database because it efficiently handles flexible, unstructured data typical of travel packages, customer profiles, and bookings. MongoDB’s schema-less design allows for rapid iteration and easy expansion of data models without needing complex migrations, making it ideal for a full stack web application with evolving requirements.
##

### Functionality:

#### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JSON serves as the bridge between frontend and backend development. While JavaScript runs logic and manipulates the DOM on the frontend, JSON acts as a lightweight, structured data format exchanged via API endpoints. For example, when a user searches for trips, the frontend sends a JSON request to the server, which retrieves matching documents from MongoDB and returns the results as JSON to be rendered in the UI.

#### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
During development, I frequently refactored code to improve both functionality and efficiency. For instance, I created reusable Angular components for trip cards and user authentication forms. This modularity reduced duplicate code, simplified updates, and enhanced maintainability. On the backend, refactoring API routes to use a centralized controller pattern improved readability and reduced redundancy in data handling.
##

### Testing: 

#### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
Testing a full stack application requires multiple strategies. I conducted API testing using tools like Postman to ensure endpoints correctly GET, POST, PUT, and DELETE data in MongoDB. Testing also accounted for security layers, particularly JWT-based authentication for admin login, to ensure that only authorized users could access protected routes.
I learned that testing endpoints involves checking response formats, status codes, and error handling, while ensuring frontend calls correctly handle asynchronous data. Adding security introduced challenges, such as testing token expiration and session management, but ultimately improved the application’s robustness.
##

### Reflection:

#### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course significantly enhanced my full stack development skills and prepared me for real-world software projects. I gained hands-on experience with the MEAN stack, learned to design SPAs, integrated RESTful APIs, and applied security best practices for authentication and authorization.
Additionally, I honed skills in project planning, debugging, and code refactoring, all essential for professional development. Completing this project strengthened my confidence in creating scalable, maintainable applications and made me more marketable as a developer capable of delivering end-to-end solutions for clients.
