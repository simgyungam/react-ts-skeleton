import React from 'react';

function NotFound(): JSX.Element {
  return (
    <div style={{ fontSize: '28px', color: '#333', margin: '5vh 0', textAlign: 'center' }}>
      Sorry, there are not the page you are looking for.
      You just hit a route that doesn't exist... the sadness.
    </div>
  );
}

export default NotFound;
