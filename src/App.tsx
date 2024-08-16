import React from "react";
import { Form } from "./components/Form";

const App = () => {
    return (
        <div>
            <div className="header">
                <h3>HEADER</h3>
                <button name="header-button">click</button>
            </div>
            <Form/>
        </div>
    )
}

export {
    App,
}
