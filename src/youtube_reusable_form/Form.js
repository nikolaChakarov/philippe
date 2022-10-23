import { useState } from "react";
import { Link } from "react-router-dom";

const prepareForm = (formArr) =>
    formArr.reduce((acc, cur) => ({ ...acc, [cur.name]: "" }), {});

const Form = ({ title, formArr, submitBtn, onSubmit, redirect }) => {
    const initialForm = prepareForm(formArr);
    const [form, setForm] = useState(initialForm);

    const onChangeHandler = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmit(form, () => {
            setForm(initialForm);
        });
    };

    const hasRedirect = !!redirect;

    return (
        <form>
            <span className="title">{title}</span>
            {formArr.map(({ name, label, type }, idx) => (
                <div className="control" key={idx}>
                    <label htmlFor={name}>{label}</label>
                    <input
                        type={type}
                        name={name}
                        id={name}
                        value={form[name]}
                        onChange={onChangeHandler}
                    />
                </div>
            ))}
            <button onClick={onSubmitHandler}>{submitBtn}</button>
            {hasRedirect && (
                <div className="redirect">
                    <label>{redirect.label}&nbsp;re</label>
                    <Link to={redirect.link.to}>{redirect.link.label}</Link>
                </div>
            )}
        </form>
    );
};

Form.defaultProps = {
    title: "Sign In",
    formArr: [
        {
            label: "Email",
            name: "email",
            type: "text",
        },
        {
            label: "Password",
            name: "password",
            type: "text",
        },
    ],
    submitBtn: "Sign in",
    onSubmit: (form, cb) => {
        cb();
        console.log(form);
    },
    redirect: {
        label: "Dont have an account?",
        link: {
            label: "Register",
            to: "/register",
        },
    },
};

export default Form;
