import React from "react";
import { render, screen } from "@testing-library/react";
import  CoverImage  from "../app/cover-image";
import { url } from "inspector";

jest.mock("next/headers");

describe("cover-image", () => {
  it("should have alt text", () => {
    const title="cover-image-title"
    render(<CoverImage title="cover-image-title" url={undefined} slug={undefined} />);
    const element = screen.getByAltText(`Cover Image for ${title}`);
    expect(element).not.toBeNull();
  });
});