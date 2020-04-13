import React, { useState } from 'react';
import moment from 'moment';
import Calendar from 'react-calendar';

import Todo from './todoList/Todo';

import 'react-calendar/dist/Calendar.css';
 
const TodoCalendar = ({ aboutUser }) => {
  const [date, setDate] = useState(new Date());
 
  const onChange = date => setDate(date);

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={date}
        className="calendar"
      />
      <div>
        <Todo aboutUser={aboutUser} dateTask = {moment(date).format('DD-MM-YYYY')} />
      </div>
    </div>
  )
};

export default TodoCalendar;
