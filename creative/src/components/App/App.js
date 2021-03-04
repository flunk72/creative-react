import React from 'react';
import Header from '../Header'
import './App.css'
import ApartmentList from '../ApartmentList/ApartmentList';

const App = () => {
  return (
    <main role="main" className="container">
      <Header/>
      <ApartmentList/>
    </main>
  )
}

export default App;