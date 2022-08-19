import './App.css';
import {useState} from 'react';
import { Movie } from './Movies';
import HeaderMovies from './Component/HeaderMovies';
import ListMovies from './Component/ListMovies';
import DescriptionItems from './Component/DescriptionItems';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from './Component/ErrorPage';
function App() {
  const [films,setfilms]=useState(Movie);
  const [caracter,setcaracter]=useState("");
  const [rate,setRate]=useState(0);
  return (
    <BrowserRouter>
      <HeaderMovies  setcaracter={setcaracter} setRate={setRate}/>
      <Routes>
        <Route path="/" element={<ListMovies films={films} caracter={caracter} rate={rate}/>}/>
        <Route
          path="/ListMovies/:id"
          element={
            <DescriptionItems
            films={films}
            />
          }
        /> 
    <Route path="*"  element={<ErrorPage  />}/> 
  
      </Routes>
    </BrowserRouter>
   
    
    
  );
}

export default App;
