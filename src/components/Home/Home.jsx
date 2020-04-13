import React,{useState,useEffect} from 'react';

import './style.scss'
import TodoCalendar from './TodoCalendar/TodoCalendar';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../util';

const HomePage = (props) => {
  const [data,setData] = useState({});

  const test = () => props.history.push('/login');
  
  useEffect(() => {
    if(getUser()) {
      setData(getUser());
    } else {
        test();
    }
  }, []);

  const outClick = () => {
    localStorage.removeItem('token');
  };
  
  return (
    <div className="homePage_section">
      <div>
        <div>
          FirstName:
          <span> {data.name} </span>
        </div>
        <div>
          LastName:
          <span> {data.lastname} </span>
        </div>
        <div>
          Age:
          <span> {data.age} </span>
        </div>
      </div>
      <div className="calendar_section">
        <TodoCalendar aboutUser={data} />
      </div>
      <NavLink to='/login' onClick={outClick} > log out</NavLink>
    </div>
  );
};

export default HomePage;
