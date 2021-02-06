import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/Navbar';
import Header from './components/Header';
import BackDrop from './components/BackDrop';
import Posts from './pages/Posts';
import Home from './pages/Home';
import './store/redux-store';
// import Hook from './test/Hook';
//Action Creators
import { toggleOpenNavAC } from './store/actionCreators';

// //Data Json
// import Data from './data/data.json';

//images
// import spinner from './assets/images/spinner.gif';
// console.log('spinner' ,spinner);
const navbarItems = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true
  },
  {
    title: 'Posts',
    path: '/posts',
    component: Posts
  }

]

class App extends React.Component {

  constructor() {
    super();
    this.appRef = React.createRef();
    this.state = {
      isHookComponent: true
    }

  }
  toggleIsHookComponent = () => {
    this.setState({
      isHookComponent: !this.state.isHookComponent
    })
  }
  // componentDidMount() {
  //   //const $node = document.querySelector('.box');
  //   //async actions
  // }
  render() {

    // const images = { ...Data.images }

    // const Routes = navbarItems.map(route => {
    //   return (
    //     <Route path={route.path} component={route.component} exact={route.exact} />
    //   )
    // })

    const { navState: { isNav }, toggleOpenNav } = this.props;
    return (
      <div className="App" ref={this.appRef}>
        {/* <div>
          <img src={images[0].img} />
          <img src={images[1].img} />
        </div> */}

        <Header
          isNav={isNav}
          toggleOpenNav={toggleOpenNav}
        />
        <Navbar
          isNav={isNav}
          navbarItems={navbarItems}
        />

        <Route path="/" component={Home} exact={true} />
        <Route path="/posts" render={() => <Posts />} />

        {isNav && <BackDrop toggleOpenNav={toggleOpenNav} />}


        {/* {this.state.isHookComponent && <Hook />}

        <div>
          <button onClick={this.toggleIsHookComponent}>Toggle Show Hook Component</button>
        </div> */}


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navState: state.navState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleOpenNav: () => dispatch(toggleOpenNavAC())
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
