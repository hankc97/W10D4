import React from 'react'; // how is connect working and jsx
import {TodoListItem} from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({todos, receiveTodo, removeTodo}) => {
    return (
            <div>
                <h3>Todo List goes here!</h3>
                <ul>
                    {
                        todos.map((todo, idx) => {
                            return (<TodoListItem todo = {todo} receiveTodo={receiveTodo} removeTodo={removeTodo} key = {idx} />);
                        })
                    }
                </ul>
                <TodoForm receiveTodo={receiveTodo}/>
            </div>
        )
}



export default TodoList;

