import { useState } from 'react'

import './App.css'

function App() {

  const [ans,setAns] = useState('0')
  const [exprsn,setExprsn]=useState('')
  const [lastdgt,setLastdgt]= useState('');
  const [decpoint,setDecpoint] =  useState(1);

  const operators = ['+','-','*','/'];
  const numbers = ['0','1','2','3','4','5','6','7','8','9'];


  const operator = (event) =>{
    const value = event.target.innerHTML;
    if(operators.includes(lastdgt)){
      if(value == '-'){
        setExprsn(exprsn+value)
        setAns(exprsn+value)
        setLastdgt(value)
        setDecpoint(1)

      }
      else{ 
        if(lastdgt == '-'){
          setExprsn(exprsn.slice(0,-2) + value)
          setAns(exprsn.slice(0,-2)+value)
          setLastdgt(value)
          setDecpoint(1)

        }else{
        setExprsn(exprsn.slice(0,-1) + value)
        setAns(exprsn.slice(0,-1) + value)
        setLastdgt(value)
        setDecpoint(1)

        }
      }
    }
    else if(numbers.includes(lastdgt)){
      setExprsn(exprsn+value)
      setAns(exprsn+value)
      setLastdgt(value)
      setDecpoint(1)

    }
  }

  const number = (event) => {
    const value = event.target.innerHTML;
    if(exprsn != ''){
      setExprsn(exprsn+value)
      setAns(exprsn+value)
      setLastdgt(value)
    }else{
      if(value == '0'){
        // console.log('test1')
        return
      }else{
        setExprsn(exprsn+value)
        setAns(exprsn+value)
        setLastdgt(value)
      }
    }

  }
  const calculate = (event) =>{
    const value = event.target.innerHTML;

    setExprsn(eval(exprsn))
    setAns(eval(exprsn))

  }
  const point = (event) =>{
    const value = event.target.innerHTML;
    console.log(exprsn)
    if(exprsn != ''){
      if(decpoint){
        // console.log('test')
        setExprsn(exprsn+value);
        setAns(exprsn+value)
        setDecpoint(0);
      }
      
    }
}
  const clear = (event) =>{
    let lastdec = exprsn.slice(-1);
    setExprsn(exprsn.slice(0,-1))
    setAns(exprsn.slice(0,-1))
    setLastdgt(exprsn.slice(-2,-1))
    
    if(lastdec == '.'){
      console.log(lastdec)
      setDecpoint(1)
    }
  }
  const allClear = (event) =>{
    const value = event.target.innerHTML;
    setExprsn('')
    setAns('0')
    setDecpoint(1)

  }

  return(
      <div className="container">
          <div className="grid">

              <div className="display">
                  <input type="text" className="inpt display" value={exprsn} placeholder="0" disabled/>
                  <div className="total" id="display">{ans}</div>
              </div>             
              <div onClick={allClear} id="clear" className="calcbtn AC clr-color">AC</div>
              <div onClick={clear} id="back" className="calcbtn C clr-color">C</div>
              <div onClick={operator} id="divide" className="calcbtn div">/</div>
              <div onClick={operator}  id="multiply" className="calcbtn mult">*</div>
              <div onClick={number} id="seven" className="calcbtn svn dgt-color">7</div>
              <div onClick={number} id="eight" className="calcbtn egt dgt-color">8</div>
              <div onClick={number} id="nine" className="calcbtn nin dgt-color">9</div>
              <div onClick={operator} id="subtract" className="calcbtn sub">-</div>
              <div onClick={number} id="four" className="calcbtn fr dgt-color" >4</div>
              <div onClick={number} id="five" className="calcbtn fv dgt-color" >5</div>
              <div onClick={number} id="six" className="calcbtn sx dgt-color"  >6</div>
              <div onClick={operator} id="add" className="calcbtn add">+</div>
              <div onClick={number} id="one" className="calcbtn one dgt-color" >1</div>
              <div onClick={number} id="two" className="calcbtn two dgt-color" >2</div>
              <div onClick={number} id="three" className="calcbtn three dgt-color" >3</div>
              <div onClick={calculate} id="equals" className="calcbtn eq">=</div>
              <div onClick={number} id="zero" className="calcbtn zro dgt-color">0</div>
              <div onClick={point} id="decimal" className="calcbtn dot dgt-color">.</div>
              
              
              
            
          </div>
      </div>
  );
}
export default App
