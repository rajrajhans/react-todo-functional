A simple ToDo application built with React using only functional components and no class components. This exercise was intended to explore and learn more about Hooks in React.

[This project has been deployed and can be seen at this link.](https://heuristic-sammet-ab37a3.netlify.com/)

### Some notes about functional components in React

* Functional components are good for presentational components (components that are stateless are just UI elements)
* Functional components receive props as arguments and return JSX that is to be rendered. (We destructure the props in arguments using ES6 object destrucuturing for convenience)
* They are also easier to work with (considering you don't have to worry about `this`) and easier to understand.

Earlier, functional components were strictly stateless, but now, we can use React Hooks to implement the state functionality in functional components.

### Available Scripts

This project was bootstrapped with create-react-app. In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
