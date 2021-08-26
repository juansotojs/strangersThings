import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Login = (props) => {
  const username = props.username;
  const setUsername = props.setUsername;
  const password = props.password;
  const setPassword = props.setPassword;
  const setToken = props.setToken;
  const token = props.token;
    const existing = (props) => {
      fetch('https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/users/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        user: {
          username: username,
          password: password
      }
    })
  }).then(response => response.json())
    .then(result => {
     setToken(result.data.token);
   })
  .catch(console.error);
  }
    const register = (props) => {
      fetch('https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/users/register', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        user: {
          username: username,
          password: password
    }
  })
      }).then(response => response.json())
          .then(result => {
           console.log('register');
           if(result.success === true){
             setToken(result.data.token);
           } 
          })
            //.catch(console.error);
            //console.log(results);
    }
    return <> 
    <BrowserRouter>
    <h1 className='section'>Login/Register</h1>
    <div className="cardContainer">
        <div className="card">
        <div className="toggle">
        <Link to='/login/signin' className="opt">LOGIN</Link>
        <Link to='/login/register' className="opt">REGISTER</Link>
        </div>
        <div>
        <Route exact path="/login/register">
        <form className='field' onSubmit={ async (event) => {
            await event.preventDefault();
            await register();
            setUsername('');
            setPassword('');
            }}>
          <div className="usernameInput">
            <p>Username</p>
            <input type ="text" placeholder="Username" className="txtBox" value={username} onChange={(event) => setUsername(event.target.value)}></input>
          </div>
          <div className="passwordInput">
              <p>Password</p>
            <input type ="password" placeholder="Password" className="txtBox" value={password} onChange={(event) => setPassword(event.target.value)}></input>
          </div>
          <p className="youAgree">By submitting this form I agree to the terms and conditions.</p>
          <button type="submit" className="loginBttn">REGISTER</button>
          </form>
        </Route>
        <Route exact path="/login/signin">
        <form className='field' onSubmit={ async (event) => {
            await event.preventDefault();
            await existing();
            setUsername('');
            setPassword('');
            }}>
          <div className="usernameInput">
            <p>Username</p>
            <input type ="text" placeholder="Username" className="txtBox" value={username} onChange={(event) => setUsername(event.target.value)}></input>
          </div>
          <div className="passwordInput">
              <p>Password</p>
            <input type ="password" placeholder="Password" className="txtBox" value={password} onChange={(event) => setPassword(event.target.value)}></input>
          </div>
          <p className="youAgree">By submitting this form I agree to the terms and conditions.</p>
          <button type="submit" className="loginBttn">LOGIN</button>
          </form>
        </Route>
        </div>
          </div>
    </div>
      </BrowserRouter>
      </>
}

export default Login;