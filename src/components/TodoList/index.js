import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'
import TaskForm from '../TaskForm'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// todo list display component
class TodoList extends Component {
  state = {todoList: initialTodosList,isEdit:false,editData:{},editTask:""}
  onDelete = id => {
    const {todoList} = this.state
    const filteredData = todoList.filter(each => each.id !== id)
    this.setState({todoList: filteredData})
    
  }

  onEdit = (id)=>{
    const {todoList} = this.state
    const filteredData = todoList.find(each => each.id === id)
    this.setState({isEdit:true,editData:filteredData,editTask:filteredData.title})
    
  }

  addingNewItem = (value) =>{
    const newTodoListItem = {
        id:this.state.todoList.length+1,
        title:value
    }
    
    this.setState(prevState => ({todoList:[...prevState.todoList,newTodoListItem],isEdit:false}))
    
  }
  render() {
    const {todoList,isEdit,editData} = this.state
    return (
      <div className="container-back">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
          <TaskForm addingNewItem={this.addingNewItem} isEdit={isEdit} editData={editData}/>
          <ul className="list-container">
            {todoList.map(eachItem => (
              <TodoItem
                initialTodosList={eachItem}
                onDelete={this.onDelete}
                key={eachItem.id}
                onEdit={this.onEdit}
                
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default TodoList
