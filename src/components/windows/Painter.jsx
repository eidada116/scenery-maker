import React, { useEffect } from 'react'
import TitleBar from '../components2/TitleBar'
import initializePainter from '../../scripts/Sound.js';

function Painter() {
  useEffect(() => {
    initializePainter();
  }, []);
  

  return (
    <div className='painter-window window'>
      <TitleBar/>
      
        <div className="painter-inner">
          <div className="painter-buttons-container">

            <div className="painter-buttons">
              <button className='painter-button' id='sky-btn'>

              </button>
              <button className='painter-button' id='background-btn'>

              </button>
              <button className='painter-button' id='ground-btn'>

              </button>
              <button className='painter-button' id='flora-btn'>
                
              </button>
              <button className='painter-button' id='fauna-btn'>
              
              </button>
            </div>

            <button className="painter-button" id="done">
              done
            </button>

          </div>
          <div className="painter-selection">

            <div id="sky" className='scene-selection'>
              <button id="sky-one" className="scene-item">

              </button>
              <button id="sky-two" className="scene-item">

              </button>
              <button id="sky-three" className="scene-item">

              </button>
            </div>

            <div id="background" className='scene-selection' >
              <button id="background-one" className="scene-item">

              </button>
              <button id="background-two" className="scene-item">

              </button>
              <button id="background-three" className="scene-item">

              </button>
            </div>

            <div id="ground" className='scene-selection' >
              <button id="ground-one" className="scene-item">

              </button>
              <button id="ground-two" className="scene-item">

              </button>
              <button id="ground-three" className="scene-item">

              </button>
            </div>

            <div id="flora" className='scene-selection' >
              <button id="flora-one" className="scene-item">

              </button>
              <button id="flora-two" className="scene-item">

              </button>
              <button id="flora-three" className="scene-item">

              </button>
            </div>

            <div id="fauna" className='scene-selection' >
              {/**
               * 
               * 
               
              <button id="fauna-one" className="scene-item">

              </button>
              <button id="fauna-two" className="scene-item">

              </button>
              <button id="fauna-three" className="scene-item">

              </button>
              */}
            </div>

          </div>
        </div>

    </div>
  )
}

export default Painter
