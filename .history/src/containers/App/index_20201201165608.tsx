import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function App(props: { child: PropTypes.E}): JSX.Element {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  );
}

export default App;
