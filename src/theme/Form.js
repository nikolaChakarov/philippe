import React, { forwardRef } from "react";

const Form = (props, ref) => {
    const { children } = props;

    return (
        <div>
            <h4>Form</h4>
            {children}
        </div>
    );
};

export default forwardRef(Form);
