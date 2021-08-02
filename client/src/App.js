import React, {Component} from 'react'
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Footer />
        <Landing />
      </div>
    );
  }


}

export default App;