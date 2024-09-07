import React from 'react';

function Login() {
  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your Email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="passwd" placeholder="Enter your password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
