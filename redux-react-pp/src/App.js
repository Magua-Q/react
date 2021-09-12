import React from 'react'
import { connect } from "react-redux"
import { addAction, squareAction } from './store/actions';

function App(props){
    const { number, add, square}  = props
    return (
      <div className="App">
          <p>{ number }</p>
          <button onClick={() => add(1)}>+ one </button>
          <button onClick={() => add(2)}>+ two </button>
          <button onClick={() => square()}>SQUARE</button>
      </div>
    );
  }
  
const mapStateToProps = (state) => {
    return {
        number: state
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        add: (value) => dispatch(addAction(value)),
        square: () => dispatch(squareAction())
    }
}
export default connect(mapStateToProps, mapDispathToProps)(App);
