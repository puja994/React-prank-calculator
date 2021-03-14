
import {useState} from 'react';
import {Display} from './components/display/Display';
import {Button} from './components/buttonContainer/Button';
import './App.css';

const App= () => {
 //declare local variable for display text
  const [displayText, setDisplayText] = useState("");
  const [history, setHistory] = useState("")
  const [total, setTotal] = useState();
  const [calculatorOn, setCalculatorOn] = useState(true)
 //receive value when button is clicked
  const handleOnButtonClick = buttonValue =>{

    if(total){
      setTotal(null);
    }

    if(buttonValue === "="){
      const ttl = eval(displayText);
      //make total
      let extra = Math.ceil(Math.random()*10)
      if (extra > 3){
         extra = 0;

      }
      setTotal(ttl + extra);
      setHistory(displayText);
      setDisplayText("");
      return ;
      }

      //backspace on C click
      if(buttonValue==="C"){
        const str = displayText.slice(0,-1);
        return setDisplayText(str);

      }
      //empty display on AC click
      if (buttonValue==="AC"){
        const setDisplayText = ""
      }
      //turn calc off
      if(buttonValue==="OFF"){
      return setCalculatorOn(false)

      }
      //turn on
      if(buttonValue==="ON"){
        return
      }

setDisplayText(displayText + buttonValue);
  }
 

  return (
    <div className="App">

      <h1 style={{textAlign:'center', color:'pink'}}>Prank Calculator</h1>

      <div className="container">
        <div className="calculator">

          <div style={{textAlign:"right", margin:"10px"}}>{total && history}</div>

        <Display txtDisp={displayText}
        total={total}
        history={history}
        />

        {calculatorOn ? (
          <Button buttonClick ={handleOnButtonClick}/>
        ): (
          <button className="btnOn" 
          onClick= {
            ()=> setCalculatorOn(true)
          }>ON</button>
          )}
        
        
        
        </div>
      </div>

    
      
    </div>
  )
  
          
}

export default App;
