import { render } from "@testing-library/react";
import App from "./App";

describe("displays", () => {
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
          <div
            class="TodoList"
          >
            <form
              class="NewTodoForm"
            >
              <label>
                Task
                <input
                  maxlength="100"
                  minlength="2"
                  name="task"
                  required=""
                  type="text"
                  value=""
                />
              </label>
              <button
                type="submit"
              >
                Create
              </button>
            </form>
            <div
              class="Todo"
            >
              <p
                class=""
              >
                finish todo app
              </p>
              <button
                type="button"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
