import React, { useState } from 'react'
import './Scard.css'
import { Link } from 'react-router-dom'
// import SandC from './SandC'
// const [item,setItem]=useState([]);
const myArr=[];

function Scard(props) {
  const [color,setColor]=useState('#FFFFFF');
  

  var value = props.heading;

  const handleClick=()=>{
    if(color==='#FFFFFF'){
     return setColor('#EDE7F6');
    }
    else{
      return setColor('#EDE7F6');
   }
    myArr.concat({value});
  };

 
  return (
    
    <div style={{backgroundColor:color}} onClick={()=>handleClick()}   className='card'>
      <img src={props.img} alt="" />
      <div className="ccontent">
      <h4>{props.heading}</h4>
      <p>{props.para}</p>

      </div>
      
    </div>

  )

  
}


export  {myArr,Scard}
