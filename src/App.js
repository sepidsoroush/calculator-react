import { useState } from 'react'; 
import './App.css';
import { X  ,Divide , Minus , Plus , Equal , Backspace} from 'tabler-icons-react';

function App() {

  // declare variables
  let currentNum = "0";
  let previousNum ="";
  let result = 0;
  const [current , setCurrent] = useState("0");

  function clearAll(){
    currentNum = "0";
    previousNum = "";
  }

  function deleteNum(){
    currentNum = previousNum.toString().slice(0,-1);
  }

  function appendNum(event){
    setCurrent(event.target.value);
    // console.log(Number(setCurrent));
    console.log(setCurrent);
  }
  function AddNums(event){
    currentNum = event.target.value;
    result =  Number(currentNum + previousNum);
  }

  return (
    <div className="App">
      <div className="container">
        <div id="display">
          <div className="display">{previousNum}</div>
          <div className="display">{current}</div>
          
          
        </div>
        <div className='buttons'>
          <div className="keypad">
            <div className='row'>
              <button id="clear" className='clear button w2' onClick={clearAll}>AC</button>
              <button id="delete" className='clear button w1' onClick={deleteNum}><Backspace /></button>
            </div>
            <div className='row'>
              <button value={7} id="seven" className='button w1' onClick={appendNum}>7</button>
              <button value={8} id="eight" className='button w1' onClick={appendNum}>8</button>  
              <button value={9} id="nine" className='button w1' onClick={appendNum}>9</button>
            </div>    
            <div className="row">
              <button value={4} id="four" className='button w1' onClick={appendNum}>4</button>
              <button value={5} id="five" className='button w1' onClick={appendNum}>5</button>
              <button value={6} id="six" className='button w1' onClick={appendNum}>6</button>
            </div>    
            <div className="row">
              <button value={1} id="one" className='button w1' onClick={appendNum}>1</button>
              <button value={2} id="two" className='button w1' onClick={appendNum}>2</button>
              <button value={3} id="three" className='button w1' onClick={appendNum}>3</button>
            </div> 
            <div className="row">
              <button value={0} id="zero" className='button w2' onClick={appendNum}>0</button>
              <button value={"."} id="decimal" className='button w1' onClick={appendNum}>.</button>
            </div>   
          </div>
          <div >
              <button id="divide" className='operation button w1'><Divide/></button>
              <button id="multiply" className='operation button w1'><X/></button>
              <button id="subtract" className='operation button w1'><Minus/></button>
              <button id="add" className='operation button w1' onClick={AddNums}><Plus/></button>
              <button id="equals" className='operation button w1'><Equal /></button>
          </div>
        </div>

      </div>
      <div className="footer">
        <p>Designed & Coded by <a href="https://github.com/sepidsoroush" target="_blank">SepidSoroush</a></p>
      </div>


    </div>
  );
}

export default App;
