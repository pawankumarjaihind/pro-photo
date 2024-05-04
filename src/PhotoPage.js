// PhotoPage.js

import React from 'react';
import myPhoto from './photo.jpg'; // Import the photo


function PhotoPage() {
  return (
    <div>
      <h2>Photo Page</h2>
      <img src={myPhoto} alt="Description of your photo"  width={300} height={400}/>
    </div>
  );
}

export default PhotoPage;
