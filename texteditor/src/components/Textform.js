import React from 'react'

function Textform() {
  return (
    <>
    <div id="textbox">
          <textarea id="area" cols="30" rows="10" placeholder='Enter text here'></textarea><br/>
          <button id="uppercase" className='btn' title='Convert to uppercase'><b><img src="https://img.icons8.com/ios-filled/30/FFFFFF/t.png"/></b></button>
          <button id="lowercase" className='btn' title='Convert to loweracase'><b><img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/lowercase.png"/></b></button>
          <button id="capitalize" className='btn' title='Convert to uppercase'><b>Capitalize</b></button>
      </div>
      </>
  )
}

export default Textform
