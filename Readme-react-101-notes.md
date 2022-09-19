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
