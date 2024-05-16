import React,{ useState } from 'react';

import './index.css';


const App = () => {
  
  const [buttonClick, setButtonClick] = useState('');
  
  function handleButtonClick(buttonName){
    setButtonClick(buttonName);
  }

  let isButtonYes = buttonClick === 'Yes';

  return (
    <div id="app">
      <h1 style={{
        color: isButtonYes ? 'green' : 'red',
      }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={ () => handleButtonClick('Yes')}>Yes</button>
        </li>
        <li>
          <button onClick={ () => handleButtonClick('No')}>No</button>
        </li>
      </menu>
    </div>

  );
}

export default App;
