import {uniqueId} from './util';
import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {id: uniqueId(), title: "", body: "", done: false,}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChange(type) {
        return e => {
            if (type == 'title') {
                this.setState({
                    title: e.target.value,
                });
            } else {
                this.setState({
                    body: e.target.value,
                });
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state);
        this.setState({
            id: uniqueId(),
            title: "",
            body: "",
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add Todo</h1>
                <label>Title:
                    <input type="text" value={this.state.title} onChange={this.handleTextChange('title')}/>
                </label>

                <label>Body:
                    <input type="text" value={this.state.body} onChange={this.handleTextChange('body')}/>
                </label>

                <input type="submit" value="Add Todo"/>
            </form>
        )
    }
}

export default TodoForm;