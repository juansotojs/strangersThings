import React, { useEffect, useState } from 'react';

const Home = (props) => {
    const token = props.token;
    return <>
    <h1 className='section'>Home</h1>
    <div className="cardContainer">
        <div className="card">
            <h1>Welcome to Strangers Things!</h1> 
            <p>Please login or register.</p>
            <button type="submit" onClick={()=>{
            console.log(token);
          }}>token</button>
        </div>
    </div>
      </>
}

export default Home;