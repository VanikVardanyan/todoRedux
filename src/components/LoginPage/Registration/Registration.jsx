import React,{ useState} from 'react';
import { NavLink,} from 'react-router-dom';

import { addUser, addToken } from '../../../util';

import './style.scss';

const Registration = (props) => {
  const [name,setName] = useState('');
  const [lastname,setLastname] = useState('');
  const [age,setAge] = useState(0);
  const [login,setLogin] = useState('');
  const [pas,setPas] = useState('');
  const [confPas,setConfPas] = useState('');

  const handleChangeName = e => {
    const {value} = e.target;
    setName(value);
  };

  const handleChangeLastname = e => {
    const {value} = e.target;
    setLastname(value);
  };

  const handleChangeAge = e => {
    const {value} = e.target;
    setAge(value);
  };

  const handleChangeLogin = e => {
    const {value} = e.target;
    setLogin(value);
  };

  const handleChangePas = e => {
    const {value} = e.target;
    setPas(value);
  };

  const handleChangeConfPas = e => {
    const {value} = e.target;
    setConfPas(value);
  };

  const handleClick = event => {
    event.preventDefault();

    if(name.length === 0) {
      alert("your name");
    } else if (lastname.length === 0) {
      alert("lastname");
    } else if (!isFinite(age) || +age > 100 || +age < 0) {
      alert('what is a age?');
    } else if (login.length === 0) {
      alert('your login');
    } else if (pas !== confPas) {
      alert('confpassword notready ');
    } else {
      let newUser = {
        name,
        lastname,
        age,
        login,
        pas
      };
      addUser(newUser);
      addToken(login);
      props.history.push('/')
    };
  };

  return(
    <form onSubmit={handleClick} className="registration_section">
      <div className="reg">
        <div >
          <h2>Your name</h2>
          <input type="text" 
            placeholder="Your name" 
            className="registration_section-input"
            onChange={handleChangeName}
          value={name}
          />
          <h2>Your Lastname</h2>
          <input type="text" 
            placeholder="Your Lastname" 
            className="registration_section-input worning"
            onChange={handleChangeLastname}
            value={lastname}
          />
          <h2>Age</h2>
          <input type="text" 
            placeholder="Age" 
            className="registration_section-input"
            onChange={handleChangeAge}
            value={age}
          />
        </div>
        <div>
          <h2>Login</h2>
          <input type="text" 
            placeholder="Login" 
            className="registration_section-input"
            onChange={handleChangeLogin}
            value={login}
          />
          <h2>Create a password</h2>
          <input type="text" 
            placeholder="Password" 
            className="registration_section-input"
            onChange={handleChangePas}
            value={pas}
          />
          <h2>Confirm password</h2>
          <input type="text" 
            placeholder="Password" 
            className="registration_section-input"
            onChange={handleChangeConfPas}
            value={confPas}
          />
        </div>
      </div>
      <div>
        <button 
          to= '/'
          className="registration_section-button-link"
          type="submit"
        >Sign Up</button>
      </div>
      <div className="login-link">
        <NavLink to='/login' >You have account?</NavLink>  
      </div>
    </form>
  );
};

export default Registration;
