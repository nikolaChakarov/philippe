import { useState, useEffect } from "react";

const useForm = (props) => {
    const { initialValues, onSubmit, validate } = props;

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        const errList = validate({
            ...values,
            [e.target.name]: e.target.value,
        });

        setErrors(errList);

        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errorsList = validate(values);

        if (Object.keys(errorsList).length !== 0) {
            setErrors(errorsList);
            setTouched(errorsList);
            return;
        }

        setErrors({});

        onSubmit(values);
    };

    const handleBlur = (e) => {
        const touchedInput = e.target.name;
        setTouched((prev) => ({
            ...prev,
            [touchedInput]: true,
        }));
    };

    return {
        values,
        handleChange,
        handleSubmit,
        errors,
        handleBlur,
        touched,
    };
};

export default useForm;
