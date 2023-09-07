## Q) Is JSX mandatory for React?
No JSX not mandatory for react we can use React.createElement to create React Elements not only this JSX also used React.createElement behind the scenes in react.

## Q) Is ES6 mandatory for React?

Again no ES6 is not mandatory for react. ES6 is the standardization of javascript for making code more readable and more accessible. 
* Arrow Functions:
* Classes
* Template Strings
* Destructuring
* Modules
* Let and Const
* Promises and Async/Await

## Q) What is <React.Fragment></React.Fragment> and <></>?
Each jsx element (component) can have only one parent. This is because jsx element is converted to React.createElement(parent, props, ...children) before rendering in the DOM.

But the common pattern in React is for a component to return multiple elements. For grouping, we can enclose them within <div> </div>. But there can be situations were <div> </div> should not be used. In such cases, Fragments can be used to group a list of children without adding extra nodes to the DOM.

For Example : If <Columns /> components return multiple <td></td> elements to be rendered inside the table. It would be invalid to wrap it inside <div></div> since HTML would be invalid. <React.Fragment></React.Fragment> can be used in such cases.

The new, short syntax for declaring Fragment is empty tags <> </>. It can be used in the same way as any other element but it doesn't support keys or attributes.

What if React fires a key warning? There will be cases where we might use Fragments while mapping a list of elements . And React will fire a key warning since every element must have a unique key. In such cases, Keyed Fragments can be used. key is the only attribute that can be passed to <React.Fragment></React.Fragment>. This is not possible with <></>.

## Q) What is virtual DOM ?
Virtual DOM (VDOM) is a programming concept where a copy/virtual representaion of the UI is kept in memory and synced with the "real" DOM tree by a library called React-DOM. This process is called Reconciliation. In React, a virtual DOM is associated with React elements since they are the objects representing the UI. React, however, also uses internal objects called “fibers” to hold additional information about the component tree. They may also be considered a part of “virtual DOM” implementation in React.

## Q)  What is Reconciliation in react ?
Reconciliation is the process through which React updates the Browser DOM and makes React work faster. React use a diffing algorithm so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components. React stores a copy of Browser DOM which is called Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by Diffing Algorithm. React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

## Q)  What is React Fiber ?
React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React. Because Fiber is asynchronous, React can:

Pause, resume, and restart rendering work on components as new updates come in
Reuse previously completed work and even abort it if not needed
Split work into chunks and prioritize tasks based on importance

## Q) Why do we need key in React ? When do we need keys in React ?
A key is a special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed.

Keys must be used when siblings are of different elements types.

## Q) Can we use index as key in react ?
A key is the only thing React uses to identify DOM elements. It is not recommend to use indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.

But, nothing is better than anything. If we don't give a key, react by default assign id of that list item as it's key.

**NO key << INDEX as key <<<<<< Unique id as key from data**

## Q) What are props in React ? Ways to use props ?
Props (properties) passed in Component are similar to the arguments passed in a js function call and received by that function as parameters.

Every parent component can pass some information to its child components by giving them props. Props are similar to HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

Types of Props :

Familar Props - HTML attributes like className, src, width, height passed in HTML  tag

Passing Props to Component - props are the only argument to your component. React component functions accept a single argument, a props object.

## Q) What is Config driven UI ?
Config-driven UI is one of the UI design pattern in which the UI is rendered based on the configuration parameter sent by the server (backend). This is one of the popular pattern used in the industry now.



