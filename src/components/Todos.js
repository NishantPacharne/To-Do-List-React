import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <div className="w-full p-4 sm:p-8">
      <section className="body-font">
        <div className="flex flex-wrap justify-center">
          <div className="sm:w-1/2 w-full">
            {props.todos.length === 0? "Cheers ! You nailed it 🔥":
              props.todos.map((todo) => {
                return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}></TodoItem>);
              })
            }
            
            {/* {statement? "true": 
              false
            } */}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Todos;
