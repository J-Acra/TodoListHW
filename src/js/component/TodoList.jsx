import React, { useState } from "react";

const TodoList= () =>{

    let[task, addTask] = useState(["eat food","take shower","make coffee"]);

    return(
        <div className="main">
            <div className="notePad">
                <p>Todo List</p>
            </div>
            <div></div>
        </div>
    );
};
export default TodoList;