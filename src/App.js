import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/header.component';
// import AuthPage from './pages/authpage.cpmponent';
import RouterAction from './Router';


const App = () => {
  return (
    <>
    <Header />
      <div className="container my-5">
      <RouterAction />
      </div>
    </>
  );
};

export default App;