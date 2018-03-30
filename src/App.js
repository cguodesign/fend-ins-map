import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'

class App extends Component {
  state = {
    cards: []
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="App-title">NYC Ramen Map</h1>
        </header>
        <div class="body">
          {/* TODO: add the google map here */}
          <div class="map-container"></div>
          <div class="card-container">
            <div class="card-container--inner">
              <Card cardInfo={this.state.cards} isSelected={false}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
