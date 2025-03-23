import React from 'react'
import TitleBar from '../components2/TitleBar'

function Painter() {
  return (
    <div className='painter-window window'>
      <TitleBar/>
      
        <div className="painter-inner">
          <div className="painter-buttons-container">

            <div className="painter-buttons">
              <button className='painter-button' id='sky-color'>

              </button>
              <button className='painter-button' id='background'>

              </button>
              <button className='painter-button' id='ground'>

              </button>
              <button className='painter-button' id='flora'>
                
              </button>
              <button className='painter-button' id='fauna'>
              
              </button>
            </div>

            <button className="painter-button" id="done">
              done
            </button>

          </div>
          <div className="painter-selection">

          </div>
        </div>

    </div>
  )
}

export default Painter
