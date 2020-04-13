import { ADD_TASK, REMOVE_TASK } from "../actionTypes";

export const addTask = (title,about,login,date) => ({
  type: ADD_TASK,
 title,
 about,
 login,
 date
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
}); 
