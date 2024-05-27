import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  
  const handleEdit = () =>{
    
  }

  const handleDelete = () =>{
    
  }

  const handleAdd = () =>{
    setTodos([...todos, {todo, isCompleted: false}])
    setTodo("")
    console.log(todos)
  }

  const handleChange = (e) =>{
    setTodo(e.target.value)
  }

  return (
    <>
    <Navbar/>
      <div className="container mx-auto bg-violet-50 my-5 rounded-xl p-5 min-h-[80vh]">
          <div className="addTodo my-5">
            <h2 className='text-lg font-bold'>Add a todo</h2>
            <input onChange={handleChange} value={todo} type="text" className='w-80' />
            <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-6'>Add</button>
          </div>
          <h2 className='text-lg font-bold'>Your daily tasks</h2>
          <div className="todos">
            {todos.map(item=>{

            
            return <div key={todo} className="todo flex justify-between w-1/4">
              <input type="checkbox" value={todo.isCompleted} name="" id="" />
             <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
             <div className="buttons">
              <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-1'>Edit</button>
              <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-1'>Delete</button>
             </div>
            </div>
            })}
          </div>
      </div>
    </>
  )
}

export default App
