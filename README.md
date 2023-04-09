# Bug World Simulator

## Sprint 1
#### Backend part improvements
- Implemented all primary classes, such as World, Bug, WorldCell, BugBrain, as well as smaller classes such as Color, Position, Marker and others using JavaScript programming language. Each class has been developed with all necessary fields and primary functions in accordance with Specifications Standard.
- To ensure clarity where required, documentation has been added in the form of comments that explain the logic of code.
- Also main classes now have method toString() providing their inner state in user-friendly format for debugging purposes.
- Added test folder that contains test checking the correct creation of the Bug class and its output in the user-friendly format.\
To run the test you need to run ```node src/test/ToStringTest.js``` from project root folder.
#### Frontend (GUI) part improvements
- The skeleton of the BugWorld game has been created along with all the web pages.
- Each page has all the required elements besides the "Log" page.
- All of the buttons in each page work and the user can easily navigate through the pages using them.
- Since the Java Script and the GUI (html and css) have been done separately(each group member did one each one), therefore they might not look like they are linked together.
- For the time being, an image of the Bug World has been added instead of the actual working Bug World.
- The webpage has been hosted in Clamv. Here is the [link](http://clabsql.clamv.jacobs-university.de/~bishrestha/).

---

## Sprint 2 Progress - Kaisar Alibekov and Faraz Ahmad

### What is done so far and improved:

✅ Changed the structure of game logic written in JavaScript to TypeScript (notes below)
✅ Configured TypeScript classes and interfaces to create game logic and improved the old code because their JS files were not linked with the HTML pages (previous sprint members created separated pages but did not think about transferring the input files between the pages). Basically, their code was not well linked with each other. We were just given a simple frontend.
✅ All coding in this repo is done using **SOLID** principles, so please have a look at our TypeScript
files. The file hierarchy is simplified and allows you to easily add new pages and functions, thanks to generalized
classes and interfaces. Our code is purely object-oriented.
✅ Linter is added to detect errors while debugging (before committing github)
✅ Added Tailwind CSS as UIKit to employ css classes
✅ Set up webpack for optimizing bundle (JavaScript, HTML, CSS)
✅ Small improvements of UI

### Deployment

- To start a development server and open the game initial page, run these two commands:\
   ```npm install --global yarn```\
   ```yarn install ```\
   ```yarn dev```

- The main page: http://localhost:3000

- To ease the grading process for TAs, please open this link (not ClamV):\ ...
   
- How to deploy? (Guide for future Sprinters): You can use the Vercel app. It is  easy to deploy using Vercel to host your website. First, please go to this link: https://vercel.com/docs/concepts/get-started/deploy
Navigate to "Import an existing project", and then follow the quick guidelines. You will link your github account with Vercel, and while deployment, it will automatically detect the framework and do the work for you. NOTE: Please select your own github repository to deploy because if you select the repository from our Software Engineering organization, the request will be sent to organization admins. You do not want to waste your time contacting TAs - so clone the sprint repo into your account, and then deploy your profile's repository. Next, just copy the link from Vercel!

**TypeScript's usage justification:** Essentially, TypeScript is augmented version of JavaScript with more functions,
and they are similar. According to the reference design, there are several strict interfaces and classes. TypeScript is more object-oriented so it helps us implement the interfaces described in specification. As we know, JavaScript does not support interfaces. We suppose in this case it is beneficial to use TypeScript because it is suitable and comfortable to implement the logic itself. While executing, the code in web browser will be shown in JavaScript. Arkid is aware of that we used TypeScript.

### File Structure (only important files are displayed)

```
\pair51_sprint1
        \public                   # Different public files such as input files
            \- ..
        \src
            \app                  # CSS, React, TypeScript files
                page.tsx          # File indicating different game pages from specification in blocks
            \components           # Used page components in project
                \ - ...
            \logic
                \ - ...
                \interfaces       # Main game logic codes written in interfaces to implement later
                    \ - ...    
        package.json              # File enabling npm to start project, install dependencies
        \ - other config files
        README.md
        .gitignore  
```