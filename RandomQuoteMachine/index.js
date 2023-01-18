function App(){
    const [quotes,setQuotes] = React.useState("");
    const [color,setColor] = React.useState({"hex":"#000"});
    const [randQuote,setRandQuote] = React.useState("");

    React.useEffect(()=>{ //Takes 2 args, 1st a callback function and 2nd an array of dependencies 
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes");
            const data =  await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random()*data.length);
            setRandQuote(data[randIndex])
        }
        fetchData();
    }, []);

    const getNewQuote = () => {

        const colors = [
            {
                "hex":"#EFDECD", 
                "name": "Almond", 
                "rgb": "(239, 222, 205)"
            }, 
            {
                "hex": "#CD9575", 
                "name": "Antique Brass", 
                "rgb": "(205, 149, 117)"
            }, 
            {
                "hex": "#FDD9B5", 
                "name": "Apricot", 
                "rgb": "(253, 217, 181)"
            }, 
            {
                "hex": "#78DBE2", 
                "name": "Aquamarine", 
                "rgb": "(120, 219, 226)"
            }, 
            {
                "hex": "#87A96B", 
                "name": "Asparagus", 
                "rgb": "(135, 169, 107)"
            }, 
            {
                "hex": "#FFA474", 
                "name": "Atomic Tangerine", 
                "rgb": "(255, 164, 116)"
            }, 
            {
                "hex": "#FAE7B5", 
                "name": "Banana Mania", 
                "rgb": "(250, 231, 181)"
            }, 
            {
                "hex": "#9F8170", 
                "name": "Beaver", 
                "rgb": "(159, 129, 112)"
            }, 
            {
                "hex": "#FD7C6E", 
                "name": "Bittersweet", 
                "rgb": "(253, 124, 110)"
            }, 
            {
                "hex": "#000000", 
                "name": "Black", 
                "rgb": "(0,0,0)"
            }, 
            {
                "hex": "#ACE5EE", 
                "name": "Blizzard Blue", 
                "rgb": "(172, 229, 238)"
            }, 
            {
                "hex": "#1F75FE", 
                "name": "Blue", 
                "rgb": "(31, 117, 254)"
            }, 
            {
                "hex": "#A2A2D0", 
                "name": "Blue Bell", 
                "rgb": "(162, 162, 208)"
            }, 
            {
                "hex": "#6699CC", 
                "name": "Blue Gray", 
                "rgb": "(102, 153, 204)"
            }, 
            {
                "hex": "#0D98BA", 
                "name": "Blue Green", 
                "rgb": "(13, 152, 186)"
            }, 
            {
                "hex": "#7366BD", 
                "name": "Blue Violet", 
                "rgb": "(115, 102, 189)"
            }
         
        ];
        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
        setRandQuote(quotes[randIndex])
        setColor(colors[randColorIndex])
        
    }
    
   

    return (
    <div style={{backgroundColor:color.hex, minHeight:"100vh"}}>
        <div className="container pt-5  box">
            <div className="jumbotron">

            <div class="card" style={{width: "30rem",backgroundColor: "#d1f0f7"}}>
           
                <div className="card-body">
                    <h5 class="card-title text-center">Quote</h5>  
                                {randQuote ? (
                                    <>
                                        <p className="card-text">&quot; {randQuote.text} &quot;</p>
                                        <h5 className="card-author">- {randQuote.author || "No autor"}</h5>
                                    </>
                                ) : (
                                    <h2>Loading</h2>
                                )}
            
                                <div >
                                    <button onClick={getNewQuote} className="btn btn-dark">New Quote</button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                    
                                    <a href= {"https://twitter.com/intent/tweet?text=" + 
                                    encodeURIComponent(
                                        '"' + randQuote.text  + '"  ' + '-'+ randQuote.author
                                    )} target="_blank" className="btn btn-primary"><i className="fa fa-square-twitter" /></a>
                                    
                                </div>  
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
            </div>
        </div>
    </div>
    ); 
}

ReactDOM.render(<App/>, document.getElementById("div"))