import React from "react";
import { render, screen } from "@testing-library/react";
import  Avatar  from "../app/avatar";
import { url } from "inspector";

jest.mock("next/headers");

describe("avatar", () => {
  it("should have alt text", () => {
    render(<Avatar name="avatar-alt-text" picture={{url:undefined}} />);
    const element = screen.getByAltText("avatar-alt-text");
    expect(element).not.toBeNull();
  });
});