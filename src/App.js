import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header'
import BackDrop from "./components/BackDrop";
import {dispatch} from './store/store'
import {Route} from "react-router-dom";
import Home from "./pages/home";
import Posts from "./pages/posts";
import Modal from "./components/modal";

const navbarItems=[
  {
    title:'Home',
    path:'/',
    component:Home,
    exact:true
  },
  {
    title:'Posts',
    path:'/posts',
    component:Posts
  }
]

class App extends React.Component{
 
  render () {
    // const Routes=navbarItems.map(route=>{
    //   return (
    //   <Route path={route.path} component={route.component} exact={route.exact} />
    //   )
      
    // })
    const {isNav}=this.props.state.navbar;
    const {posts}=this.props.state.postsPage;
    const {isModalOpen}=this.props.state.modal;
       return (
    <div className="App">
     <Navbar isNav={isNav}
          navbarItems={navbarItems}
     />
     <Header  isNav={isNav}   />
     {isModalOpen &&  <Modal />}
     
     <Route path="/" component={Home} exact="true" />
     <Route path="/posts" render={()=><Posts posts={posts} />} />

     {isNav && <BackDrop  />}
    
    </div>
  );
  }

}
 


export default App;
