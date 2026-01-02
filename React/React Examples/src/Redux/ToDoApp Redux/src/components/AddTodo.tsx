import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/reducers";

const AddTodo = () => {
  // Dispatch is used to send an action to the store
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.length > 1) {
      dispatch(
        addTodo({
          id: new Date().getTime(),
          todo: input,
        })
      );
      setInput("");
    }
    else {
      alert("Task is Empty. Sorry!");
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
        Add
      </button>
    </form>
  );
};

export default AddTodo;
