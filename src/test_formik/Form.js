import React from "react";
import useForm from "./useForm";

const Form = () => {
    const initialValues = {
        name: "",
        email: "",
        channel: "",
    };

    const onSubmit = (values) => console.log(values);

    const validate = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = "Required";
        }

        if (!values.email) {
            errors.email = "Required";
        } else if (
            !/^[A-Z0-9/._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Invalid email format";
        }

        if (!values.channel) {
            errors.channel = "Required";
        }

        return errors;
    };

    const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
        useForm({
            initialValues,
            validate,
            onSubmit,
        });

    // console.log("values: ", values);
    console.log("touched: ", touched);

    return (
        <div>
            <h4>Custom Formik</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={values?.name}
                    onBlur={handleBlur}
                />
                {errors.name && touched.name && <div>{errors.name}</div>}

                <label htmlFor="email">E-mail</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={values?.email}
                    onBlur={handleBlur}
                />
                {errors.email && touched.email && <div>{errors.email}</div>}

                <label htmlFor="channel">Chanel</label>
                <input
                    type="text"
                    id="channel"
                    name="channel"
                    onChange={handleChange}
                    value={values?.channel}
                    onBlur={handleBlur}
                />
                {errors.channel && touched.channel && (
                    <div>{errors.channel}</div>
                )}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
