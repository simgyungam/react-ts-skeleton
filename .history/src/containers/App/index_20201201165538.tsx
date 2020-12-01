import React from 'react';
import 
import Hello from '../../components/Hello';
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
