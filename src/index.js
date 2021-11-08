import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Posts from './components/posts';
import Home from './components/home';
import Profile from './components/profile';
import Login from './components/login';
import Messages from './components/messages';
import MessageList from './components/messageList';


const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [comment, setComment] = useState('');
  const [code, setCode] = useState('');
  const [id, setId] = useState('');
  
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
        <Link to='/' className='aType'>Home</Link>
      </div>
      <div className='link'>
        <Link to='/posts' className='aType'>Posts</Link>
      </div>
      <div className='link'>
        <Link to='/profile' className='aType'>Profile</Link>
      </div>
      <div className='link'>
        { token ? <a href="#"  onClick={(event) => {
        event.preventDefault();
        setToken('')}}>Logout</a> : <Link to='/login' className='lText'>Login</Link>}
      </div>
    </div>
    <div className='pro'>
      <h2 className='ad'>Sign up to create a post.</h2>
    </div>
  </div>
    <Route exact path="/posts"> 
      <Posts id={id} setId={setId} posts={posts} setPosts={setPosts} token={token} code={code} setCode={setCode} />
    </Route>
    <Route exact path="/">
      <Home token={token}/>
    </Route>
    <Route exact path="/profile">
      <Profile/>
    </Route>
    <Route exact path="/login">
      <Login setPassword={setPassword} password={password} setUsername={setUsername} username={username} setToken={setToken} token={token}/>
    </Route>
    <Route exact path="/messages">
          <Messages token={token} setComment={setComment} comment={comment} code={code} setCode={setCode} />
    </Route>
    <Route exact path="/list_of_messages">
       <MessageList id={id} setId={setId} posts={posts} setPosts={setPosts} />
    </Route>
  </div>
  </BrowserRouter>
  
  </>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
