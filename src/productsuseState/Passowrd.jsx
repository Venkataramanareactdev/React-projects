import React, { useState } from 'react';

function ShowPassword({ label }) {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <div>
      <label>{label}</label><br />
      <input
        type={show ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={show}
          onChange={() => setShow(!show)}
        />
        Show Password
      </label>
    </div>
  );
}

export default ShowPassword;
