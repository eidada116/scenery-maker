import React from 'react'

function TitleBar() {
  return (
    <div className='title-bar'>
        <p>Scenery-Maker.exe</p>

        <div className='title-buttons'>
            <div id='min' className='window-button'></div>
            <div id='max' className='window-button'></div>
            <div id='close' className='window-button'></div>
        </div>
    </div>
  )
}

export default TitleBar
