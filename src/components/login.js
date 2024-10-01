import React from 'react';
import '../styles/login.css'; // Aquí asumes que tu CSS del login estará en styles/Login.css

function Login() {
  return (
    <section className="register-account">
      <div className="signform">
        <div className="left">
          <a href="#" className="bts-a" style={{ float: 'right', marginRight: '35px', fontSize: '0.9em' }}>
            Don't have an account? Sign up!
          </a>
          <div className="bts">
            <a href="#" className="fblogin social"><i className="fa fa-facebook"></i><span>Sign in with Facebook</span></a>
            <a href="#" className="twlogin social"><i className="fa fa-twitter"></i><span>Sign in with Twitter</span></a>
            <a href="#" className="gplogin social"><i className="fa fa-google-plus"></i><span>Sign in with Google</span></a>
          </div>
        </div>
        <div className="right">
          <div className="headit">
            <h4>Login To Your Account</h4>
          </div>
          <div className="form">
            <form className="login-form" id="login-form">
              <input type="text" placeholder="User Name" />
              <input type="password" placeholder="Password" />
              <input className="subbt" type="submit" value="Sign In" style={{ border: 'none' }} />
            </form>
            <input type="checkbox" id="remember" name="remember" />
            <span style={{ color: '#b6b6b6', fontSize: '0.9em' }}> Remember Me</span>
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
