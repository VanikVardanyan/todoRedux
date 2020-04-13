import {nanoid} from 'nanoid';

import { ADD_TASK, REMOVE_TASK } from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type){
    case  ADD_TASK:
      let newTask = {
        title: action.title,
        about: action.about,
        id: nanoid(),
        userLogin: action.login,
        date: action.date
      };
      return [...state, newTask];
    case REMOVE_TASK: 
    let newTasks = state.filter(task => action.id !== task.id)
    return [...newTasks]
    default: return state ;
  };
};
