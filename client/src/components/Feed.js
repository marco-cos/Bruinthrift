import React from 'react';
import axios from 'axios';

import {useState, useEffect} from 'react';
import {format} from 'date-fns';



function Feed(){
    let [ furnPosts, setFurnPosts ] = useState([]);
    
    function obtainFeed() {
        axios.get("http://localhost:2000/getPosts")
        .then(response => {
            setFurnPosts(response.data);
        })
        .catch(console.error)
    }

    useEffect(() => {
        obtainFeed();
    }, []);

    return(
        <div id="feedbody">
        
          {furnPosts.map((furnPost, i) =>
          <div class="box">
            <div class="item" key={i}>  
              <h1> {furnPost.title} </h1>
              <h3>Username: {furnPost.user}</h3>
              <p>Contact Info: {furnPost.contact}</p>
              <p>Price: ${furnPost.price}</p>
              
              <p>{furnPost.body}</p>
              </div>
            </div>
          )}  
        </div>
    );
    
}

export default Feed;