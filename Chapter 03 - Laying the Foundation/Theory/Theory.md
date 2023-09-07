## How does React.createElement Work?


## Q) What is JSX?

Java Script XML notation
Fundamentally, JSX just provides syntactic sugar for the React.createElement(component, props, ...children) function. The JSX code:
    <MyButton color="blue" shadowSize={2}>
        Click Me
    </MyButton>
compiles into:
    React.createElement(
        MyButton,
        {color: 'blue', shadowSize: 2},
        'Click Me'
    )

## Q) What is render?

Updating something in dom is known as render

## Q) What is super powers of JSX:

Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

Example
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}

## Q. What converts New Code to Older Code(For older version Browsers)?

Babel , We do not need to write polyfill. Babel does it automatically.

## Q: Role of type attribute in script tag? What options can I use there?




## Q: Difference between HTML AND JSX?
in jsx we write everything in Camel Casing
in jsx you have to return a single parent using <>.... </> but not in html 

## Q: how does JSX 
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:

Transform syntax
Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
Source code transformations (codemods)
And more! (check out these videos for inspiration)

## Q: Abstract Syntax Tree:

## Q: {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
{TitleComponent}: This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.
<TitleComponent/> : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {<  />} expression.
<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.

Example:
    <TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
    </TitleComponent>

## Q: Diff b/n React Element & React Component:
React Element is returns an Object. 
React Component is a function that returns JSX, or a react element, or a function.

## Q: XSS Attack?
JavaScript will take care of that