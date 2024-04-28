# WebApp
 This project is made for course:
 "Designing web applications"

 This app was developed as an academic project for study purposes. Therefore, its construction and features are more theoretical than practical. It lacks some of the functionalities required for a real-life project and mainly includes those highlighted in the assignment.

 The main idea of this website is to provide a platform where individuals and institutions can create postings and others can make offers on them. The website comprises several sections:

- Main Page: The landing page of the website.
- Postings List: Displays all active postings and allows users to view details of each posting. Users can also make offers on the details page of a posting.
- Finished Postings List: Contains all finalized postings. Upon selecting a posting and viewing its details, a list of individuals or entities who made offers on that posting is displayed, provided their offer was lower than the maximum price set by the poster.
- Add Posting: Allows users to create a new posting.

As mentioned, the program is more theoretical than practical; therefore, it does not implement any kind of advanced front-end or CRUD functionalities.

The program uses an Express/Node architecture, with structural elements separated into directories like views, controllers, routers, etc. It also utilizes a SQLite database and ORM model to manage data, with corresponding models in a directory for posting, offerings, and Sequelize.

The program utilizes EJS for server-side rendering and imposes restrictions there on what the user can input in order to maintain consistency with the database.