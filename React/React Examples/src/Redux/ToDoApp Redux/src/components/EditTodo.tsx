import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../reducers/reducers";

const EditTodo = () => {
  const [input, setInput] = useState("");
  let data = useSelector((state:any) => state.todos.allTodos);
  const id = useParams().id;
  data = data.filter((item:any) => item.id == id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => { 
    setTimeout(() => {
      setInput(data[0].todo);
    }, 5000);
  }, []);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.length > 0) {
      dispatch(
        editTodo({
          id: data[0].id,
          todo: input,
        })
      );
      setInput("");
      navigate("/todos");
    }
    else 
    {
      alert("Task can not be Empty");
    }
  };

  
  return (
    <form
      className="container d-flex justify-content-center mt-5"
      onSubmit={submit}
    >
      <input
        type="text"
        className="form-control w-75"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
      />
      <button className="btn btn-success ms-2" type="submit">
        UPDATE
      </button>
    </form>
  );
};

export default EditTodo;
