# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JavaScript library, created by facebook, used to render front-end website UI, It solves seperation of concerns by allowing
programming which normally occured across differant programming documents and with differant programming languages in a singular JS file. 
It promotes modularity in the structure of a Web Application. These both solve issues of working efficiency when it comes to Web Development. Coupled with CSS in JS libraries (e.g. reactstrap, styled-components) one can construct entire websites using majorly JS documents. 

1. What does it mean to think in react?

To think in React is to think in terms of JSX, in components, and in terms of component statefullness. HTML Markup and JavaScript are done concurrently in a JS file. Components are constructed using JSX to represent differant modular parts of a Web Application. Component State refers to parts of a Web Site data whose values are variable and subject to change. 

1. Describe state.

State is the current value of a variable piece of data which can be changed.

1. Describe props.

Props is shorthand for properties and represent data which can be given to and passed from React components.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side are effects that occur during differant parts of the render lifecycle and/or when the state of specific data changes, this 
latter example can be made to occur using Reacts useEffect method passing an array containing stateful variable(s) (multiple or singular)
as the second parameter.
