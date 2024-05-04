import React from 'react';
import { Link } from 'react-router-dom';

function ButtonWithPhoto() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Link to="/photo">
        <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Go to Photo Page</button>
      </Link>
    </div>
  );
}

export default ButtonWithPhoto;
