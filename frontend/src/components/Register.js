import React from 'react';

function Register() {
  return (
    <div className='register-container'>
      <h2>Register</h2>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="Enter your Username" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your Email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="passwd" placeholder="Enter your password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
