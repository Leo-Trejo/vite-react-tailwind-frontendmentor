/* eslint-disable react/display-name */
import IconCross from "./icons/IconCross"
import IconCheck from "./icons/IconCheck"
import React from "react"

const TodoItem = React.forwardRef(({todo,removeTodo, updateTodo, ...props},ref)=>{
  const  {id,title,completed} = todo
    return(
        <article {...props} ref={ref} className=" flex gap-4 py-4 border-b-gray-400 border-b px-4  transition-all duration-1000  ">
              
              <button 
                onClick={()=>updateTodo(id)} 
                className={`w-5 h-5 flex-none rounded-full border-2 ${
                  completed 
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
                  : "inline-block"}`}>
                {completed && <IconCheck/>}
              </button>
              <p className={`text-gray-600 dark:text-gray-400 grow ${
                completed && "line-through"
                }`}>
                {title}
              </p>
              <button onClick={()=>removeTodo(id)}  className="flex-none">
                <IconCross/>
              </button>
        </article>
    )
})

export default TodoItem