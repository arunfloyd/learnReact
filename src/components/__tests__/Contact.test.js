import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//Grouping Test Cases
describe("Contact Us Page Test Case", () => {
  //To do something before all the test cases
  beforeAll(() => {
    console.log("Before All");
  });

  beforeEach(() => {
    console.log("Before Each");
  });
  //To do something After all the test cases

  AfterAll(() => {
    console.log("After All");
  });

  AfterEach(() => {
    console.log("After Each");
  });

  //it === test both of them are same as alias of test
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });
  test("Should load button inside the contact component", () => {
    render(<Contact />);

    // const heading = screen.getByRole("button")
    const heading = screen.getByText("Submit");

    //Assertion
    expect(heading).toBeInTheDocument();
  });
  test("Should load input name inside contact component", () => {
    render(<Contact />);

    const heading = screen.getByPlaceholderText("name");

    //Assertion
    expect(heading).toBeInTheDocument();
  });
  test("Should load two input boxes contact component", () => {
    //Render the component which you want to test
    render(<Contact />);

    //Querying
    const inputBox = screen.getAllByRole("textbox");

    //Assertion
    // expect(inputBox.length).toBe(2);
    expect(inputBox.length).not.toBe(2);
  });
});
