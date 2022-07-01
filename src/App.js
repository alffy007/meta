import React from 'react'
import NavBar from './compnents/NavBar/NavBar'
import './App.css'
import Banner from './compnents/Banner/Banner'
import RowPost from './compnents/RowPost/RowPost'
import { action, comedy, horror, original, romance, trending } from './constants/constants'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner genre={trending}/>
        <RowPost title='Popular on Metaflix' genre={trending} />
        <RowPost title='Metaflix Originals'  genre={original}/>
        <RowPost title='Action'  genre={action}/>
        <RowPost title='Comedy'  genre={comedy}/>
        <RowPost title='Horror'  genre={horror}/>
        <RowPost title='Romance'  genre={romance}/>
    </div>
  );
}

export default App;