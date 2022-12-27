import React from "react";

function Parent(props){
const number=100
  return (
    <div>
    <h1>child coponent</h1>
    <button onClick={()=>{props.event(number)}}>click to access</button>
    </div>
  )
}
export default Parent