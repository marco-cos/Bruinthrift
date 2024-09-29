import React from 'react';
import axios from 'axios';
import { MDBInput, MDBFile,  MDBTextArea } from 'mdb-react-ui-kit';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function CreatePost(){
    const [postData, setPostData] = useState({   
      body:"",
      user:"", 
      title:"",
      price:"",
      contact:""
    });


    function handlePostChange(event){
        const {name, value} = event.target;
    
    setPostData(prevData=> ({

      ...prevData,
      [name]: value,
            
      }));
    //   console.log(postData);
    }

    async function handleSubmit (event) {
        // console.log("Starting submission...")
        // console.log(postData.user)
        // console.log(postData.body)
        // console.log(fileName)
        event.preventDefault();
        
        
        const newPost={
            user: postData.user,
            body: postData.body,
            timestamp: Date.now(),
            title: postData.title,
            contact:postData.contact,
            price:postData.price,
        };
        
        const input ={
            headers: {'Content-Type': 'application/json'},
            body: newPost,
        };
        const response =  await axios.post('http://localhost:2000/createPost', newPost);
        const data = response;
        console.log(data);
    };

    const MakePostText = ['Make your post by filling in your user name, contact info, title, price, and a caption: ', <br />, <br />];
return(
    <div id ="postbody">
        <h1>Create a post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <label>{MakePostText}</label>
          <label> Name:</label>
          <MDBInput onChange={handlePostChange} name="user" id='typeText' type='text'/> 
          <label>Contact Info:</label>
          <MDBInput onChange={handlePostChange} name="contact" class='smalltextbox' id='typeText' type='text'/>
          <label>Title:</label>
          <MDBInput onChange={handlePostChange} name="title" class='smalltextbox' id='typeText' type='text'/>
          <label>Price ($) </label>
          <MDBInput onChange={handlePostChange} name="price" class='smalltextbox' id='typeText' type='number'/>
          <label>Caption:</label>
          <MDBTextArea onChange={handlePostChange} name="body" class='smalltextbox' id='textAreaExample' rows={4} />
          <br></br>
        </label>
        <br></br><br></br>
        
            <div id="postbutton"onClick={ () => handleSubmit()}>
    
            <input className="button-3" type="submit"/>
            
        </div>
      </form>
    </div>
    );

}

export default CreatePost;