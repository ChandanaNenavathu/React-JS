import React, {useState} from 'react'

function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
            setText(newText);
    }
    const handleloClick = () => {
        let newText = text.toLowerCase();
            setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }
    const handleCopyClick = () => {
        let text = document.getElementById("myBox");
       text.select();
       text.setSelectionRange(0, 99999);
       navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
       let newText = text.replace(/\s+/g, " ");
        setText(newText);
    }
    const [text, setText] = useState("");
    const [name, setName] = useState("chandana");
    const [count, setCount] = useState(0);
    const [counts, setCounts] = useState(0);

  return (
    <div className="container">
        <div className={`form-check form-switch text App ${props.mode}`}>
            <input className="form-check-input" onClick={props.toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlfor="flexSwitchCheckDefault"></label>
        </div>
        <h1>{props.heading}</h1>
        <label className="form-label">Example textarea</label>
        <div>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
            <button className="btn.btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn.btn-primary mx-1 my-2" onClick={handleloClick}>Convert to LowerCase</button>
            <button className="btn.btn-primary mx-1 my-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn.btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn.btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
        <div className="container my-3">
            <h1>Your Texts Summary</h1>
            <p>{text.split(" ").length} words and {text.length}characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        <div className='my-3'>
            <h2>{name}</h2>
            <button className="change" onClick={() => setName("Nenavathu Chandana")}>Change Name</button>
        </div>
        <div className='my-2'>
            <h2>{count}</h2>
            <button className="change" onClick={() => setCount(count + 1)}>Increment Value</button>
        </div>
        <div className='my-2'>
            <h2>{counts}</h2>
            <button className="change" onClick={() => setCounts(counts - 1)}>Decrement Value</button>
        </div>
    </div>
  )
}

export default TextForm





