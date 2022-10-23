import React, { forwardRef, useEffect, useRef, useMemo } from "react";
import Input from "./Input";
import useFormInput from "./hooks/useFormInput";

const DynamicInput = (props) => {
    const { id, type, placeholder, onFocus, min } = props;

    const internalInputRef = useRef(null);

    const { onChange, value } = useFormInput(props);
    // console.log(props);

    useEffect(() => {
        if (onFocus) {
            internalInputRef?.current.focus();
        }
    }, []);

    return (
        <Input
            ref={internalInputRef}
            id={id}
            type={type}
            placeholder={placeholder}
            onFocus={onFocus}
            min={min}
            onChange={onChange}
            value={value}
        />
    );
};

// export default forwardRef(DynamicInput);
export default forwardRef((refProps, ref) => {
    return useMemo(() => <DynamicInput {...refProps} inputRef={ref} />);
});
