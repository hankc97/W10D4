import { RECEIVE_TODOS, RECEIVE_TODO, REMOVETODO} from '../actions/todo_actions';
import {receiveTodo, receiveTodos, removeToDo} from '../actions/todo_actions';

const todos = {
    1: {
      id: 1,
      title: 'wash car',
      body: 'with soap',
      done: false
    },
    2: {
      id: 2,
      title: 'wash dog',
      body: 'with shampoo',
      done: true
    },
}

const todosReducer = (state = todos, action) => {
    Object.freeze(state);

    const nextState = Object.assign({}, state);

    switch (action.type) {
        case REMOVETODO:
            nextState[action.todo.id] = undefined;
            return nextState;
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo;
            return nextState;
        case RECEIVE_TODOS:
            action.todos.forEach((todo) => {
                nextState[todo.id] = todo;
            })
            return nextState;
        default: 
            return state;
    }
};

export default todosReducer;