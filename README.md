# Ty's Coding Playground

This app is for me, Ty, to explore programming in a React environment. I'll be making a variety of things on here, just playing around with concepts and such. There will be readme files for exploration topics in their corresponding folders in the src/app directory.

## File Structure

-   src/pages
    -   Routes for pages
    -   Route should be pathed like src/pages/route/index.js
    -   Sub routes can be either:
        -   src/pages/route/subroute.js
        -   or src/pages/route/subroute/index.js
    -   Route files should import main components from src/app
-   src/app
    -   Components for application
    -   Organized by app, src/app/AppName
-   src/function
    -   Functions interactions with apis / databases
-   src/layout
    -   Overall layout of the app
-   src/state
    -   Control of fullsite state management
-   wrappers.js
    -   Connect fullsite context
    -   Connect fullsite layout
