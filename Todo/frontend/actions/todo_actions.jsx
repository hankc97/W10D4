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

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

const receiveTodos = (todos) => ({
    type: RECEIVE_TODOS,
    todos: todos,
});


const receiveTodos = (todo) => ({
    type: RECEIVE_TODO,
    todo: todo,
});