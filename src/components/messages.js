

import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


const Messages = (props) => {
    const token = props.token;
    const setComment = props.setComment;
    const comment = props.comment;
    const code = props.code;
    let history = useHistory();
    
    const handleMessage = async (id) => {
        fetch(`https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/posts/${id}/messages`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
           },
          body: JSON.stringify({
          message: {
            content: `${comment}`
          }
      })
        }).then(response => response.json())
        .then(result => {
         console.log(result);
        })
        .then(setComment(''))
        .then(history.push("/posts"))
      }

    return <>
    <div className="cards">
        <div className="card">
            <div className='card-info'>
                <input type='text' placeholder="Message" value={comment} onChange={(event) => setComment(event.target.value)}></input>
                <button className="messageBttn" onClick={() => handleMessage(code)}>SEND</button>
            </div>
         </div>
    </div>
      </>
}

export default Messages;