import React, { useEffect } from 'react';
import TitleBar from '../components2/TitleBar';

import skyOne from '../../img/sky/sky-one.png';
import skyTwo from '../../img/sky/sky-two.png';
import skyThree from '../../img/sky/sky-three.png';

import BackgroundOne from '../../img/background/background-one.png';
import BackgroundTwo from '../../img/background/background-two.png';
import BackgroundThree from '../../img/background/background-three.png';


import floraOne from '../../img/flora/flora-one.png';
import floraTwo from '../../img/flora/flora-two.png';
import floraThree from '../../img/flora/flora-three.png';

import faunaOne from '../../img/fauna/fauna-one.png';
import faunaTwo from '../../img/fauna/fauna-two.png';
import faunaThree from '../../img/fauna/fauna-three.png';


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
            <img id="sky-three-img" src={skyThree} className='canvas-image'/>
          </div>
          <div id="background-container">
            <img id="background-one-img" src={BackgroundOne} className='canvas-image' />
            <img id="background-two-img" src={BackgroundTwo} className='canvas-image' />
            <img id="background-three-img" src={BackgroundThree} className='canvas-image' />
          </div>
          <div id="flora-container">
            <img id='flora-one-img' src={floraOne} className='canvas-image'/>
            <img id='flora-two-img' src={floraTwo} className='canvas-image'/>
            <img id='flora-three-img' src={floraThree} className='canvas-image'/>
          </div>
          <div id="fauna-container">
            <img id='fauna-one-img' src={faunaOne} className='canvas-image'/>
            <img id='fauna-two-img' src={faunaTwo} className='canvas-image'/>
            <img id='fauna-three-img' src={faunaThree} className='canvas-image'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scenery;
