import React from 'react';

export default class Todo extends React.Component{
    buttonClick = () => {
        this.props.toggleList(this.props.item.id);
    }
    
    render(){
        return(
            <div onClick={this.buttonClick} 
            className={this.props.item.taskDone ? "taskDone" : ""}>
                <p>{this.props.item.task}</p>
            </div>
        )
    }

}