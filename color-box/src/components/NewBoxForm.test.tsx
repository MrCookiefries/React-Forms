import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewBoxForm from "./NewBoxForm";

let addBox: jest.Mock<Function>;

beforeEach(() => {
  addBox = jest.fn();
});

afterEach(() => {
  addBox.mockClear();
});

describe("displays", () => {
  it("renders", () => {
    render(<NewBoxForm addBox={addBox} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<NewBoxForm addBox={addBox} />);
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
      </DocumentFragment>
    `);
  });
});

describe("interactions", () => {
  test("submit form click", () => {
    render(<NewBoxForm addBox={addBox} />);
    const submitButton = screen.getByRole("button", {
      name: /add box/i,
    });

    expect(submitButton).toBeInTheDocument();
    expect(addBox).not.toBeCalled();
    userEvent.click(submitButton);
    expect(addBox).toBeCalledTimes(1);
  });
});
