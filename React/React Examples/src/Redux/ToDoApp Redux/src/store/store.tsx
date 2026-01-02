import { configureStore } from "@reduxjs/toolkit";
import { todos } from "../reducers/reducers";

const store = configureStore({
  reducer: { todos: todos },
});

export default store;
