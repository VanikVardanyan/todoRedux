export const getListItems = (login, dateTask) => state => state.list
  .filter(task => task.userLogin === login && task.date === dateTask);
