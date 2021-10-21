import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewTodoForm from "./NewTodoForm";

let addTodo: jest.Mock<Function>;

beforeEach(() => {
  addTodo = jest.fn();
});

afterEach(() => {
  addTodo.mockClear();
});

describe("displays", () => {
  it("renders", () => {
    render(<NewTodoForm addTodo={addTodo} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<NewTodoForm addTodo={addTodo} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
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
      </DocumentFragment>
    `);
  });
});

describe("interactions", () => {

    test("submitting form", () => {
        render(<NewTodoForm addTodo={addTodo} />);
        const taskInput = screen.getByRole("textbox", {
            name: /task/i
        });
        const submitButton = screen.getByRole("button", {
            name: /create/i
        });

        expect(taskInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
        expect(addTodo).not.toBeCalled();
        userEvent.type(taskInput, "Write these tests.");
        userEvent.click(submitButton);
        expect(addTodo).toBeCalledTimes(1);
    });
});
