//import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import ShowTodo from "./ShowTodo";
import EditTodo from "./EditTodo";
import AddTodo from "./AddTodo";

const Rules=()=>{

    return(
        <>
          <BrowserRouter>
            <Header />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addtodo" element={<AddTodo />} />
            <Route path="/todos" element={<ShowTodo />} />
            <Route path="/edit/:id" element={<EditTodo />} />
            </Routes>
        </BrowserRouter>
        </>
    )

}

export default Rules;