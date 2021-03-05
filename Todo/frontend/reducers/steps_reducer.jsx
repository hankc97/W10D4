import {receiveStep, receiveSteps, removeStep} from '../actions/step_actions';
import {RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP} from '../actions/step_actions';

const steps = {
    todos: {
      1: {
        id: 1,
        title: 'take a shower',
        body: 'and be clean',
        done: false
      }
    },
    steps: {
      1: { // this is the step with id = 1
        id: 1,
        title: 'walk to store',
        done: false,
        todo_id: 1
      },
      2: { // this is the step with id = 2
        id: 2,
        title: 'buy soap',
        done: false,
        todo_id: 1
      }
    }
}


const stepsReducer = (state = steps, action) => {
    Object.freeze(state);

    const nextState = Object.assign({}, state);

    switch (action.type) {
        case REMOVE_STEP:
            nextState[action.steps.id] = undefined;
            return nextState;
        case RECEIVE_STEP:
            nextState[action.steps.id] = action.steps;
            return nextState;
        case RECEIVE_STEPS:
            action.steps.forEach((step) => {
                nextState[step.id] = step;
            })
            return nextState;
        default: 
            return state;
    }
};

export default stepsReducer;