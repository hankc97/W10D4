import configureStore from './store/store';
import {receiveTodos, receiveTodo, removeToDo} from './actions/todo_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const h1 = document.createElement('h1')
    h1.textContent = "Todos App"
    root.appendChild(h1)
    
    const store = configureStore();
    window.store = store;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.removeToDo = removeToDo;
})
