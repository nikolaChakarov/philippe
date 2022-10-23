import { useState } from "react";

const useForm = (props) => {
    const {
        init = {},
        validate,
        onSubmit = () => {},
        validations = [],
    } = props;

    const { isValid: initIsValid, errors: initErrors } = validate(
        validations,
        init
    );

    const [values, setValues] = useState(init);
    const [errors, setErrors] = useState(initErrors);
    const [isValid, setValid] = useState(initIsValid);
    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        const newValues = { ...values, [e.target.name]: e.target.value };
        const { isValid, errors } = validate(validations, newValues);

        setValues(newValues);
        setErrors(errors);
        setValid(isValid);
        setTouched((prev) => ({ ...prev, [e.target.name]: true }));
    };

    const handleReset = () => {
        setValues(init);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValid) return;

        onSubmit(values);
    };

    return {
        values,
        handleChange,
        isValid,
        errors,
        touched,
        handleReset,
        handleSubmit,
    };
};

export default useForm;
