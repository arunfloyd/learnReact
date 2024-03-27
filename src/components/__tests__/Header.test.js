const { render, screen, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
it("Should render header component with a login button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButn = screen.getByRole("Login", { name: "Login" });

  expect(loginButn).toBeInTheDocument();
});
it("Should render header component with cart item zero", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItem = screen.getByText("Cart - (0 items)");

  expect(cartItem).toBeInTheDocument();
});
//Checking using Regex
it("Should render header component with cart item ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButn = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButn);

  const logOutButn = screen.getByRole("button", { name: "Logout" });

  expect(logOutButn).toBeInTheDocument();
});
//Checking the button is changeing
it("Should change the login button on click into logout", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItem = screen.getByText(/Cart/);

  expect(cartItem).toBeInTheDocument();
});
