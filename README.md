# Product-Portal

## Project Details

### How do we complete this project?

#### Ver 0.1 :
  - **General concept:** Create a static website using JSON fetch method (30 items - will be made by xx and yy) (each json item: title,price,link,catgeory…)
    - Random 16 items on the home page - back / next page at the bottom (Each page will display random 16 items each time with)
    - navbar will include 6~ categories (products will appear in the corresponding category)
    - Search bar input above / beside the navbar (see mockup)
    - Each li product will display item title > picture > price > button (one below the other in this order)
    - Click on a product will show a popup baloon with the products details in a bigger version on the screen (mockup coming soon)

#### Ver 0.2 (will be updated shortly)
  - **General concept:** Change the json objects into a dynamic api (amazon). 
    - Change the links into the amazon affiliate ones 

#### Ver 1.0 (will be updated soon)
  - **General concept:**
    - Ability to create users/login
    - Add to basket option
    - payment checkout


#### Mockup:
![Mockup](http://i.imgur.com/f2dKWIv.png "Product Portal Mockup")


# Installation

This project will mostly be done in plain JavaScript. However, we'll need some help along the way. Writing tests is already hard enough, let's not try to write them without frameworks. For writing unit tests, we'll use Karma and Jasmine.

This can easily be done by first installing the latest version of [NodeJS](https://nodejs.org). Once you have installed it, you can verify it is correctly installed by running

```
node -v
```

You should now see the version of your current Node installation.

Now you can install the necessary dependencies for the project with

```
npm install
```

This command will install all the dependencies listed in package.json.

To run local server, run

```
node server.js
```
or
```
npm start
```

The default server is `http://localhost:3000`.


You are now ready to go!

## Run tests

JavaScript tests are written with the [Jasmine](http://jasmine.github.io/2.4/introduction.html) syntax. This syntax provides tests that are easy to and maintain.

Running karma tests can be done with

```
npm test
```

This activates a script that is set in the package.json file to run Karma and load your JavaScript test files.


