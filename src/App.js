import './App.css';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Header from "./component/Header.js"
import Home from "./component/Home.js"
import Request from "./component/Request.js"
import Chat from "./component/Chat.js"
import Login from "./component/Login.js"
import Footer from "./component/Footer.js"
import Register from "./component/Register.js"

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/chat" element={<Chat/>}/>
          <Route exact path="/request" element={<Request/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
