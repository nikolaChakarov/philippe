import { useState, useImperativeHandle, useEffect } from "react";

const useFormInput = (props) => {
    const { value: initValue, onChange: initOnChange, ...attr } = props;

    console.log(props, " useFormInput");
    const [value, setValue] = useState(initValue);

    const onChange = (event) => {
        const newValue = event.target.value;

        console.log(newValue);
        setValue(newValue);
        // initOnChange(i);
    };

    // useEffect(() => {
    //     setValue(value);
    // }, [value]);

    return {
        onChange,
        value,
    };
};

export default useFormInput;
