import React from 'react';
import MyAppBar from './MyAppBar';
import Cards from './Cards';
import MyGrid from './MyGrid';
import Data from './Data';
import './App.css';

function App() {
  return (
    <div >

  <MyAppBar/>
  <h2 className=" App "  >New updates about All over the world Patients</h2>
  <MyGrid/>
  <Data/>
    </div>

  );
}

export default App;
