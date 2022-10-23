import { useImperativeHandle, useState } from "react";

const useInput = (props) => {
    const {
        value: initValue,
        onChange: changeValueInForm,
        inputRef,
        id,
    } = props;

    const [value, setValue] = useState(initValue);

    useImperativeHandle(inputRef, () => ({
        changeValue: (newValue) => onChange({ target: { value: newValue } }),
        value,
    }));

    const onChange = (e) => {
        const {
            target: { value: newValue },
        } = e;

        setValue(newValue);
        changeValueInForm(id, newValue);
    };

    return { value, onChange };
};

export default useInput;
