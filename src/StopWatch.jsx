import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { runTC, finishTC, pauseTC, startIsTC } from './redux/reducer';

function StopWatch(props) {
  
  return (
    <div className='stopWatch'>
      <h1>Counter</h1>
      <div className='watch'>{props.hours} : {props.minutes} : {props.seconds}</div>
      <br/>
      <button className='but' onClick={props.status === 'START'? props.start : props.stop}>
      {props.status}</button>
      <button className='but' disabled={props.status === 'START'} onClick={props.statusPause === 'PAUSE'? props.pause : props.startIs}>
      {props.statusPause}</button>  
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    hours: state.hours,
    minutes: state.minutes,
    seconds: state.seconds,
    status: state.status,
    statusPause: state.statusPause
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    stop: () => {
        dispatch(finishTC());
    },
    start: () => {
      dispatch(runTC())
    },
    pause: () => {
      dispatch(pauseTC())
    },
    startIs: () => {
      dispatch(startIsTC())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StopWatch);