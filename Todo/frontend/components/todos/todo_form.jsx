import {uniqueId} from './util';
import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {id: uniqueId(), title: "", body: "", done: false,}
    }

    render() {
        return (<h1>todostuff</h1>)
    }
}

export default TodoForm;