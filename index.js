
import React from 'react';
import ReactDOM from 'react-dom';

// const header = React.createElement("div", { id: "someId", abc:"hgfh"}, React.createElement("div", {id:"some-otehr-id"},  "text"));

// JSX -> Bael -> React.create -> JS
const heading = <h1>Hi I am h1 </h1>



const HeadingComp = () => {
    return (<div>
        {SomeOtherComp()}
        Hi I am h1 I am a component </div>)
}

const SomeOtherComp = () => (<div>some Other com</div>) 


console.log(heading);
// console.log(header);
const renderElemnt = document.getElementById('root');
const root = ReactDOM.createRoot(renderElemnt);

root.render(<HeadingComp />);

// const element = document.createElement('div');
// element.innerHTML = 'Hi,I am div';
// const renderElemnt = document.getElementById('root');

// renderElemnt.appendChild(element);