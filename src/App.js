import './App.css';
import { X  ,Divide , Minus , Plus , Equal , Backspace} from 'tabler-icons-react';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div id="display"></div>
        <div>
          <div className="keypad">
            <div className='row'>
              <div id="clear">AC</div>
              <div id="delete"><Backspace/></div>
            </div>
            <div className='row'>
              <div id="seven">7</div>
              <div id="eight">8</div>  
              <div id="nine">9</div>
            </div>    
            <div className="row">
              <div id="four">4</div>
              <div id="five">5</div>
              <div id="six">6</div>
            </div>    
            <div className="row">
              <div id="one">1</div>
              <div id="two">2</div>
              <div id="three">3</div>
            </div> 
            <div className="row">
              <div id="zero">0</div>
              <div id="decimal">.</div>
            </div>   
          </div>
          <div className="operation">
                <div id="equals"><Equal/></div>
                <div id="divide"><Divide/></div>
                <div id="multiply"><X/></div>
                <div id="subtract"><Minus/></div>
                <div id="add"><Plus/></div>
          </div>
        </div>

      </div>
      <div className="footer">
        <p>by <a href="https://github.com/sepidsoroush" target="_blank">sepidsoroush</a></p>
      </div>


    </div>
  );
}

export default App;
