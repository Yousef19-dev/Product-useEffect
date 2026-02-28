import React, { useEffect, useState } from 'react';

export default function Login() {
  const [token, setToken] = useState('');
  function auth() {
    const user = { username: 'mor_2314', password: '83r5^_' };
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        localStorage.setItem('myToken', data.token);
        alert('The Token is saved');
      });
  }

  return (
    <div>
      <p>your Token is {token}</p>
      <button className="btn btn-primary" onClick={auth}>
        Login
      </button>
    </div>
  );
}
