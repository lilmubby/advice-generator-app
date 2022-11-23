import React from 'react';
import dice from "../assets/images/icon-dice.svg";
function Details(props) {

  return (
    <React.Fragment>

      {props.click? 
      <p className="title">ADVICE #{props.number}</p>: 
      <p className="title">ADVICE #{props.number}</p>}
      <q>{props.advice}</q>
      <div className="ruler">
      </div>
      <div className="dice-container" onClick={props.clicked}>
        <img src={dice} alt="Dice Logo" />
      </div>
    </React.Fragment>
  )
}

export default Details;