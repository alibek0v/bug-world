## Sprint 1
#### Backend part improvements
- Implemented all primary classes, such as World, Bug, WorldCell, BugBrain, as well as smaller classes such as Color, Position, Marker and others using JavaScript programming language. Each class has been developed with all necessary fields and primary functions in accordance with Specifications Standard.\
See code [here](https://github.com/CU-Software-Engineering-2023/pair2_sprint1/tree/dev/src/models) .
- To ensure clarity where required, documentation has been added in the form of comments that explain the logic of code.
- Also main classes now have method toString() providing their inner state in user-friendly format for debugging purposes.
- Added test folder that contains test checking the correct creation of the Bug class and its output in the user-friendly format.\
See code [here](https://github.com/CU-Software-Engineering-2023/pair2_sprint1/blob/dev/src/test/ToStringTest.js). 
To run the test you need to run ```node src/test/ToStringTest.js``` from project root folder.
#### Frontend (GUI) part improvements
- The skeleton of the BugWorld game has been created along with all the web pages.
- Each page has all the required elements besides the "Log" page.
- All of the buttons in each page work and the user can easily navigate through the pages using them.
- Since the Java Script and the GUI (html and css) have been done separately(each group member did one each one), therefore they might not look like they are linked together.
- For the time being, an image of the Bug World has been added instead of the actual working Bug World.
- The webpage has been hosted in Clamv. Here is the [link](http://clabsql.clamv.jacobs-university.de/~bishrestha/).
