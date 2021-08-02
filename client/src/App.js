import React, {Component} from 'react'
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    );
  }


}

export default App;