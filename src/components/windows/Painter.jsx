import React, { useEffect } from 'react';
import TitleBar from '../components2/TitleBar';
import initializePainter from '../../scripts/Painter.js';

import Bucket from '../../img/paint.png';
import Mountain from '../../img/mountain.png';
import Grass from '../../img/grass.png';
import Flower from '../../img/flower.png';
import Cat from '../../img/cat.png';

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
              <img src={Bucket} alt="Sky Button" />
            </button>
            <button className='painter-button' id='background-btn'>
              <img src={Mountain} alt="Background Button" />
            </button>
            <button className='painter-button' id='ground-btn'>
              <img src={Grass} alt="Ground Button" />
            </button>
            <button className='painter-button' id='flora-btn'>
              <img src={Flower} alt="Flora Button" />
            </button>
            <button className='painter-button' id='fauna-btn'>
              <img src={Cat} alt="Fauna Button" />
            </button>
          </div>

          <button className="painter-button" id="done">
            Done
          </button>
        </div>
        
        <div className="painter-selection">
          <div id="sky" className='scene-selection'>
            <button id="sky-one" className="scene-item sky-item">
              Sky 1
            </button>
            <button id="sky-two" className="scene-item sky-item">
              Sky 2
            </button>
            <button id="sky-three" className="scene-item sky-item">
              Sky 3
            </button>
          </div>

          <div id="background" className='scene-selection'>
            <button id="background-one" className="scene-item background-item">
              Background 1
            </button>
            <button id="background-two" className="scene-item background-item">
              Background 2
            </button>
            <button id="background-three" className="scene-item background-item">
              Background 3
            </button>
          </div>

          <div id="ground" className='scene-selection'>
            <button id="ground-one" className=" scene-item sky-item">
              Ground 1
            </button>
            <button id="ground-two" className=" scene-item sky-item">
              Ground 2
            </button>
            <button id="ground-three" className="scene-item">
              Ground 3
            </button>
          </div>

          <div id="flora" className='scene-selection'>
            <button id="flora-one" className="scene-item">
              Flora 1
            </button>
            <button id="flora-two" className="scene-item">
              Flora 2
            </button>
            <button id="flora-three" className="scene-item">
              Flora 3
            </button>
          </div>

          <div id="fauna" className='scene-selection'>
            <button id="fauna-one" className="scene-item">
              Fauna 1
            </button>
            <button id="fauna-two" className="scene-item">
              Fauna 2
            </button>
            <button id="fauna-three" className="scene-item">
              Fauna 3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Painter;
