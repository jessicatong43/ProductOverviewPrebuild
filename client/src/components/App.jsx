import React, { useState } from 'react';

function App() {
  const [testState, setTestState] = useState('Hello World!');

  return (
    <div className="app">
      { testState }
    </div>
  );
}

export default App;
