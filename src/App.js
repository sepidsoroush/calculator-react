import { useState } from 'react'; 
import './App.css';
import { X  ,Divide , Minus , Plus , Equal , Backspace} from 'tabler-icons-react';

function App() {
  // declare variables
  let currentDisplay;
  let PreviousDisplay;
  let operation ;
  function clearAll(){
    currentDisplay = "";
    PreviousDisplay = "";
    operation = undefined ;
  }

  return (
    <div className="App">
      <div className="container">
        <div id="display">
        </div>
        <div className='buttons'>
          <div className="keypad">
            <div className='row'>
              <button id="clear" className='clear button w2' onClick={clearAll}>AC</button>
              <button id="delete" className='clear button w1'><Backspace /></button>
            </div>
            <div className='row'>
              <button id="seven" className='button w1'>7</button>
              <button id="eight" className='button w1'>8</button>  
              <button id="nine" className='button w1'>9</button>
            </div>    
            <div className="row">
              <button id="four" className='button w1'>4</button>
              <button id="five" className='button w1'>5</button>
              <button id="six" className='button w1'>6</button>
            </div>    
            <div className="row">
              <button id="one" className='button w1'>1</button>
              <button id="two" className='button w1'>2</button>
              <button id="three" className='button w1'>3</button>
            </div> 
            <div className="row">
              <button id="zero" className='button w2'>0</button>
              <button id="decimal" className='button w1'>.</button>
            </div>   
          </div>
          <div >
              <button id="divide" className='operation button w1'><Divide/></button>
              <button id="multiply" className='operation button w1'><X/></button>
              <button id="subtract" className='operation button w1'><Minus/></button>
              <button id="add" className='operation button w1'><Plus/></button>
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
