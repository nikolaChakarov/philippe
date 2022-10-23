import React, { forwardRef } from "react";

const Input = (props, ref) => {
    const { id, type, placeholder, min, onChange, value } = props;
    // console.log(props, ' input element');

    return (
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            ref={ref}
            min={min}
            onChange={onChange}
            value={value}
        />
    );
};

export default forwardRef(Input);
