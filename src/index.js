import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Posts from './components/posts';
import Home from './components/home';
import Profile from './components/profile';
import Login from './components/login';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return <>
  <BrowserRouter>
  <div className='container'>
  <div className='dashboard'>
    <div className='user'>
    <h3>User Name</h3>
    <p>Pro Member</p>
    </div>
    <div className='links'>
      <div className='link'>
        <Link to='/home' className='aType'>HOME</Link>
      </div>
      <div className='link'>
        <Link to='/posts' className='aType'>POSTS</Link>
      </div>
      <div className='link'>
        <Link to='/profile' className='aType'>PROFILE</Link>
      </div>
      <div className='link'>
        { token ? <a href="#"  onClick={(event) => {
        event.preventDefault();
        setToken('')}}>LOGOUT</a> : <Link to='/login' className='lText'>LOGIN</Link>}
      </div>
    </div>
    <div className='pro'>
      <h2>Sign up to create a post.</h2>
    </div>
  </div>
    <Route exact path="/posts">
      <Posts posts={posts} setPosts={setPosts}/>
    </Route>
    <Route exact path="/home">
      <Home token={token}/>
    </Route>
    <Route exact path="/profile">
      <Profile/>
    </Route>
    <Route exact path="/login">
      <Login setPassword={setPassword} password={password} setUsername={setUsername} username={username} setToken={setToken} token={token}/>
    </Route>
  </div>
  </BrowserRouter>
  
  </>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
