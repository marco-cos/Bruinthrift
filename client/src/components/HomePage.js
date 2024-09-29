import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function HomePage(){
    /*
    <div className="container">

            <img src={backgroundimage} alt="background" style="width:100%;">
            <div class="centered">Centered</div>
            </img>
    </div>
    */
    return(
        
        <div>
            <div id="background"/>
            <div id="body">
                <h2>What is Bruin Thrift?</h2>
                <p> Bruin Thrift aims to connect UCLA students seeking to sell/give away their clothing, furniture, or other belongings. By promoting second-hand selling and buying, BruinThrift aims to promote sustainability by keeping clothes and furniture out of landfills as well as providing cost effective options for college students. </p>
                <Link to="/feed">
                   <button className="button-3" role="button" onClick="">Go to Feed</button>
                </Link>
            </div>
        </div>
    );
    
}

export default HomePage;