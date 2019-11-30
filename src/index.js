import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";

import css from "./index.css";

class Comp extends React.Component {
    render() {
        return (
            <Button chamfer={[ 12, 2 ]}>click</Button>
        );
    }
}

ReactDOM.render(<Comp />, mount);
