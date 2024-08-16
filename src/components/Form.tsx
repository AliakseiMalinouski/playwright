import React, { FC } from "react";
import { useState } from "react";

const Form: FC = () => {

    const [isVisible, setVisibility] = useState<boolean>(false);

    const handleClick = (): void => {
        setVisibility(!isVisible);
    }

    return (
        <form data-testid='form'>
            <input data-testid='form-input'/>
            <input name="localized-field"/>
            <button type="button" onClick={handleClick}>click</button>
        </form>
    )
}

export {
    Form,
}
