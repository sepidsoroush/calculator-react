import './App.css';
import { X  ,Divide , Minus , Plus , Equal , Backspace} from 'tabler-icons-react';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div id="display"></div>
        <div className='buttons'>
          <div className="keypad">
            <div className='row'>
              <div id="clear" className='clear button w2'>AC</div>
              <div id="delete" className='clear button w1'><Backspace /></div>
            </div>
            <div className='row'>
              <div id="seven" className='button w1'>7</div>
              <div id="eight" className='button w1'>8</div>  
              <div id="nine" className='button w1'>9</div>
            </div>    
            <div className="row">
              <div id="four" className='button w1'>4</div>
              <div id="five" className='button w1'>5</div>
              <div id="six" className='button w1'>6</div>
            </div>    
            <div className="row">
              <div id="one" className='button w1'>1</div>
              <div id="two" className='button w1'>2</div>
              <div id="three" className='button w1'>3</div>
            </div> 
            <div className="row">
              <div id="zero" className='button w2'>0</div>
              <div id="decimal" className='button w1'>.</div>
            </div>   
          </div>
          <div >
                <div id="divide" className='operation button w1'><Divide/></div>
                <div id="multiply" className='operation button w1'><X/></div>
                <div id="subtract" className='operation button w1'><Minus/></div>
                <div id="add" className='operation button w1'><Plus/></div>
                <div id="equals" className='operation button w1'><Equal /></div>
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
