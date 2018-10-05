import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header';
import router from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='Header'>
          <Header/>
        </div>
        <div className='Dashboard'>
          {router}
      
        </div>


      </div>
    );
  }
}

export default App;
