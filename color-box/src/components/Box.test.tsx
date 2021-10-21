import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Box from "./Box";
import { BoxObj } from "./BoxList";

const dataProp: BoxObj = {
  backgroundColor: "red",
  width: 100,
  height: 100,
  id: "some unique thing",
};

let removeBox: jest.Mock<Function>;

beforeEach(() => {
  removeBox = jest.fn();
});

afterEach(() => {
  removeBox.mockClear();
});

describe("displays", () => {
  // smoke test
  it("renders", () => {
    render(<Box data={dataProp} removeBox={removeBox} />);
  });

  it("matches snapshot", () => {
    // snapshot test
    const { asFragment } = render(
      <Box data={dataProp} removeBox={removeBox} />
    );
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
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
  test("remove button click", () => {
    render(<Box data={dataProp} removeBox={removeBox} />);
    const removeButton = screen.getByRole("button", {
      name: /x/i,
    });

    expect(removeButton).toBeInTheDocument();
    expect(removeBox).not.toBeCalled();
    userEvent.click(removeButton);
    expect(removeBox).toBeCalledTimes(1);
  });
});
