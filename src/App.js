import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="predict">
        <p>Россия <b><GetRandom min="0" max="5" /> : <GetRandom min="0" max="5" /></b> Словакия</p>
      </div>
    );
  }
}

function GetRandom(props) {
  return Math.floor(Math.random() * (Number(props.max) - Number(props.min) + 1)) + Number(props.min);
 }
  
export default App;
