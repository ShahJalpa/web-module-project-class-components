// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
    render(){
        return(
            <div className='todoList'>
                something
                <Todo />
            </div>
        )
    }
}
