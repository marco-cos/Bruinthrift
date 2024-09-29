
import './App.css';
import Feed from './components/Feed';
import HomePage from './components/HomePage';
import CreatePost from './components/CreatePost';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//    <img src="" alt="React Image" />



function App() {
  return (
    <Router>
      <div id="navigation">
          <div>
           <Link id = "links" to="/">
           <h1 id="navname">Bruin Thrift</h1>
           </Link>
            <img id="logo" src="https://altusimpact.com/wp-content/uploads/2020/05/white-leaf.png"/>
          </div>
          <div>
            <Link id = "links" to="/">Home</Link>{"    |    "}
            <Link id = "links" to="/feed">Feed</Link>{"    |    "}
            <Link id="links" to ="/writepost">Create a Post</Link>
          </div>
      </div>
      <div id="content">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/writepost" element={<CreatePost/>}/>
        </Routes>
        
      </div>
    </Router>

  );
}

export default App;
