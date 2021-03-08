import rootReducer from './root_reducer';


const allTodos = (state) => {
    const todosArray = Object.values(state.todos);
    return todosArray;
}

export default allTodos;