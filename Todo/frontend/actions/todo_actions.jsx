// const todos = {
//     1: {
//       id: 1,
//       title: 'wash car',
//       body: 'with soap',
//       done: false
//     },
//     2: {
//       id: 2,
//       title: 'wash dog',
//       body: 'with shampoo',
//       done: true
//     },
// }

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVETODO = 'REMOVETODO';

export const receiveTodos = (todos) => { 
    return {
        type: RECEIVE_TODOS,
        todos: todos,
}};

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo: todo,
    }
};

export const removeToDo = (todo) => {
    return {
        type: REMOVETODO,
        todo: todo,
    }
};