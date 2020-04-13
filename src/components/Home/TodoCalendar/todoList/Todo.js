import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { getListItems } from '../../../../store/selectors/index'
import TodoItems from './TodoItems';

import './style.scss'
import { addTask } from '../../../../store/action/item';

const Todo = ({ aboutUser, dateTask }) => {
  const [active,setActive] = useState(false);
  const [taskName,setTaskName] = useState();
  const [taskAbout,setTaskAbout] = useState();

  const tasks = useSelector(getListItems(aboutUser.login, dateTask));
  const dispatch = useDispatch();
  const handleClick = () => {
    setActive(!active);
  };

  const handleSubmite = e => {
    e.preventDefault();
    if(taskName && taskAbout){
    dispatch(addTask(taskName,taskAbout,aboutUser.login,dateTask))
    setTaskName('');
    setTaskAbout(''); 
    setActive(false);
  } else {
    alert('not task')
  }
  };

  const handleChangeTaskName = e => {
    const {value} = e.target;
    setTaskName(value);
  };

  const handleChangeAboutTask = e => {
    const {value} = e.target;
    setTaskAbout(value);
  };

  return (
    <div className="todo_section">
      <div >
        <form 
          className="todo_section-form"
          onSubmit={handleSubmite}
        >
          <input  
            className="todo_section-form-input" 
            placeholder="task name"
            onChange={handleChangeTaskName}
            value={taskName}
          />
          <button 
              type="button" 
              onClick={handleClick}
          >about</button>

          <button 
            type="submit" 
            className="todo_section-form-btn"
          >add task</button>  
          <div className="about_task-section">
            <textarea 
              placeholder="about task"
              className="about_task" 
              style={{display: active ? "block" : "none"}}
              onChange={handleChangeAboutTask}
              value={taskAbout}
            />
          </div> 
        </form>
      </div>
      <ul className= "todoList">
        {tasks.map(task=> (<TodoItems key={task.id}  id={task.id} title={task.title} about={task.about} />))}
      </ul>
    </div>
  );
};

export default Todo;
