import React from 'react';

//import components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

import "./components/Todo.css"

const todoTaskList = [{
  task: "Pay Bills",
  id: 111,
  taskDone: false,
  },
  {
    task: "Organize Pantry",
    id:121,
    taskDone:false,
  },
  {
    task:"Order kids cloths",
    id:131,
    taskDone: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  //constructor with state
  constructor(){
    super();
    this.state = {
      toDoTaskData: todoTaskList,
    }
  }

  addTodo = (newTodoTask) => {
    this.setState({
      toDoTaskData: [...this.state.toDoTaskData, {
        task: newTodoTask,
        taskDone: false,
        id: new Date()
      }]
    })
  }

  clearTask = () => {
    this.setState({
      toDoTaskData: this.state.toDoTaskData.filter((item) => {
        return(
          !item.taskDone
        )
      })
    })
    console.log(this.toDoTaskData)
  }

  toggleList = (todoTaskId) => {
    const newTaskList = this.state.toDoTaskData.map((item) =>{
      if(item.id === todoTaskId){
        return{
          ...item,
          taskDone: !item.taskDone,
        }
      }else{
        return item;
      }
    })
    console.log(newTaskList);
    this.setState({
      toDoTaskData: newTaskList,
    })
  }
  render() {
    return (
      <div className="app">
        <h2>Todo List by Jalpa Shah</h2>
        <TodoForm addTodo={this.addTodo} clearTask={this.clearTask}/>
        <TodoList toggleList={this.toggleList} list={this.state.toDoTaskData}/>
      </div>
    );
  }
}

export default App;
