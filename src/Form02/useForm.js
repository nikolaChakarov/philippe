import { useState, useEffect } from "react";

const useForm = (props) => {
    const { init, validationRules, validate, onSubmit } = props;

    const [values, setValues] = useState(init);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [valid, setValid] = useState(false);
    const [dirty, setDirty] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleBlur = (e) => {
        setTouched((prev) => ({
            ...prev,
            [e.target.name]: true,
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

        if (!valid) {
            setTouched(errors);
            return;
        }

        setTouched({});
        handleReset();
        setIsSubmitting(true);

        onSubmit(values);
    };

    const handleReset = () => {
        setValues(init);
    };

    useEffect(() => {
        const { errors: initErrors, valid: initValid } = validate(
            validationRules,
            values
        );
        setErrors(initErrors);
        setValid(initValid);
    }, [values]);

    return {
        values,
        errors,
        touched,
        valid,
        dirty,
        isSubmitting,
        setIsSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    };
};

export default useForm;
