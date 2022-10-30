Single page application
React is a Js library , for building user interfaces.
React is created and maintained by Facebook
it has a component based architecture , It helos to breakdown our application into small encapsulated parts which is then further agrregated to create complex UI
The main positive of using component is to write reusable code i.e a code can be used many times. We do not need to write the same code again and again for the same functionality . Just as we do in functions.
React is decalrative --> i.e tell React what is the requirement and React with the help of React DOM livrary will create the required UI for you . (Artist example : draw a landscape)
React can be integrated with any application. Just like Jquery.

## Prerequisites :

1. Node JS -- > node -v
2. Visit this website -- https://github.com/facebook/create-react-app and check out how to create a react project
3. The first page that we should concentrate upon is App.js . This the first react function with JSX template that is excuted. This is the place we start writing our JSX code .
4. The App.js function is rendered inside the index.js . Never make any changes in index.js until absolutely necessary

## Folder Structure :

1. Package.json --> this will have all the dependencies related to the react application. (this is a configuration file which will have notes of all the dependecies)
2. Node modules will have all the physical dependencies installed
3. Public --> This is the folder which has the index.html file . This is the only html file that is present in the whole application . (Show Angular)
4. There is only one div tag in the index.html . The id of the div tag is 'root'. This id is being reference in the index.js and the whole react application is rendered into this div tag .

## Parts of react

## Components

1.  In react components can be considered as a part of the user interface
2.  There are 2 types of react components functional components and class components
3.  A functional component is a just a JavaScript function which returns as JSX code
4.  A Class component is JS class which can use the concepts of OOJS (Object oriented JavaScript)
5.  Inside a component there can be only one root elemeent .The root element can not have siblings.
6.  Inside a functional component if we have a one single function that is exported then, and if that function is exported using default keyword then we would not need a double curly brace to import the function

## Component lifecycle

When we build components , the components goes through several stages in its lifecycle.
Life cycle methods do not exsist in a functional component.
Life cycle methods can be divided into 4 phases

1. Mounting --> This method is called when the instance of the component is created and inserted into the DOM
2. Updating --> When the component is re-rendered as a result of the changes in the state or props
3. Unmounting --> When the component is removed from the DOM
4. Error handling --> When there is a problem / error in the rendering of the component

## Mounting

1. constructor() --> will be called whenever a component is created , it is the best place to initialize STATE and bind event handlers to class instance ,we should not make http call in constructor.
2. static getDerivedStateFromProps() --> a rarely used method , it basically monitors the change in the props over time. As this is a static method we will not have access to the THIS key word inside this method.
3. render()
4. ccomponentDidMount() --> Gets called immediately after a component and all its children component have been rendered. Do all the ajax class to load data here.

## Updating

1. constructor
2. static getDerivedStateFromProps(props,state) -- > called every time the component is re-rendered
3. shouldComponentUpdate(nextProps, nextState) --> this method receives the updated props and state and dictates if the component should re-render at all or not. We can compare the current values of props and state and previous values of props and state and the return true or false --> this would tell react if to re-render the component or not . This basically helps in performance optimization.
4. render() --> renders
5. getSnapshotBeforeUpdate(prevProps, prevState) --> Rarely used method (depends upon shadow Dom)
6. componentDidUpdate(prevProps, prevState , snapshot) --> this will be called only once in the re-render cycle after the re-render has been completed of the component and all its child components.

## Unmounting

1. componentWillUnmount() method allows us to execute the React code when the component gets destroyed or unmounted from the DOM (Document Object Model). This method is called during the Unmounting phase of the React Life-cycle i.e before the component gets unmounted

## Error handling

1. static getDerivedStateFromError()
2. componentDidCatch()

## stateful and stateless components

Any component whether it be a class component or a functional componeent . If it is managing a state it is called a stateful component
Any component that is not managing state is called stateLess component

## Refs

1. Refs makes it possible to access DOM nodes directly into react
2. Refs can only be used in Class components and not in functional components
3. We can forward refs into the functional component

## Prop types

Prop types is a library in react that helps react to define the types of the props
This basically helps in data modelling and helps to keep the props type safe

# useEffect

This hook is used when we want our component to do something after render
i.e This function will be called whenever the Render function in App.js is called

React remembers the function that we have passed and then calls the function after DOM updates
Always remeber hooks always work with functional components

# UseRef

UseRef never re-renders the Component. It does not notify us when its content changes
UseRef returns a mutuable reference object. It has one property called current
