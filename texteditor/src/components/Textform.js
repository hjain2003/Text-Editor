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
    localStorage.setItem("Text",text);
  }
  const display=()=>{
    settext(localStorage.getItem("Text"));
  }

  const clear=()=>{
    settext("");
  }

  const togglemode=()=>{
    if (mystyle.color=='black')
    {
      setstyle({
        color:'white',
        backgroundColor:'black',
      })
      document.body.style = 'background: purple;';
    }
    else
    {
      setstyle({
        color:'black',
        backgroundColor:'white',
      })
      document.body.style = 'background: white;';
    }


    if (mystylo.backgroundColor=='#037dff')
    {
      setstylo({
        color:'white',
        backgroundColor:'black',
      })
    }
    else
    {
      setstylo({
        color:'white',
        backgroundColor:'#037dff',
      })
    }
  }

  const [mystyle,setstyle]=useState({
      color:'black',
      backgroundColor:'white',
  })
  
  const[mystylo,setstylo]=useState({
    color:'white',
    backgroundColor:'#037dff',
  })

  return (
    <>
    <div id="dark">
    <label class="switch">
  <input type="checkbox" onClick={togglemode}/>
  <span class="slider round"></span>
</label>

    </div>
    <div id="bigdiv">
    <div id="textbox">
    <div id="wordcount"><i>Word Count : {wordcount}</i></div>
          <textarea id="area" cols="30" rows="10" value={text} placeholder="Enter text here" onChange={change} style={mystyle}></textarea><br/>
          <button id="uppercase" className='btn' title='Convert to uppercase' onClick={upper} style={mystylo}><b><img src="https://img.icons8.com/ios-filled/30/FFFFFF/t.png"/></b></button>
          <button id="lowercase" className='btn' title='Convert to loweracase' onClick={lower} style={mystylo}><b><img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/lowercase.png"/></b></button>
          <button id="capitalize" className='btn' title='Capitalize each letter' onClick={capitalize} style={mystylo}><b>Capitalize</b></button>
          <button id="speech" className='btn' title="text-to-speech" onClick={speak} style={mystylo}><b>Speech</b></button>
          <button id="save" className='btn' title="Save" onClick={savedisplay} style={mystylo}><b>Save</b></button>
          <button id="display" className='btn' title="Display" onClick={display} style={mystylo}><b>Display</b></button>
          <button id="clc" className='btn' title="Clear All" onClick={clear} style={mystylo}><b>Clc</b></button>
      </div>
      </div>
      </>
  )
  }

export default Textform
