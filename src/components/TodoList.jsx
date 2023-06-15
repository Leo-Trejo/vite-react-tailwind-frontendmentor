import { Droppable,Draggable } from "@hello-pangea/dnd"

import TodoItem from "./TodoItem"
const TodoList = ({todos, removeTodo ,updateTodo})=>{    
    return(
        <Droppable droppableId="todos">
            {
                (droppableProvided)=>(
                        <div 
                            ref={droppableProvided.innerRef}{...droppableProvided.droppableProps} 
                            className=  " dark:bg-gray-800 bg-white overflow-hidden mt-8 rounded-t-md transition-all duration-1000  ">
                            {todos.map((todo,index)=>(
                                <Draggable key={todo.id} index={index} draggableId={`${todo.id}`} >
                                    {
                                        (draggableProvided)=>(
                                            <TodoItem 
                                                ref={draggableProvided.innerRef}
                                                todo ={todo} 
                                                removeTodo={removeTodo} 
                                                updateTodo={updateTodo}
                                                {...draggableProvided.dragHandleProps}
                                                {...draggableProvided.draggableProps}
                                            />
                                        )
                                    }
                                    

                                </Draggable>
                            ))}
                            {droppableProvided.placeholder}
                        </div>
                )
            }
        </Droppable>
        
    )
}

export default TodoList