import React,{useState} from 'react'

function Textform() {
  const [text,settext]=useState("");
  const [wordcount,setcount]=useState("0");

  const upper=()=>{ 
    let newtext=text.toUpperCase();
    settext(newtext);
  }

  const change=(event)=>{
    settext(event.target.value);
    let wc=text.split(" ").length;
    setcount(wc);
  }

  const lower=()=>{
    let newtext=text.toLowerCase();
    settext(newtext);
  }

  const capitalize=()=>{
    let newtext=text.charAt(0).toUpperCase() + text.slice(1);
    settext(newtext);
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const savedisplay=()=>{
    
  }

  return (
    <>
    <div id="bigdiv">
    <div id="textbox">
    <div id="wordcount"><i>Word Count : {wordcount}</i></div>
          <textarea id="area" cols="30" rows="10" value={text} placeholder="Enter text here" onChange={change}></textarea><br/>
          <button id="uppercase" className='btn' title='Convert to uppercase' onClick={upper}><b><img src="https://img.icons8.com/ios-filled/30/FFFFFF/t.png"/></b></button>
          <button id="lowercase" className='btn' title='Convert to loweracase' onClick={lower}><b><img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/lowercase.png"/></b></button>
          <button id="capitalize" className='btn' title='Capitalize each letter' onClick={capitalize}><b>Capitalize</b></button>
          <button id="speech" className='btn' title="text-to-speech" onClick={speak}><b>Speech</b></button>
          <button id="save" className='btn' title="Save/Display" onClick={savedisplay}><b>Save/Display</b></button>
      </div>
      </div>
      </>
  )
  }

export default Textform
