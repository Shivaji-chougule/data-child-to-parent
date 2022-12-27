import React from "react";
import Child from './Child'
function Parent(){
  function handle(number){
    console.log("paarent data event is fired")
    // so we are getting data here from child 
    console.log(number*2)
  }
  return (
    <div>
    <h1>parent componet</h1>
    <Child event={handle}/>
    </div>
  )
}
export default Parent