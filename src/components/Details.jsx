import React from 'react';
import dice from "../assets/images/icon-dice.svg";
function Details(props) {

  return (
    <React.Fragment>
      <p className="title">ADVICE #{props.number}</p>
      <q>{props.advice}</q>
      <hr />
      <div className="dice-container" >
        <img src={dice} alt="Dice Logo" />
      </div>
    </React.Fragment>
  )
}

export default Details;