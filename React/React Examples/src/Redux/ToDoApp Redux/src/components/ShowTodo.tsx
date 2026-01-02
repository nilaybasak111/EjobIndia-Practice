//import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../reducers/reducers";
import { useNavigate } from "react-router-dom";

const ShowTodo = () => {
  const data = useSelector((state:any) => state.todos.allTodos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (id:number) => {
    navigate(`/edit/${id}`);
  };


  
  let showData;
  if (data.length === 0) {
    showData = (
      <div className="text-danger text-center">No Data Available!</div>
    );
  } else {
    showData = data.map((item:any) => (
      <div className="w-100 d-flex justify-content-center" key={item.id}>
        <input
          type="text"
          className="form-control w-75"
          value={item.todo}
          readOnly
        />
        <button
          className="btn btn-warning ms-2"
          onClick={() => handleEdit(item.id)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger ms-2"
          onClick={() =>
            dispatch(
              deleteTodo({
                id: item.id,
              })
            )
          }
        >
          Delete
        </button>
      </div>
    ));
  }
  return (
    <form className="container d-flex justify-content-center mt-5 flex-column gap-2">
      {showData}
    </form>
  );
};

export default ShowTodo;
