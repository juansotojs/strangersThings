import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const AddPost = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const setPosts = props.setPosts;
    const token = props.token;
    let history = useHistory();

    async function getPosts() {
        fetch('https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/posts', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        }).then(response => response.json())
          .then(result => {
            setPosts(result.data.posts);
          })
          .catch(console.error);
  
          //const request = await fetch('https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/posts');
          //const response = await request.json();
          //setPosts(response.data.posts);
      }

    return <>
        <div className="card">
            <div className='newPost'>
                <form onSubmit={ async (event) => {
                    await event.preventDefault();
                    fetch('https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/posts', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            post: {
                                title: title,
                                description: description,
                                price: price,
                                willDeliver: true
    }
  })
}).then(response => response.json())
  .then(result => {
    getPosts();
  })
  .catch(console.error);

  history.push("/posts");          
            }}>
                    <input type='text' placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}></input>
                    <input type='text' placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)}></input>
                    <input type='text' placeholder="Price" value={price} onChange={(event) => setPrice(event.target.value)}></input>
                    <input type='text' placeholder="Location" value={location} onChange={(event) => setLocation(event.target.value)}></input>
                    <button className="messageBttn">Add Post</button>
                    
                </form>
            </div>
        </div>
      </>
}

export default AddPost;