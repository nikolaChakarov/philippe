import React from "react";
import useForm from "./useForm";

const Form02 = () => {
    const init = {
        username: "",
        password: "",
    };

    const validationRules = [
        ({ username }) =>
            isRequired(username) || { username: "Username is required" },
        ({ password }) =>
            isRequired(password) || { password: "Password is required" },
    ];

    const isRequired = (value) => {
        return value !== null && value.length > 0;
    };

    const validate = (rules, values) => {
        const errors = rules
            .map((func) => func(values))
            .filter((res) => typeof res === "object");

        return {
            valid: errors.length === 0,
            errors: errors.reduce((acc, curr) => ({ ...acc, ...curr }), {}),
        };
    };

    const onSubmit = (val) => {
        setTimeout(() => {
            setIsSubmitting(false);
        }, 1000);

        console.log({ val });
    };

    const {
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
    } = useForm({ init, validationRules, validate, onSubmit });

    console.log({ errors }, { valid }, { values }, { touched });

    return (
        <div>
            <label
                htmlFor="username"
                style={{ display: "flex", flexDirection: "column" }}
            >
                <span>Username</span>
                <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.username && errors.username && (
                    <span style={{ color: "red" }}>{errors.username}</span>
                )}
            </label>

            <label
                htmlFor="password"
                style={{ display: "flex", flexDirection: "column" }}
            >
                <span>Password</span>
                <input
                    type="text"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.password && errors.password && (
                    <span style={{ color: "red" }}>{errors.password}</span>
                )}
            </label>
            <button disabled={isSubmitting} onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default Form02;
