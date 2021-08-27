import React from 'react';

export const EggList = ({eggs}) => (
  <ul>  
  {eggs.map((name,key)=>
  <EasterEgg name={name} key={key}/>)}
  </ul>
)


export const EasterEgg = ({name, key}) => <li>{name}</li>