import TodoItem from "./TodoItem"
const TodoList = ({todos, removeTodo ,updateTodo})=>{    
    return(

        <div className="bg-white overflow-hidden mt-8 rounded-t-md">

            {todos.map((todo)=>(
                <TodoItem key={todo.id} todo ={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
            ))}
        </div>
    )
}

export default TodoList