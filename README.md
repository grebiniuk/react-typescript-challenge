# React Typescript challenge

## Project deploys

* [Heroku](https://react-typescript-challenge.herokuapp.com/)
* [AWSAmplify](https://master.d37cqv3ukqx167.amplifyapp.com/)
* [Azure](https://lemon-cliff-013638203.azurestaticapps.net/)

## Challenge requirements

1. Fetch all media from the endpoint
   (https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b)
2. Render each Medium into a card
   * Cover image
   * Title
   * Status / Last edited
3. The card can render the many possible states of a Medium and have slightly different renders:
   * “ready”: On hover state should show an edit button on top of the cover image, and show how many languages the
     Medium has;
   * “error”: Show an error message instead of the cover image;
   * “transcribing”: Show a loading bar on top of the cover image;
4. Add some filters on top, based on the Medium status and the languages (eg. show only media in english).

## Solution

1. Data Fetched with axios HTTP client as it is easy to use, and it works with async/await that increase readability.
2. After data is fetched each Medium is rendered in a card with reusable component Card.
3. Each status is handled separately with its own component as the logic is quite different.

### For this solution were used:

* [Bootstrap](https://www.npmjs.com/package/bootstrap) to use fast styling
* [MaterialUI Icons](https://www.npmjs.com/package/@material-ui/icons) to use icons
* [MaterialUI Styles](https://www.npmjs.com/package/@material-ui/styles) to use additional styling
* [Moment.js](https://www.npmjs.com/package/moment) to calculate and show human-readable date format

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


