import React from 'react';

export default class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            newTask: ""
        };
    };

    changeHandler = (event) => {
        this.setState({
            newTask: event.target.value 
        })
        //console.log(this.state.newTask)
    }

    handleAddButton = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.newTask);
        console.log(this.newTask);
        this.setState({newTask: ""});
    }

    handleClear = (event) => {
        event.preventDefault();
        this.props.clearTask();
    }
    render(){
        return(
            <form onSubmit={this.handleAddButton}>
                <div className="inputbox">
                    <label>Add your todo task below! <br /><br /></label>
                    
                    <input type="text" 
                           name="newItem" 
                           value={this.state.newTask}
                           placeholder="Todo Task"
                           onChange={this.changeHandler}
                    />
                </div>
                <div className="buttons">
                    <br /> 
                    <button>Add</button>
                    <button onClick={this.handleClear}>Clear</button>
                </div>
            </form>
        )
    }
}