import React from 'react';
import './Person.css';

    return (
    <div className="Person"> 
        <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
   
    )

export default person;
// this is stateless component