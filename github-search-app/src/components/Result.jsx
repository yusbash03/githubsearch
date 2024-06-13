import React, { Component } from 'react';


const Result = ({avatar, name}) => {
    return ( 
    <>
         <h2>{name}</h2>
         {avatar && <img src={avatar} alt={name} />}
    </> 
    );
}
 
export default Result;