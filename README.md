# React ToDo List
Application allows users to see, add, _edit_, and remove todos.

## Components

__App:__ Renders the TodoList component

__TodoList:__ Renders the __NewTodoForm__ component and renders the list of Todo components. contains the state of all the todos in this component.

__NewTodoForm:__ Renders a form with one text input for the task to be created. When this form is submitted, a new Todo component is created.

__Todo:__ This component displays a __div__ with the task of the todo.  Each Todo component includes a button with the text “X” that when clicked, removes the todo.

## Testing

Every component includes a smoke and snapshot test.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
