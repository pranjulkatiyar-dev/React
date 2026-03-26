import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const element = <span>React element</span>

const Title = (
<h1 className="head" tabIndex="1">
    {element}
    Namaste React using JSX.
    </h1>
    );
 
// React Component

const HeadingComponent = () => (       //Arrow function
    <div id="conatainer">
        {Title}
  <h1 className="heading"> Namaste React functional component with arrow finction using JSX.</h1>
  </div>
);

const Heading = function(){      //Normal funtion
 return (
    <div id="conatainer">
  <h1 className="heading"> Namaste React functional component with normal finction using JSX.</h1>
  </div>
);
};

 const root =ReactDOM.createRoot(document.getElementById("root"));
 root.render(<HeadingComponent/>);

