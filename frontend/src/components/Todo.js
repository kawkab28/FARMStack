import axios from 'axios'
import React from 'react'
import './todo.css'

function TodoItem(props) {
    const deleteTodoHandler = (title) => {
    axios.delete(`http://localhost:8000/api/todo/${title}`)
        .then(res => console.log(res.data)) }
  
    return (
        <table>
               <tr>
                   <td>{props.todo.title}</td>
                   <td className='style'><blockquote></blockquote></td>
                   <td>{props.todo.description}</td>
                   <td><button onClick={() => deleteTodoHandler(props.todo.title)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',}}>X</button></td>
                   <td><hr></hr></td>
               </tr>
          </table>
    )
}

export default TodoItem;