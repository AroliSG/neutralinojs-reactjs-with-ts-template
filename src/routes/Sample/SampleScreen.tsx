import React from "react";
import './Sample.css';

const SampleScreen = (): JSX.Element => {
  return (
    <div className="sample_parent">
        <h4 className="sample">
          Sample navigation screen
        </h4>

        <button onClick = { () => alert ("Sample navigation")} >Click me</button>
    </div>
  );
}

export default SampleScreen;