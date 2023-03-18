import React, { useState } from 'react';

const appStyle = 'box-border h-1/2 w-3/4 border-solid border-2 border-black grid grid-cols-2 gap-2';

function App() {
  const [testState, setTestState] = useState('Hello World!');

  function clickHandler() {
    setTestState('Clicked!');
  }

  return (
    <div id="app" className={appStyle}>
      <img src="../assets/TuckerDreams.jpg" alt="Test Image" className="col-span-1 border-solid border-2 border-red-700" />
      <div className="w-1/2 h-full col-span-1 border-solid border-2 border-red-700">
        <input type="button" onClick={clickHandler} value={testState} className="border-2 border-blue-700 scale-200"/>
      </div>
    </div>
  );
}

export default App;
