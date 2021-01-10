import React from 'react';
import { Link } from 'react-router-dom';
import  Router from './Router';


const App = () => {
  return (
    <div className="container my-5">
              <Link to="/notes">nudes</Link>

        <Router/>
        
      </div>
  );
};

export default App;