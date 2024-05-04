import React from 'react';
import myPhoto from './photo.jpg'; // Import the photo

function PhotoPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h2>Photo Page</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={myPhoto} alt="Description of your photo"  style={{ objectFit: 'cover' }} />
        {/* width={900} height={400} */}
      </div>
    </div>
  );
}

export default PhotoPage;
