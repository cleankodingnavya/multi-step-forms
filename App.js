
import React, { Component } from 'react';
import './App.css';
import UserForms from './components/UserForms';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <UserForms/>
      
      </div>
     );
  }
}
 
export default App;