import { useSelector, useDispatch } from "react-redux";
import { clearTodoList } from "../actions/index";
import TodoItem from "../components/TodoItem";

const TodoList = () => {
  const { list } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearTodoList());
  };

  return (
    <div>
      <ul className="list-group my-5 border border-light">
        <h3 className="text-capitalize text-center">Kelvin Todo list</h3>
        {list.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
      <button
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={handleClearList}
      >
        clear list
      </button>
    </div>
  );
};

export default TodoList;
