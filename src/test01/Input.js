import React, { useRef, useMemo, forwardRef } from "react";
import useInput from "./useInput";

const Input = (props) => {
    const { id, type, placeholder } = props;

    const { value, onChange } = useInput(props);
    console.log(value);

    return (
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

// export default Input;

export default forwardRef((props, ref) => {
    return useMemo(() => <Input {...props} inputRef={ref} />, []);
});
