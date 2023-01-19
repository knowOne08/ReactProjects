marked.setOptions({
    breaks: true
})
const renderer = new marked.Renderer();
function App() {
    const [text,setText] = React.useState("");
    return ( 
        <div className = "text-center px-5" >
            <h3 className = "p-4" > Markdown Previewer </h3> 
                {/* <textarea className = "textarea"
                name = "text"
                id = "text"
                cols = "30"
                rows = "10"
                onChange = {
                    (d) => setText(d.target.value)
                } >
                </textarea> <br/ >  */}
                <div className="form-outline">
                    <div className="card mx-auto" style={{width:"400px"}}>
                        <div className="card-header mx-auto"
                            style={{width:"400px"}}>
                            Input
                        </div>
                    </div>
                    <textarea 
                    style={{width:"400px"}}
                    className="textarea form-control mx-auto p-4" 
                    name = "text"
                    id = "text"
                    cols = "30"
                    rows = "10"
                    onChange = {
                        (d) => setText(d.target.value)
                    } 
                    ></textarea>
                </div>
                {/* <button type="button" className="btn btn-secondary">Primary</button> */ } 
                <Preview markdown = {
                        text
                }/>

        </div>
    );
}


function Preview({markdown}) {
    // const m =  dangerouslySetInnerHTML={
    //          __html: marked(markdown, {renderer : renderer}),
    //          }
    return ( 
        <div className="card mx-auto" style={{width:"400px"}}>
            <div class="card-header">
                Output
            </div>
            <div className="card-body" >
                <p className="card-text"
                    dangerouslySetInnerHTML={{
                 __html: marked(markdown, {renderer : renderer}),
                 }}></p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    // <div>
    //     <label className = "output"
    //     // dangerouslySetInnerHTML={{
    //     //     __html: marked(markdown, {renderer : renderer}),
    //     // }} 
    //     >
    //         <textarea className = "textarea1"
    //         name = "output"
    //         id = "output"
    //         cols = "30"
    //         rows = "10" 
    //         // dangerouslySetInnerHTML={{
    //         //     __html: marked(markdown, {renderer : renderer}),
    //         //     }}
    //         // value ={m}
    //     /> 
    //      </label>
    // </div>        
    )
}
// function Preview({markdown}) {
//     return ( 
//     <div 
//     dangerouslySetInnerHTML={{
//         __html: marked(markdown, {renderer : renderer}),
//     }}>   
//     </div> 
//     )
// }

ReactDOM.render(<App/>, document.getElementById('f'));