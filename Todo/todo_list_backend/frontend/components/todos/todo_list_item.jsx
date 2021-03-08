import React from 'react';
import {uniqueId} from './util';


export class TodoListItem extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>   
                <li id= {uniqueId()}>
                    {this.props.todo.title}
                    <button onClick={this.props.removeTodo.bind(this, this.props.todo)}>Delete Todo</button>
                    {/* callback can be passed as () => this.props.removeTodo(this.props.todo) */}
                </li>
                
            </div>
        )}
}
