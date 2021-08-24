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
  <div id='navbar'>
    <Link to='/home' className='lText'>HOME</Link>
    <Link to='/posts' className='lText'>POSTS</Link>
    <Link to='/profile' className='lText'>PROFILE</Link>
    { token ? <a href="#" className='lText' onClick={(event) => {
      event.preventDefault();
      setToken('')}}>LOGOUT</a> : <Link to='/login' className='lText'>LOGIN</Link>}
  </div>

  <div className='mainSection'>
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
  </div>
  </BrowserRouter>
  
  </>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
