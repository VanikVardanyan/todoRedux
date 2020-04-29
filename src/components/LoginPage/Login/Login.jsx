import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';



import { addToken } from '../../../util';

const Login = (props) => {
  const [log,setLog] = useState('');
  const [pas,setPas] = useState('');

  const handleChangeLog = e => {
    const {value} = e.target;
    setLog(value);
  };

  const handleChangePas = e => {
    const {value} = e.target;
    setPas(value);
  };

  const handleClick = event => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem('users'));
    let person = users && users.find(user => user.login === log && user.pas === pas);
    if (person) addToken(log);
    return person ? props.history.push('/') : alert('not users');
  };

  return (
    <form onSubmit={handleClick} className="registration_section">
      <div>
        <h2>Login</h2>
        <input type="text"
          placeholder="Login"
          className="registration_section-input"
          onChange={handleChangeLog}
          value={log}
        />
      </div>
      <div>
        <h2>Password</h2>
        <input type="text"
          placeholder="Password"
          className="registration_section-input"
          onChange={handleChangePas}
          value={pas}
        />
      </div>
      <div>
        
        <Button 
          variant="contained"
          color="primary"
          className="registration_section-button"
          type="submit"
        >Sign in</Button>
      </div>
      <div>
        <NavLink to='/registration'>Don't have an account? Sign Up</NavLink>  
      </div>
    </form>
  );
};

export default Login;
