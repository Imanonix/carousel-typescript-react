import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carousel from './Component/Carousel';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path ='/' element={<Carousel />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
