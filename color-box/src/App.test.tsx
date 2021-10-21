import { render } from "@testing-library/react";
import App from "./App";

it("renders", () => {
  render(<App />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="App"
      >
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
      </div>
    </DocumentFragment>
  `);
});
