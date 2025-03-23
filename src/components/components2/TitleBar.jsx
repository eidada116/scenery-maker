import React from 'react'

function TitleBar() {
  return (
    <div className='title-bar'>
        <p>Scenery-Maker.exe</p>

        <div className='title-buttons'>
            <div id='min' class='window-button'></div>
            <div id='max' class='window-button'></div>
            <div id='close' class='window-button'></div>
        </div>
    </div>
  )
}

export default TitleBar
