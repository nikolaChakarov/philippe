import React from "react";

const Input = (props) => {
    const { id, type, placeholder } = props;

    return <input type={type} id={id} placeholder={placeholder} />;
};

export default Input;
