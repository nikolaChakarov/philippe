import { useState, useEffect } from "react";

const useForm = (props) => {
    const { init, rules, validate, step, onSubmit } = props;
    const [values, setValues] = useState(init);
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(false);
    const [dirty, setDirty] = useState(false);

    const handleCheckBoxChange = (e, checkboxGroup) => {
        console.log({ checkboxGroup });
        checkboxGroup
            ? setValues((prev) => {
                  console.log(prev[checkboxGroup]);

                  return prev;
              })
            : setValues((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.checked,
              }));
    };

    const handleChange = (e) => {
        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(values);
    };

    useEffect(() => {
        const { currentStepValid, err } = validate(step, values);
        setErrors(err);
        setValid(currentStepValid);
        setDirty(false);
    }, [values, step]);

    return {
        values,
        errors,
        valid,
        dirty,
        setDirty,
        handleCheckBoxChange,
        handleChange,
        handleSubmit,
    };
};

export default useForm;
