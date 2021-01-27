import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header'
import BackDrop from "./components/BackDrop";
import {Route} from "react-router-dom";
import Home from "./pages/home";
import Posts from "./pages/posts";
import {connect} from 'react-redux';
import './store/redux-store';


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
  constructor() {
    super();
    this.appRef = React.createRef()
  }
  render () {
    // const Routes=navbarItems.map(route=>{
    //   return (
    //   <Route path={route.path} component={route.component} exact={route.exact} />
    //   )
      
    // })
    const{navState:{isNav},toggleNavOpen}=this.props;
       return (
    <div className="App" ref={this.appRef}>
     <Navbar isNav={isNav}
          navbarItems={navbarItems}
     />
     <Header  isNav={isNav}   
              toggleNavOpen={toggleNavOpen}
     />
     
     
     <Route path="/" component={Home} exact={true} />
    
     <Route path="/posts" render={() => <Posts />} />

     {isNav && <BackDrop  toggleNavOpen={toggleNavOpen}/>}
    
    </div>
  );
  }

}
 
const mapStateToProps=(state)=>{
  return{
    navState:state.navState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNavOpen: () => dispatch({ type: 'toggleNavOpen' })
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;

