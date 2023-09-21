import ironman from '../../images/register-ironman.jpg';
import joker from '../../images/login-joker.jpg';
import { useState } from 'react';

export const LoginRegister = () => {
  const [loginValues, setloginValues] = useState({
    username: '',
    password: '',
  });
  const [registerValues, setRegisterValues] = useState({
    username: '',
    password: '',
    rePassword: '',
  });

  const onLoginChange = (e) => {
    setloginValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();

    console.log(loginValues);
  };

  const onRegisterChange = (e) => {
    setRegisterValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onRegisterSubmit = (e) => {
    e.preventDefault();

    console.log(registerValues);
  };

  return (
    <div className="container">
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front">
          <img className="rtl" src={joker} alt=""></img>
          <div className="text">
            {/* <span className="text-1">
              SOME TEXT HERE
            </span> */}
            <span className="text-2 rtl" style={{ color: '#dfdfdf' }}>
              "It's not about money...it's about sending a message!"
            </span>
          </div>
        </div>
        <div className="back">
          <img src={ironman} alt=""></img>
          <div className="text">
            {/* <span className="text-1">
             SOME TEXT HERE
            </span> */}
            <span className="text-2" style={{ color: 'white' }}>
              “The Avengers. That's what we call ourselves; we're sort of like a team. 'Earth's Mightiest Heroes'-type thing.”
            </span>
          </div>
        </div>
      </div>
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
            <form onSubmit={onLoginSubmit}>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input
                    onChange={onLoginChange}
                    value={loginValues.username}
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input
                    onChange={onLoginChange}
                    value={loginValues.password}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="warning">Something went wrong!</div>
                <div className="button input-box">
                  <input type="submit" value="Submit" />
                </div>
                <div className="text sign-up-text">
                  Don't have an account? <label htmlFor="flip">Register</label>
                </div>
              </div>
            </form>
          </div>
          <div className="signup-form">
            <div className="title">Register</div>
            <form onSubmit={onRegisterSubmit}>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input
                    onChange={onRegisterChange}
                    value={registerValues.username}
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input
                    onChange={onRegisterChange}
                    value={registerValues.password}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input
                    onChange={onRegisterChange}
                    value={registerValues.rePassword}
                    type="password"
                    name="rePassword"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                <div className="warning">Something went wrong!</div>
                <div className="button input-box">
                  <input type="submit" value="Submit" />
                </div>
                <div className="text sign-up-text">
                  Already have an account? <label htmlFor="flip">Login</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
