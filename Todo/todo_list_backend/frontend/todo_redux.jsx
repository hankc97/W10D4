import configureStore from './store/store';
import {receiveTodos, receiveTodo, removeTodo} from './actions/todo_actions';
import {receiveStep, receiveSteps, removeStep} from './actions/step_actions';
import allTodos from './reducers/selectors';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {fetchTodos} from './util/todo_api_util'

document.addEventListener("DOMContentLoaded", () => {
    // if its on the page replace with react "root" 
    const content = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store = {store} />, content);
    
    // const h1 = document.createElement('h1')
    // h1.textContent = "Todos App"
    // root.appendChild(h1)
    
    window.store = store;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo;
    window.receiveStep = receiveStep;
    window.receiveSteps = receiveSteps;
    window.removeStep = removeStep;
    window.allTodos = allTodos;
    window.fetchTodos = fetchTodos;
})
