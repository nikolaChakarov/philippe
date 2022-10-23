import { render, screen } from "@testing-library/react";
import Form from "./Form";

test("init render, button is disabled", () => {
    render(<Form />);

    const container = screen.getByTestId("form");

    console.log(container);
});
