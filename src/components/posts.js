import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AddPost from './addPost';

const Posts = (props) => {
    const posts = props.posts;
    const setPosts = props.setPosts;
    const token = props.token;
    async function getPosts() {
        const request = await fetch('https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/posts');
        const response = await request.json();
        setPosts(response.data.posts);
    }
    useEffect(() => getPosts(), []);

    const handleDelete = async (id) => {
      fetch(`https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/posts/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
          }).then(response => response.json())
          .then(result => {
        console.log(result);
        })
        .catch(console.error);

         }
    
    return <>
    <BrowserRouter>
    <div className='posts'>
      <div className='status'>
        <h1>Posts</h1>
        <input type='text' placeholder='Search post'></input>
        { token ? 
        <div className='link'>
        <Link to='/posts/newpost' className='aType'>Add Post</Link>
      </div>
       : null}
      </div>

      <Route exact path="/posts">
      <div className="cards">
      {posts.map((post, idx) => 
        <div key={idx} className="card">
          <div className='card-info'>
          <h2>{post.title}</h2>
          <div className="info">
          <p className="descr">{post.description}</p>
          <div className="subInfo">
          <h3>Price: </h3><p className="infoVal">{post.price}</p></div>
          <div className="subInfo">
          <h3>Seller: </h3> <p className="infoVal">{post.author.username}</p></div>
          <div className="subInfo">
          <h3>Location: </h3> <p className="infoVal">{post.location}</p></div>
          </div>
          <button className='messageBttn'>SEND MESSAGE</button>
          { token ? <button className='messageBttn' onClick={() => handleDelete(idx)}>DELETE</button> : null}
          </div>
        </div>
      )}
    </div>
    </Route>
    
    
    <Route exact path="/posts/newpost">
    <div className="cards">
      <AddPost token={token}/>
    </div>
    </Route>
    </div>
    </BrowserRouter>
    </>
}

export default Posts;