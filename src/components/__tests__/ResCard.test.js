import { render, screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render restaruant Component with Props data", () => {
  render(<ResturantCard resData={MOCK_DATA} />);

  const nameRes = screen.getByText("Burger Tales")

  expect(nameRes).toBeinTheDocument()
});
