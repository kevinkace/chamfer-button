import React from "react";
import ReactDOM from "react-dom";

import { useMachine } from "@xstate/react";
import { Machine, interpret, assign } from "xstate";

import Button from "./Button";

function increment(context) {
    return context.count + 1;
}
function decrement(context) {
    return context.count - 1;
}

const hoverCountMachine = Machine({
    initial : "active",
    context : {
        count : 2
    },
    states : {
        active : {
            on : {
                INC : {
                    actions : assign({ count : increment })
                },
                DEC : {
                    actions : assign({ count : decrement })
                }
            }
        }
    }
});


import "./index.css"; // needed for bundle

function App() {
    const [ current ] = useMachine(hoverCountMachine);
    const { send, ...rest } = interpret(hoverCountMachine)
        .onTransition(state => console.log(state.context.count))
        .start();

    console.log(current);

    return (
        <div>
            <div>
                <button onClick={() => send("DEC")}>-</button> dash count <button onClick={() => send("INC")}>+</button>
            </div>
            <Button chamfer={[ 12, 0 ]} hoverCount={3} hoverSpeed={800} borderWidth={2}>
                Hover on This { current.context.count }
            </Button>
            <p>- or focus -</p>
        </div>
    );
}

ReactDOM.render(<App />, mount);
