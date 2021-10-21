import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BoxList from "./BoxList";

describe("displays", () => {
  it("renders", () => {
    render(<BoxList />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <form
          class="NewBoxForm"
        >
          <label>
            Background Color
            <input
              name="backgroundColor"
              type="color"
              value="#000000"
            />
          </label>
          <label>
            Width
            <input
              max="1000"
              min="10"
              name="width"
              type="number"
              value="100"
            />
          </label>
          <label>
            Height
            <input
              max="1000"
              min="10"
              name="height"
              type="number"
              value="100"
            />
          </label>
          <button
            type="submit"
          >
            Add Box
          </button>
        </form>
        <div
          class="Box"
        >
          <div
            style="background-color: red; width: 100px; height: 100px;"
          />
          <button
            type="button"
          >
            X
          </button>
        </div>
      </DocumentFragment>
    `);
  });
});

describe("interactions", () => {

  test("box creation", () => {
    render(<BoxList />);
    const submitButton = screen.getByRole("button", {
      name: /add box/i
    });
    
    expect(document.querySelectorAll(".Box")).toHaveLength(1);
    userEvent.click(submitButton);
    expect(document.querySelectorAll(".Box")).toHaveLength(2);
  });

  test("box deletion", () => {
    render(<BoxList />);
    const removeButton = screen.getByRole("button", {
      name: "X"
    });
    
    expect(document.querySelectorAll(".Box")).toHaveLength(1);
    userEvent.click(removeButton);
    expect(document.querySelectorAll(".Box")).toHaveLength(0);
  });
});
