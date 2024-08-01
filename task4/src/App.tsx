import {FaPen, FaClipboardList} from 'react-icons/fa';
import { FcTodoList } from 'react-icons/fc';
import "./CSS/App.css"

function App() {  
  return (
    <>
    <div className="App">
      <div className="header">
        <div className="logoside">
          <FaPen />
          <h1> Task list</h1>
          <FaClipboardList />
        </div>
      </div>
      <FcTodoList/>
    </div>
    </>
  )
}

export default App
