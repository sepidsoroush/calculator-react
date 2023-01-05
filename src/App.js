import { useState } from 'react'; 
import './App.css';
import { X  ,Divide , Minus , Plus , Equal , Backspace} from 'tabler-icons-react';

function App() {



  const Calculator = () => (
    <div className="container">
        <div id="display">
          <div className="display"></div>
          <div className="display"></div>
        </div>
        <div className='buttons'>
          <div className="keypad">
            <div className='row'>
              <button id="clear" className='clear button w2'>AC</button>
              <button id="delete" className='clear button w1'><Backspace /></button>
            </div>
            <div className='row'>
              <button value={7} id="seven" className='button w1'>7</button>
              <button value={8} id="eight" className='button w1'>8</button>  
              <button value={9} id="nine" className='button w1'>9</button>
            </div>    
            <div className="row">
              <button value={4} id="four" className='button w1'>4</button>
              <button value={5} id="five" className='button w1'>5</button>
              <button value={6} id="six" className='button w1'>6</button>
            </div>    
            <div className="row">
              <button value={1} id="one" className='button w1'>1</button>
              <button value={2} id="two" className='button w1'>2</button>
              <button value={3} id="three" className='button w1'>3</button>
            </div> 
            <div className="row">
              <button value={0} id="zero" className='button w2'>0</button>
              <button value={"."} id="decimal" className='button w1'>.</button>
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
  );
  const Author = () => (
    <div className="footer">
        <p>Designed & Coded by <a href="https://github.com/sepidsoroush" target="_blank">SepidSoroush</a></p>
    </div>
  );

  return (
    <div className="App">
      <Calculator />
      <Author />
    </div>
  );
}




export default App;