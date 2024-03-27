const { render, screen, fireEvent } = require("@testing-library/react");
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search res list for the burger text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  //To get the cards length before the search
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(20);

  const Search = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId(searchInput);

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(Search);

  //screen should load 4 cards

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch, length).toBe(4);
});

it("Should filter the top rated resturant ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  //To get the cards length before the search
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(20);

  const topRateBtn = screen.getByRole("button", {
    name: "Top Rated Resturant",
  });
  fireEvent.click(topRateBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(3);
});
