# Gallery Images Upload

Try it out on [`Heroku`](https://image-gallery-demo.herokuapp.com/)!

[![Build Status](https://travis-ci.com/sombreroEnPuntas/image-gallery.svg?branch=master)](https://travis-ci.com/sombreroEnPuntas/image-gallery)
[![Maintainability](https://api.codeclimate.com/v1/badges/5947d437b074caa03a3b/maintainability)](https://codeclimate.com/github/sombreroEnPuntas/image-gallery/maintainability)
[![codecov](https://codecov.io/gh/sombreroEnPuntas/image-gallery/branch/master/graph/badge.svg)](https://codecov.io/gh/sombreroEnPuntas/image-gallery)

- [Challenge](#challenge)
  - [Client side](#client-side)
    - [Web Requirements](#web-requirements)
    - [App Requirements](#app-requirements)
  - [Server side](#server-side)
- [Solution](#solution)
  - [`yarn start-dev`](#yarn-start-dev)
  - [`yarn test`](#yarn-test)
  - [`yarn run build`](#yarn-run-build)
  - [Travis CI & Heroku app](#travis-ci--heroku-app)

## Challenge

Please provide a gallery with an image upload feature.
This exercise is mostly front end with a tiny bit of back end.
If you're stronger on the backend, you can try this one, but we'll definitely be looking strength on the front end.
Please also ensure both the client and server side is _well tested_ and _clean code_ and that the code works before you submit your code.

### Client side

The client side can be either web or app.
If it's web, please ensure it can be used on multiple devices.
Completely up to you what frameworks you use; on our own code we use angular 2 or react for web, and all the usual libs for android and iOS that allows MVVM, MVP, and easier testing.

##### Web Requirements

- Provide a gallery view of all previously uploaded images
- For image Upload:
  - mobile web, tablet - this will be a button which will prompt you to either access the camera and take a pic, or select from files on device
  - desktop web - will have 2 options: drag image to page to upload, or a button which allows selection of multiple files on device
- super nice to see the web-views handling rotation on devices

##### App Requirements

For the image upload please provide:

- a gallery view of all previously uploaded images
- a button which can either request to take a picture, or upload from camera roll
- the ability to rotate or crop images

### Server side

The server side can be in whatever language you are strong with.  
We mainly use js, java, and a little bit of php and go, so please try to use one of them that you're stronger with.

Don't worry too much about how this stuff should be stored and served properly on the server (such as s3 buckets, and CDNs etc).
It's fine to store and serve the images locally.

If you opt for a db approach, store in whatever storage you see fit.

## Solution

Bootstrapped with [create-react-app](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start-dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn run build`

Builds the app for production to the `build` folder.<br>

### Travis CI & Heroku app

Every push will trigger a **Travis CI** job, and on `master` branch it will trigger a **Heroku** app deploy.

- A job will run tests, and trigger a deploy when passing.
- Builds triggered from Pull Requests will never trigger a deploy.
