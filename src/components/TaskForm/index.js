
import {Component} from "react";

import "./index.css";

class TaskForm extends Component{
    state = {newtodoItem:""}

    

    addTodo = () =>{
        const {newtodoItem} = this.state
        const {addingNewItem} = this.props;
        addingNewItem(newtodoItem)
        this.setState({newtodoItem:""})

    }
    
  
    changeTodoItem = (event)=>{
        this.setState({newtodoItem:event.target.value})
    }
    render(){
        const{newtodoItem} = this.state;
        console.log(this.props.editData)
        return (
            <div className="add-todo-container">
            <input type="text" className="input-element-for-adding-editing-task" value={newtodoItem} onChange={this.changeTodoItem}/>
            <button className="buttn-add" onClick={this.addTodo}>Add</button>
            </div>
        )
    }

}
export default TaskForm;