function App(){
    const [exprsn, setExprsn] = React.useState('');
    const [ans,setAns] = React.useState(0); 
    const display = (char) => {
        setExprsn((prev) => 
        {   
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
    const calculate = ()=>{
        setAns(eval(exprsn));
        setExprsn('');
    };
    const allClear =() =>{
        setExprsn("");
        setAns(0);
    };
    const clear = () =>{
        setExprsn((prev)=>prev.split("").slice(0,-1).join(""));

        setAns(0);
    };
    return(
        <div className="container">
            <div className="grid">
                <div className="display" id="display">
                    <input type="text" className="inpt display" value={exprsn} placeholder="0" disabled/>
                    <div className="total">{ans}</div>
                </div>             
                <div onClick={allClear} id="clear" className="calcbtn AC clr-color">AC</div>
                <div onClick={clear} id="back" className="calcbtn C clr-color">C</div>
                <div onClick={()=>display("/")} id="divide" className="calcbtn div">/</div>
                <div onClick={()=>display("*")} id="multiply" className="calcbtn mult">x</div>
                <div onClick={()=>display("7")} id="seven" className="calcbtn svn dgt-color"   >7</div>
                <div onClick={()=>display("8")} id="eight" className="calcbtn egt dgt-color"   >8</div>
                <div onClick={()=>display("9")} id="nine" className="calcbtn nin dgt-color"    >9</div>
                <div onClick={()=>display("-")} id="subtract" className="calcbtn sub">-</div>
                <div onClick={()=>display("4")} id="four" className="calcbtn fr dgt-color" >4</div>
                <div onClick={()=>display("5")} id="five" className="calcbtn fv dgt-color" >5</div>
                <div onClick={()=>display("6")} id="six" className="calcbtn sx dgt-color"  >6</div>
                <div onClick={()=>display("+")} id="add" className="calcbtn add">+</div>
                <div onClick={()=>display("1")} id="one" className="calcbtn one dgt-color" >1</div>
                <div onClick={()=>display("2")} id="two" className="calcbtn two dgt-color" >2</div>
                <div onClick={()=>display("3")} id="three" className="calcbtn three dgt-color" >3</div>
                <div onClick={calculate} id="equals" className="calcbtn eq">=</div>
                <div onClick={()=>display("0")} id="zero" className="calcbtn zro dgt-color">0</div>
                <div onClick={()=>display(".")} id="decimal" className="calcbtn dot dgt-color">.</div>
                
                
                
              
            </div>
        </div>
    );
}

ReactDOM.render(<App/>,document.getElementById('root'))