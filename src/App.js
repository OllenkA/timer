import React from 'react';
import './App.css';
import StopWatch from './StopWatch';
import Particles from 'react-particles-js';

const particlesOpt = {
  particles: {
      number: {
          value: 150,
          denisty: {
              enable: true,
              value_area: 1000
          }
      }
  }
};

function App() {
  return (
    <div className="App">
      <Particles className='particles' params={particlesOpt}/>
      <StopWatch />      
    </div>
  );
}

export default App;

