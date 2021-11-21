import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

test("renders a link with the text: Event Den", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkElement = screen.getByRole("link", { name: "Event Den" });
  expect(linkElement).toBeInTheDocument();
});

test("renders a link with the text: Bucket List", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkElement = screen.getByRole("link", { name: "Bucket List" });
  expect(linkElement).toBeInTheDocument();
});

test("renders a link with the text: Powered by TicketMaster", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkElement = screen.getByRole("link", {
    name: "Powered by TicketMaster",
  });
  expect(linkElement).toBeInTheDocument();
});

test("renders an anchor tag with proper href attribute", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const linkElement = screen.getByRole("link", { name: "Powered by TicketMaster" });
    expect(linkElement).toHaveAttribute("href", "https://developer.ticketmaster.com/");
  });
  