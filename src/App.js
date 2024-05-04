// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PhotoPage from './PhotoPage';
import ButtonWithPhoto from './ButtonWithPhoto';

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/photo">Photo Page</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/photo" element={<PhotoPage />} />
          <Route path="/" element={<ButtonWithPhoto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
