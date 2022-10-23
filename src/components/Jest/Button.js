import React from "react";

const Button = (props) => {
    const { type, text, disabled } = props;
    return (
        <button type={type} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
