import React from "react";
import { render, screen } from "@testing-library/react";
import { Intro } from "@/app/page";

jest.mock("next/headers");

describe("Intro", () => {
  it("should have Blog text", () => {
    render(<Intro />);

    const element = screen.getByText("Blog.");

    expect(element).not.toBeNull();
  });
});