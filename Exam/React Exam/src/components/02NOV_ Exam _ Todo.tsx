import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

interface Todo {
  id: number;
  todo: string;
  userId: number;
  completed: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos")
      .then((response) => {
        const completedTasks = response.data.todos.filter(
          (todos: Todo) => todos.completed === true
        );
        setTodos(completedTasks);
      })
      .catch((error) => console.error("Error fetching todos:", error))
      .finally(() => setLoading(false));
  }, []);

  const columns: any = [
    {
      name: "SL NO.",
      selector: (_row: Todo, index: number) => index + 1,
      sortable: true,
      width: "100px",
    },
    {
      name: "TASK NAME",
      selector: (row: Todo) => row.todo,
      sortable: true,
      grow: 2,
    },
    {
      name: "USER ID",
      selector: (row: Todo) => row.userId,
      sortable: true,
      width: "120px",
    },
  ];

  return (
    <div style={{ width: "80%", margin: "30px auto" }}>
      <h2 style={{ textAlign: "center" }}> Completed Tasks</h2>
      <DataTable
        columns={columns}
        data={todos}
        progressPending={loading}
        pagination
        highlightOnHover
        striped
        dense
      />
    </div>
  );
};

export default Todos;
