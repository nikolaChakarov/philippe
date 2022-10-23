import React from "react";

const Form = (props) => {
    const { senderId } = props;

    return (
        <div senderId={senderId}>
            <form id="form">
                <input type="text" placeholder="username" />
                <input type="number" placeholder="age" />
                <button disabled>Submit</button>
            </form>
        </div>
    );
};

export default Form;
