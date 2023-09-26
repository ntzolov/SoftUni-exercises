import ironman from '../../images/register-ironman.jpg';
import joker from '../../images/login-joker.jpg';
import { useContext, useState } from 'react';
import { login, register } from '../../services/authServices';
import { useNavigate } from 'react-router-dom';
import { globalContext } from '../../contexts/globalContext';

export const LoginRegister = () => {
  const { setUser } = useContext(globalContext);
  const [loginValues, setloginValues] = useState({
    username: '',
    password: '',
  });
  const [registerValues, setRegisterValues] = useState({
    username: '',
    password: '',
    rePassword: '',
  });
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');
  const navigate = useNavigate();

  const onLoginChange = (e) => {
    setloginValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await login(loginValues);
      setUser(user);

      navigate('/');
    } catch (error) {
      setLoginError(error.message);
    }
  };

  const onRegisterChange = (e) => {
    setRegisterValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await register(registerValues);
      setUser(user);

      navigate('/');
    } catch (error) {
      setRegisterError(error.message);
    }
  };

  return (
    <div className="container-auth">
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front">
          <img className="rtl" src={ironman} alt=""></img>
          <div className="text">
            {/* <span className="text-1">
              SOME TEXT HERE
            </span> */}
            <span className="text-2 rtl" style={{ color: 'rgb(213, 213, 213)' }}>
              “The Avengers. That's what we call ourselves; we're sort of like a team. 'Earth's Mightiest Heroes'-type thing.”
            </span>
          </div>
        </div>
        <div className="back">
          <img src={joker} alt=""></img>
          <div className="text">
            {/* <span className="text-1">
             SOME TEXT HERE
            </span> */}
            <span className="text-2" style={{ color: 'rgb(213, 213, 213)' }}>
              "It's not about money...it's about sending a message!"
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
                  <i className="fa-solid fa-user-large"></i>
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
                {loginError && <div className="warning">{loginError}</div>}

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
                  <i className="fa-solid fa-user-large"></i>
                  <input
                    onChange={onRegisterChange}
                    value={registerValues.username}
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="input-box">
                  <i className="fa-solid fa-lock"></i>
                  <input
                    onChange={onRegisterChange}
                    value={registerValues.password}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="input-box">
                  <i className="fa-solid fa-repeat"></i>
                  <input
                    onChange={onRegisterChange}
                    value={registerValues.rePassword}
                    type="password"
                    name="rePassword"
                    placeholder="Confirm your password"
                  />
                </div>
                {registerError && <div className="warning">{registerError}</div>}

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
