import React from 'react';

//import components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

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
        taskDone: false
      }]
    })
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
      <div>
        <h2>Todo List</h2>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList toggleList={this.toggleList} list={this.state.toDoTaskData}/>
      </div>
    );
  }
}

export default App;
