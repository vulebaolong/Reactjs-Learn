import React from "react";
import BackwardCounter from "./component/BackwardCounter/BackwardCounter";
import ForwardCounter from "./component/ForwardCounter/ForwardCounter";

function CustomHooks(props) {
    return (
        <div>
            <BackwardCounter />
            <ForwardCounter />
        </div>
    );
}

export default CustomHooks;
