// ButtonWithPhoto.js

import React from 'react';
import { Link } from 'react-router-dom';

function ButtonWithPhoto() {
  return (
    <div>
      <Link to="/photo">
        <button>Go to Photo Page</button>
      </Link>
    </div>
  );
}

export default ButtonWithPhoto;
