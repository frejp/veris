## Important Notes for the task

test-link: 

https://frejp.github.io/veris/

I did the base-layout (header,footer,empty body),login with error handling and a small part of the certification body.
Everything is however pixel perfect and even works in safari 9 (!!)
Also I did not add any unit-tests. It works best on desktop/pad i.e only somewhat responsive.

Why not do everything? Well, I think the current solution showcases enough of my craftsmanship. 
And I've already spent a lot of time on it. But it was fun, so it's okey =)

Ok? How long did it take? 
-At least one full work day,probably more, its probably around 1500 lines of code.

But as you can see, its pixel perfect and the code is good, no test tough :( 

## Login and Password

To 'login' use this username and password

username: frejp@kth.se
password: 123456789

## Technologies and structure

These are the technologies used: 

React, Redux with Redux Toolkit (awesome, and the official opionated way to start a redux project), Typescript
Styled Components, React-Router. 
Using the new redux hooks (useSelector,useDispatch).
Also partly inspired by the 'ducks' way of structuring redux in folders and files.
https://github.com/erikras/ducks-modular-redux

The folder/file structure and the way components is imported follows my 
conventions defined in this project: 

https://github.com/frejp/code-conventions

Eslint and Prettier is also available.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
