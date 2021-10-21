import { getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo, { TodoObj } from "./Todo";

const todoData: TodoObj = {
  task: "Walk the dog.",
  id: "some unique thing",
  completed: true,
};

let toggleCompleted: jest.Mock<Function>;
let removeTodo: jest.Mock<Function>;

beforeEach(() => {
  toggleCompleted = jest.fn();
  removeTodo = jest.fn();
});

afterEach(() => {
  toggleCompleted.mockClear();
  removeTodo.mockClear();
});

describe("displays", () => {
  it("renders", () => {
    render(
      <Todo
        data={todoData}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
      />
    );
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <Todo
        data={todoData}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
      />
    );
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="Todo"
        >
          <p
            class="done"
          >
            Walk the dog.
          </p>
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
        render(
            <Todo
              data={todoData}
              removeTodo={removeTodo}
              toggleCompleted={toggleCompleted}
            />
        );
        const removeButton = screen.getByRole("button", {
            name: "X"
        });

        expect(removeButton).toBeInTheDocument();
        expect(removeTodo).not.toBeCalled();
        userEvent.click(removeButton);
        expect(removeTodo).toBeCalledTimes(1);
    });

    test("task click", () => {
        render(
            <Todo
              data={todoData}
              removeTodo={removeTodo}
              toggleCompleted={toggleCompleted}
            />
        );
        const task = screen.getByText(/walk the dog/i);

        expect(task).toBeInTheDocument();
        expect(toggleCompleted).not.toBeCalled();
        userEvent.click(task);
        expect(toggleCompleted).toBeCalledTimes(1);
    });
});
