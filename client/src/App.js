import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Response from './components/Response'
import Post from './components/Post'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/post" component={Post} />
            <Route exact path="/response" component={Response} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
