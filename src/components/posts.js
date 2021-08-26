import React, { useEffect, useState } from 'react';

const Posts = (props) => {
    const posts = props.posts;
    const setPosts = props.setPosts;
    async function getPosts() {
        const request = await fetch('https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/posts');
        const response = await request.json();
        setPosts(response.data.posts);
    }
    useEffect(() => getPosts(), []);
    
    return <>
    <div className='posts'>
      <div className='status'>
        <h1>Posts</h1>
        <input type='text'></input>
      </div>
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
          </div>
        </div>
      )}
    </div>
    </div></>
}

export default Posts;