import React from "react";
import useForm from "./useForm";

const Form01 = () => {
    const init = {
        username: "",
        password: "",
    };

    const validations = [
        ({ username }) =>
            isRequired(username) || { username: "Username is required" },
        ({ password }) =>
            isRequired(password) || { password: "Password is required" },
    ];

    const isRequired = (value) => {
        return value !== null && value.trim().length > 0;
    };

    const validate = (rules, values) => {
        const errors = rules
            .map((func) => func(values))
            .filter((el) => typeof el === "object");

        return {
            isValid: errors.length === 0,
            errors: errors.reduce((acc, curr) => ({ ...acc, ...curr }), {}),
        };
    };

    const onSubmit = (val) => {
        handleReset();
        console.log({ val });
    };

    const {
        values,
        errors,
        isValid,
        touched,
        handleReset,
        handleChange,
        handleSubmit,
    } = useForm({
        init,
        validate,
        validations,
        onSubmit,
    });

    console.log({ values }, { errors }, { isValid });

    return (
        <div>
            <div className="btns-wrapper">
                <label htmlFor="username">
                    <span>username</span>
                    <input
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {touched.username && errors.username && (
                        <span>{errors.username}</span>
                    )}
                </label>
                <label htmlFor="password">
                    <span>password</span>
                    <input
                        type="text"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {touched.password && errors.password && (
                        <span>{errors.password}</span>
                    )}
                </label>
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Form01;
