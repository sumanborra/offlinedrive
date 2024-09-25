import { MdEdit } from "react-icons/md";
import './index.css'

const TodoItem = props => {
  const {initialTodosList, onDelete,onEdit} = props
  const {title, id} = initialTodosList
  const deleteU = () => {
    onDelete(id)
    
  }
  const editItem = () =>{
    onEdit(id)
    
  }
  
  return (
    <li className="list-style">
      <div className="changing-ttol-container">
        <input type="checkbox" id={`todoItemSelect${id}`} className="check-box"/>
        <label className="para" htmlFor={`todoItemSelect${id}`}>{title}</label>
      </div>
      <div className="changing-ttol-container">
      <button type="button" className="buttn" onClick={deleteU}>
        Delete
      </button>
      <button type="button" className="buttn-edit" onClick={editItem}><MdEdit size={40} color="#000000"/></button>
      </div>
    </li>
  )
}
export default TodoItem
