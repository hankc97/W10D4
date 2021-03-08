import React from 'react';
import { removeToDo } from '../../actions/todo_actions';
import {uniqueId} from './util';


export const TodoListItem = (props) => {
    return (
        <div>   
            <li id= {uniqueId()}>
                {props.todo.title}
                <button onClick={removeToDo}>Delete Todo</button>
            </li>
            
        </div>
    )
}
