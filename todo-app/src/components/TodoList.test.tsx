import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "./TodoList";

describe("displays", () => {
  it("renders", () => {
    render(<TodoList />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
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
      </DocumentFragment>
    `);
  });
});

describe("interactions", () => {

    test("delete todo", () => {
        render(<TodoList />);
        const removeButton = screen.getByRole("button", {
            name: "X"
        });

        expect(screen.getByText(/finish todo app/i)).toBeInTheDocument();
        userEvent.click(removeButton);
        expect(screen.queryByText(/finish todo app/i)).not.toBeInTheDocument();
    });

    test("create todo", () => {
        render(<TodoList />);
        const taskInput = screen.getByRole("textbox", {
            name: /task/i
        });
        const createButton = screen.getByRole("button", {
            name: /create/i
        });

        expect(screen.queryByText(/walk the dog/i)).not.toBeInTheDocument();
        userEvent.type(taskInput, "Walk the dog.");
        userEvent.click(createButton);
        expect(screen.getByText(/walk the dog/i)).toBeInTheDocument();
    });
});
