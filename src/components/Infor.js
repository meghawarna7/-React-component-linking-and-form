import React from 'react'
import "../W.css"


export default function Infor() {
  return (
    <div className='megha'>
       <h1> Infor </h1>
       <form>
      <label>Enter your name:
        <input type="text" /><br></br>
      </label>
      <label>Enter your age:
        <input type="text" /><br></br>
      </label>
      <label>Enter your contry:
        <input type="text" /><br></br>
      </label>
      <label>Enter your contact Number:
        <input type="text" /><br></br>
      </label>
      <br></br><br></br><br></br>
      <button className='mj'onClick={sayHello}>submit</button>
      <br></br>
      
    </form>
       <br></br>
        </div>
  )
  function sayHello() {
    alert('submitted!');
  }
};




