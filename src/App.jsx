import Header from "./components/Header"
import TodoComputed from "./components/TodoComputed"
import TodoCreate from "./components/TodoCreate"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"
import { useState , useEffect } from "react"


const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || []

const App = () =>{
  const [todos,setTodos] = useState(initialStateTodos)


  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  const createTodo = (title)=>{
    const newTodo = {
      id:todos.length + 1,
      title,
      completed:false,
    }


    setTodos([...todos,newTodo])
  }


  const removeTodo = (id) =>{
    setTodos (todos.filter((todo)=>todo.id !==id))

  }

  const updateTodo =(id)=>{
    setTodos(todos.map(
      todo=>todo.id === id ? {...todo, completed : !todo.completed}:todo
    ))
  }



  const computedItemsLeft = todos.filter((todo)=> !todo.completed).length;

  const clearCompleted = ()=>{
    setTodos(todos.filter ((todo)=>!todo.completed))

  }

  const [filter,setFilter] = useState("all")

  const changeFilter = (filter )=> setFilter(filter)

  const filteredTodos = () =>{
    switch(filter){
      case "all":
        return todos;
      case "active":
        return todos.filter((todo)=>!todo.completed);
      case "completed":
        return todos.filter((todo)=> todo.completed)
      default:
        return todos;
    }
  }


  return (
    <div className="dark:bg-gray-900 md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">

      <Header/>

      <main className=" container mx-auto px-4 mt-8 md:max-w-xl">
        
        <TodoCreate createTodo={createTodo}/>
        
        <TodoList  todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo} />
      
        <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>

        <TodoFilter  changeFilter={changeFilter} filter={filter}/>

      </main>

        <footer className="text-center mt-8 dark:text-gray-400">drag and drop</footer>

    </div>


    
  )
}

export default App 