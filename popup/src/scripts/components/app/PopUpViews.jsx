import React from 'react';

// Original View
const tree = chrome.runtime.getURL('/images/christmas-tree.png');
export const ChristmasPopUp = ({petStateHandler}) => <div>
  <h2> Merry Christmas</h2>
  <h3>Mr. Yuri P. !!</h3>
  <p className='textIntent-caption2'>Aka : Potato </p>
  <img className="tree" src={tree}/>
  <button className='cx-solidBtn' onClick={petStateHandler}>Click Here!</button>
</div>;