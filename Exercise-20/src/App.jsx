import { useState } from "react";

     const App = () => {

      const [todos, setTodos] = useState([]);
      const [inputValue, setInputValue] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputValue.trim()) return;
        setTodos([...todos, {id: Date.now(), text: inputValue, completed: false}]);
        setInputValue('');
      }

      const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
          todo.id === id ? {...todo, completed: !todo.completed} : todo
        ))
      }

      const deleteTodo = (id) => {
        setTodos(todos.filter( todo => todo.id !== id))
      }

      return (
        <header>
          <div className="p-6">
          <ul className="flex justify-center">
            <li className="text-purple-700 text-lg font-semibold bg-purple-100 px-3 py-1 rounded-lg mr-10">Todo App</li>
            <li className="text-gray-900 text-lg p-2 ">Study Timer</li>
          </ul>
          </div>

       
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-8 px-4">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">

        <h1 className="text-black text-3xl font-bold text-center mb-8">My Todo List</h1>

        <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
        <input type="text" 
        placeholder="Add a new todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-1 py-2 px-4 border border-gray-300 text-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <button 
        type="submit"
        className="bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
        >Add
        </button>
        </div>
        </form>

        <div className="space-y-3">
          {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex gap-3 items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
            >
              <input type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
             />
             <span className={`flex-1 ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'} `}
             >{todo.text}</span>
             <button
             onClick={() => deleteTodo(todo.id)}
             className="opacity-0 group-hover:opacity-100 px-2 py-1 text-red-600 hover:text-red-700 focus:outline-none transistion-opacity"
             > Delete
             </button>
            </div>
          ))}
        </div>

        {todos.length === 0 && (
          <p className="text-center text-gray-500 mt-6"
          >No todos yet. Add some todos! </p>
        )}

        </div>
        </div>
        </div> 
        </header>
      );
    }

    export default App;