[![Build Status](https://travis-ci.org/AlbertoALopez/yes-taco.svg?branch=master)](https://travis-ci.org/AlbertoALopez/yes-taco)
[![Maintainability](https://api.codeclimate.com/v1/badges/86a347fe02ffb2874563/maintainability)](https://codeclimate.com/github/AlbertoALopez/yes-taco/maintainability)

## Yes Taco

A web application to detect if a provided image is a taco or not a taco. Built on React, Redux and React Router 4. Uses Firebase
storage to store an uploaded image, and Google Cloud Vision API to parse it and return a set of labels describing the image.

### Project structure
```
/__mocks__
/config
/dist
/server
/src
  /js      
   /components 
      /Button
        /index.js
        /index.test.js
    /scenes
      /Home 
        /components 
        /index.js
        /index.test.js
        /styles.scss
    /services
      /api
        /actions.js
        /index.test.js
        /reducer.js
    index.js 
    store.js
  /style
    /fonts
    index.scss
 ```
Project is organized into components, scenes and services. Global components are in /src/components and are reusable pieces.
Scenes are akin to pages, and map well to full routes. They have subcomponents and can access the global scope. Services
implement the client api and it's related redux actions and reducers.

Everything is served up on a little express server, and we have persistence courtesy of Firebase Storage. 

### Instructions
Git clone and npm install. To run an example you'll need firebase and google cloud API keys, found in /config, or a .env file with the following keys:
```
FB_API_KEY
FB_AUTH_DOMAIN
FB_DATABASE_URL
FB_PROJECT_ID
FB_STORAGEBUCKET
```
`npm run test` to run tests with jest 
`npm run start` bundles your javascript and css files with webpack and serves them on a dev server.
`npm run build` builds production bundles and puts them into /dist folder.
