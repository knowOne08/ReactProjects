import { useState } from 'react'

import './App.css'


function App(){
  const [exprsn, setExprsn] = useState('');
  const [ans,setAns] = useState('0'); 
  const [lastdgt,setLastdgt]= useState('');
  const [secondLast,setSecondLast]=useState('');
  const [decpoint,setDecpoint]=useState(1);

  const operators = ['+','*','/'];
  const minus = ['-'];
  const numbers = ['0','1','2','3','4','5','6','7','8','9']

  const number = (event) =>{
    const value = event.target.innerHTML;
    if(exprsn != ''){
      setExprsn(exprsn + value);
      setLastdgt(value);
      setSecondLast(exprsn.slice(-1))
    }
    else{
      setExprsn(exprsn + value);
      setLastdgt(value);
      setSecondLast(exprsn.slice(-1))
    }
  }
  
  const operator = (event) => {
    const value = event.target.innerHTML;
    setSecondLast(exprsn.slice(-1))
    //Checking if operator is -
    if(value==='-'){
      // console.log('test')
      // console.log(exprsn)
      if((operators.includes(lastdgt) || minus.includes(lastdgt)) && numbers.includes(secondLast)){
        // console.log(exprsn)
        
        // console.log(secondLast)
        // console.log(lastdgt)

        setExprsn(exprsn+value)
        setLastdgt(value)
        setSecondLast(exprsn.slice(-1))
        setDecpoint(1);
        // console.log(secondLast)
      }
      else if(operators.includes(lastdgt) || minus.includes(lastdgt) && (operators.includes(secondLast) || minus.includes(secondLast))){
        return;
      }
      else if(numbers.includes(lastdgt)){
        setExprsn(exprsn+value)
        setLastdgt(value)
        setSecondLast(exprsn.slice(-1))
        setDecpoint(1)
      }
    }
    //Checking if operator is other than minus
    else if(operators.includes(value)){
        if((operators.includes(lastdgt) || minus.includes(lastdgt)) && numbers.includes(secondLast)){
          console.log(secondLast)
          console.log(lastdgt)
          setExprsn(exprsn.slice(0,-1) + value);
          setLastdgt(value);
          setSecondLast(exprsn.slice(-2,-1))
          setDecpoint(1)
        }
        else if((operators.includes(lastdgt) || minus.includes(lastdgt)) && (operators.includes(secondLast) || minus.includes(secondLast))){
          console.log(secondLast)
          console.log(lastdgt)
          return;
        }
        else if(numbers.includes(lastdgt)){
          setExprsn(exprsn+value)
          setLastdgt(value)
          setSecondLast(exprsn.slice(-1))
          setDecpoint(1)
        }

      }
    else if(numbers.includes(lastdgt)){
      setExprsn(exprsn+value);
      setLastdgt(value);
      setSecondLast(exprsn.slice(-1))    }
    else{
      setExprsn(exprsn+value);
      setLastdgt(value);
      setSecondLast(exprsn.slice(-1))
    }
  }

  const display = (char) => {
      setExprsn((prev) =>{   
          const regex = /[\+\-\*\/]/i ; 
          const last = prev.slice(-1);
          if(char === "."){
              if(regex.test(prev)){
                  return prev+char;
              }else{
                  if(prev.includes('.') ){
                      return prev;
                  }else{
                      return prev + char;
                  }
              }
          }
          // else if(char === "+"||char === "-"||char === "*"||char === "/"){
          else if(regex.test(char)){
              if(regex.test(last)){
                  prev = prev.slice(0,-1)
                  return prev+char;
              }else{
                  return prev+char;
              }
              // return prev+char;
          }else{
              return prev+char;
          }
          

      });
  };

  const point = (event) => {
    const value = event.target.innerHTML;
    if(exprsn!=''){
      if(decpoint){
        setExprsn(exprsn+value);
        setDecpoint(0);
      }
    }else{
      setExprsn(exprsn+value);
      setDecpoint(0);
    }
  }


  const calculate = ()=>{
      setAns(eval(exprsn).toFixed(4)); 
      setExprsn(ans);
      setDecpoint(1);
      setSecondLast('')
      setLastdgt('')

  };
  const allClear =() =>{
    setExprsn('');
    setAns('0');
    setLastdgt('');
    setSecondLast('');
    setDecpoint(1);
  };
  const clear = () =>{
      setExprsn((prev)=>prev.split("").slice(0,-1).join(""));
      setLastdgt(exprsn.slice(-2,-1))
      setSecondLast(exprsn.slice(-3,-2))
      setAns('0');
  };
  return(
      <div className="container">
          <div className="grid">

              <div className="display" id='display' >
                  <input type="text" className="inpt display" value={exprsn} placeholder="0" disabled/>
                  <div className="total">{ans}</div>
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
