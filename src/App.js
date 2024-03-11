import React, { Component } from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Submit from './components/Submit';

import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import Subpost from './components/Subpost';


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      cname:null,
      cphone:null,
      cmail:null,
      cmessage:null,
      isSubmit:false       
    }
  }
  
  contactHandler=(event)=>{
    let cn=event.target.cname.value;
    let ce=event.target.cmail.value;
    let cp=event.target.cphone.value;
    let cm=event.target.cmessage.value;
    
    this.setState({cname:cn, cmail:ce, cphone:cp, cmessage:cm, isSubmit:true}, ()=>{alert(this.state.cname)})
      event.preventDefault()
  }
  
  render() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <><Nav />
        <Header /><Main /><Footer /></>,
      },
      {
        path: '/about',
        element: <><Nav/>
        <Header /><About /><Footer /></>,
      },
      {
        path: '/post',
        element: <><Nav />
        <Header /><Post /><Footer /></>,
        children: [
          {
          path: "posts/:postId",
          element: <Subpost />,
          }],
      },
      {
        path: '/contact',
        element: <><Nav/>
        <Header />{this.state.isSubmit?<Submit cn={this.state.cname} ce={this.state.cmail} cp={this.state.cphone} cm={this.state.cmessage}/>:<Contact submit={this.contactHandler}/>}<Footer /></>,
      }
    ]);
    
    return (
      
      <React.Fragment>
        {/* <BrowserRouter>
        
        <Nav/>
        <Header/>
        <Routes>

        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/post' element={<Post/>}/>       
        
        </Routes>
        <Footer/>

        </BrowserRouter> */}
        <RouterProvider router={router} />

      </React.Fragment>
    )
  }
}
