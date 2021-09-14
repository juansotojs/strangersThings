import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


const MessageList = (props) => {
    const posts = props.posts
    const id = props.id;
        let post = posts[id];
        let messageArr = post.messages;

    return <>
    <div className="status">
    <h1>Messages</h1>
    </div>
    <div className="cards">
    <div className="card">
    {messageArr.map((message, idx) => 
        
          <div className='card-info'>
              <h2>{message.fromUser.username}</h2>
              <span></span>
              <h3>{message.content}</h3>
          
        </div>
      )}
    </div>
    </div>
      </>
}

export default MessageList;

