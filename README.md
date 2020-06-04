## :zap: Pokemon React

An application used to search pokemons data from [Poke Api](https://pokeapi.co/), built with React, Hooks, JavaScript, SCSS and Jest/Enzyme.

#####Preview: https://pokemon-react-phillip.herokuapp.com/

## :cloud: Project Screen Shot(s)

#### Home page:
![Home](https://i.ibb.co/th9VwhS/1.png)
&nbsp;
#### Pokemon page:
![Pokemon Preview](https://i.ibb.co/NShmWQ9/2.png)

## :package: Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` or `yarn` installed globally on your machine.  

Installation:

`npm install` or `yarn install`  

To Run Test Suite:  

`npm test` or `yarn test`  

To Start Development Server:

`npm dev` or `yarn dev`  

To Visit App:

`localhost:1234`

Observations:
`build` and `start` are scripts just used to build and run app on Heroku server.

There is a server.js file at the root of the project to run an express server in the hosting.

Configurations from Parcel, Babel, Jest and eslint are stored in package.json. All in the same file makes it simple.  

## :rocket: Deploying on Heroku
This app is built and hosted on [Heroku](https://www.heroku.com/) and the bundler/build process uses [Parcel](https://parceljs.org/).
To configure and deploy on heroku, see the [official documentation](https://devcenter.heroku.com/).