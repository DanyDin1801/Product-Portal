# Product-Portal

## Installation

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

## Code Styling

For styling, we will use the JavaScript style guide that was provided by Airbnb.

Checking code style can be done with

```
npm run lint
```

## Project Details

### How do we complete this project?

#### JS:
* Create a demo products in json (later on with  an api) each with name,picture,price,etc. (div>ul> li for each item-product)
* Add a button to each list item (For affilation link / add to basket purposes)
* Create a list of products 4 in each row, 5 rows
* Add back - next button to toggle between pages

#### HTML:
* Create navbar for diff catgoeries

#### Example:
![Mockup](http://i.imgur.com/NdUM5qd.png "Product Portal Mockup")
