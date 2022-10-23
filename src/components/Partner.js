import React, { useRef } from "react";
import Form from "../theme/Form";

import DynamicInput from "../theme/DynamicInput";

const Partner = () => {
    const formRef = useRef();
    return (
        <Form ref={formRef}>
            <DynamicInput id="name" type="text" placeholder="Name" onFocus />
            <DynamicInput id="age" type="number" placeholder="Age" min={0} />
        </Form>
    );
};

export default Partner;
