import React from 'react'
import Navbar from './common/navbar/Navbar';
import Home from './components/pages/Home';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Destinations from './components/destinations/Home';
import SinglePages from './singlePage/SinglePage';
import Blog from './components/blog/Blog';
import BlogSingle from './components/blog/blog-single-page/BlogSingle'
import Testimoial from './components/testimoial/Testimoial';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Register from './components/login/Register';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
     <Routes>
    
    <Route path='/' exact Component={Home}></Route>
    <Route path="/About" exact Component={About}></Route>
    <Route path='/gallery' exact Component={Gallery}></Route>
    <Route path='/destination' exact Component={Destinations}></Route>
    <Route path='/singlepage/:id' exact Component={SinglePages}></Route>
    <Route path='/blog' exact Component={Blog}></Route>
    <Route path='/blogsingle/:id' exact Component={BlogSingle}></Route>
    <Route path='/testimonail' exact Component={Testimoial}></Route>
    <Route path='/contact' exact Component={Contact}></Route>
    <Route path='/sign-in' exact Component={Login}></Route>
    <Route path='/register' exact Component={Register}></Route>
    

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App