import React, { useState } from 'react';

export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function validateUser(value) {
    if(!/\S+@\S+\.\S+/.test(value)) {
      setError('el usuario tiene que ser un email');
    } else {
      setError('');
    }
    setUsername(value);
  }

  var handleSubmit = (e)=> {
    e.preventDefault();
    console.log('usuario controlado', username, password);
    setUsername('');
    setPassword('');
  }

  return (
      <form onSubmit={handleSubmit}>
        <input className={error && 'danger'}
          name="username" value={username} placeholder="username" onChange={(e) => validateUser(e.target.value)}/>
        {!error ? null : <span>{error}</span>}
        <input name="password" value={password} placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" disabled={!password || error? true: false} />
      </form>
    );
}