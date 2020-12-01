import React from 'react';
import 
import './style.scss';

function App(props: any): JSX.Element {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  );
}

export default App;
