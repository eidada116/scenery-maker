import React, { useEffect } from 'react';
import TitleBar from '../components2/TitleBar';

import skyOne from '../../img/sky/sky-one.png';
import skyTwo from '../../img/sky/sky-two.png';

import BackgroundOne from '../../img/background/background-one.png';
import BackgroundTwo from '../../img/background/background-two.png';


import initializeSelection from '../../scripts/Selection';

function Scenery() {
  useEffect(() => {
    initializeSelection();
  }, []);

  return (
    <div className='scenery-window window'>
      <TitleBar/>

      <div className="scenery-border">
        <div className="scenery-inner">

          <div id="sky-container">
            <img id="sky-one-img" src={skyOne} className='canvas-image'/>
            <img id="sky-two-img" src={skyTwo} className='canvas-image'/>
          </div>
          <div id="background-container">
            <img id="background-one-img" src={BackgroundOne} className='canvas-image' />
            <img id="background-two-img" src={BackgroundTwo} className='canvas-image' />
          </div>
          <div id="ground-container">


          </div>
          <div id="flora-container">

          </div>
          <div id="fauna-container">



          </div>
        </div>
      </div>
    </div>
  );
}

export default Scenery;
