import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchForm from "./SearchForm";

test("Properly renders submit button", () => {
  render(<SearchForm />);
  const submitButton = screen.getByRole("button", { name: "Search" });
  expect(submitButton).toBeInTheDocument();
});

test("Properly renders distance input", () => {
    render(<SearchForm />);
    const input = screen.getByText("Distance");
    expect(input).toBeInTheDocument();
  });
  
