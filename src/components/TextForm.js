import React , {useState} from 'react'

export default function TextForm(props) {
    const changeupper = ()=> {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase!", "success");
    }

    const changelower = ()=> {
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const changeblank = ()=> {
        let newtext = '';
        setText(newtext);
    }

    const copytext = () =>{
        navigator.clipboard.writeText(text);
    }

    const handleextraspace = () =>{
        let ntxt = text.split(/[ ]+/);
        setText(ntxt.join(" "));
    }

    const handleonchange = (event)=> {
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={changeupper}>UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={changelower}>LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={copytext}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleextraspace}>Remove Extra Space</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={changeblank}>Clear</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h3>Text Summary</h3>
            <p>{text.split(" ").filter((elemnet) => {return elemnet.length !== 0}).length} words and {text.replace(/\s+/g, '').length} letters and {text.split(".").filter((elemnet) => {return elemnet.length !== 0}).length} sentences.</p>
            <p>{0.008 * text.split(" ").filter((elemnet) => {return elemnet.length !== 0})} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
