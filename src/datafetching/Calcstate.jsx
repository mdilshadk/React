import React, { useState } from 'react';
import './calc.css';

const Calcstate = () => {
  const [num, setnum] = useState(''); 
  const [result, setresult] = useState('');

  const click = (value) => {
    setnum(num + value); 
  };
  const calculate=()=>{
    setresult(eval(num))
  }
  const clear=()=>{
    setresult('')
  }

  console.log(num);  

  return (
    <div>
      <div className="back p-3 rounded-5 shadow-lg">
        <table>
          <tr>
            <td colSpan={3}>
              <input type="text" value={num} className="text-dark border border-0 text-end" readOnly />
              <div className='text-dark text-end fs-4' >{result}</div>
            </td>
            <td><button className="bg-warning " onClick={clear}>C</button></td>
          </tr>
          <tr>
            <td><button onClick={() => click("1")}>1</button></td>
            <td><button onClick={() => click("2")}>2</button></td>
            <td><button onClick={() => click("3")}>3</button></td>
            <td><button className="bg-warning" onClick={() => click("*")}>x</button></td>
          </tr>
          <tr>
            <td><button onClick={() => click("4")}>4</button></td>
            <td><button onClick={() => click("5")}>5</button></td>
            <td><button onClick={() => click("6")}>6</button></td>
            <td><button className="bg-warning" onClick={() => click("/")}>/</button></td>
          </tr>
          <tr>
            <td><button onClick={() => click("7")}>7</button></td>
            <td><button onClick={() => click("8")}>8</button></td>
            <td><button onClick={() => click("9")}>9</button></td>
            <td><button className="bg-warning" onClick={() => click("+")}>+</button></td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button className="w-100 bg-warning" onClick={calculate}>=</button>
            </td>
            <td><button onClick={() => click("0")}>0</button></td>
            <td><button className="bg-warning" onClick={() => click("-")}>-</button></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Calcstate;
