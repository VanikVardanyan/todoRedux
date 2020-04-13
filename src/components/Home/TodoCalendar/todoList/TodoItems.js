import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../../../store/action/item';

const TodoItems = ({ title, about, id }) => {
  const [active,setActive] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setActive(!active);
  };

  const handleDeleted = e => {
    const {id}=e.target.dataset;
    dispatch(removeTask(id))
  }

  return (
    <li className="todoItems">
      <div>
        <button className="showTask_btn" onClick={handleClick}>+</button> 
        {title}
      </div>
      <div>
        <button className="delet_btn" onClick={handleDeleted} data-id={id}>X</button>
      </div>
      <div className="vew_task" style={{display: active ? "block" : "none"}}>{about}</div>
    </li>
  );
};

export default TodoItems;
