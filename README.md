## :copyright: eyepex-backend
> _Demonstration of CRUD behavior by using Restful APIs._

## :book: Table of Contents
   <!-- START doctoc generated TOC please keep comment here to allow auto update -->
   <!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Prerequisites](#sparkles-prerequisites)
- [Getting started](#sparkles-getting-started)
- [Available Routes](#sparkles-available-routes)
- [How to use](#sparkles-how-to-use)
- [Technologies](#sparkles-technologies)
- [License](#sparkles-license)

   <!-- END doctoc generated TOC please keep comment here to allow auto update -->

## :sparkles: Prerequisites

Proceed with next steps if your platform meet the following prerequisite.

- Install [Node.js](https://nodejs.org/en/) and Mongo DB [MongoDB](https://www.mongodb.com/) on your device.

## :sparkles: Getting Started
Run the following command under `eyepex-backend` directory to install dependencies.
 ```
 npm install && npm run watch
 ```

Import sample image dataset to the mongo database using the `Assets/images-data.json` file.
 ```
DATABASE NAME: EYEPEX
COLLECTION NAME: images-data
 ```

## :sparkles: Available Routes
The following routes are available in the application.
 ```
 POST /v1/api/carousel/add
 BODY: { "image": "some_image_url", "title": "some_image_title", "subTitle": "some_image_title" }
 
 GET /v1/api/carousel
 QUERY PARAMETERS: limit=<NUMBER>
 ```

## :sparkles: How to Use

Here is the list of tasks available out of the box and run these via `npm run <task>`.
 ```
   start             Run the build task and mount index file in dist directory
   clean             Cleans dist directory
   lint              Run Code quality operations 
   build             Perform npm and build
   watch             Watches file changes in Development mode
 ```

## :sparkles: Technologies

Usage          	            | Technology
 --------------------------	| --------------------------
Language              | JavaScript
Framework     	      | Express
Database              | MongoDB
Transpiler            | Babel
Logger                | Winston
Code Quality Tools    | ESLint
Dependency Registries | NPM

## :sparkles: License

EyePex Backend is MIT licensed. Please refer LICENSE for more information.
