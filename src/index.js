import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";

import css from "./index.css";

class Comp extends React.Component {
    render() {
        return (
            <div>
                <Button chamfer={[ 0, 12 ]} hoverCount={3} hoverSpeed={800} borderWidth={2}>
                    Hover on This
                </Button>
                <p>- or focus -</p>
            </div>
        );
    }
}

ReactDOM.render(<Comp />, mount);
