import React from 'react';

function Settings() {
  return (
    <div className='settings-container'>
      <h2>Settings</h2>
      <form>
        <div>
          <label htmlFor="email">Change Email</label>
          <input type="email" name="email" placeholder="Update your Email" />
        </div>
        <div>
          <label htmlFor="password">Change Password</label>
          <input type="password" name="passwd" placeholder="Update your password" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Settings;
