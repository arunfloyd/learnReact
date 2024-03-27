import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestMenu from "../RestMenu";
import Cart from "../Cart";
import Header from "../Header";
import MOCK_DATA from "../mocks/mockResMenu.json";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => {
      Promise.resolve(MOCK_DATA);
    },
  })
);
it("Should load restaruant menu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });
  const accHeader = screen.getByText("Biriyani (5)");
  fireEvent.click(accHeader);
  expect(screen.getAllByTestId("food-Item").length).toBe(5);

  const addBtn = screen.getByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);
  expect(screen.getByTest("Cart - (1 items)").toBeInTheDocument());
});
