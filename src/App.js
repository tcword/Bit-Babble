import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import React from 'react';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
      <div className='app_content'>
      <Sidebar />
      <Feed />
      <Widgets />
      </div>
      )}
      
    </div>
  );
}

export default App;
