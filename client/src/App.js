
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {  Navbar } from './components';
import { Home, Hotels, HotelsList } from './pages';

function App() {
  return (
<>
<Navbar/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/hotelslist' element={<HotelsList/>} />
      <Route path='/hotelslist/:id' element={<Hotels/>}/>
    </Routes>
</>

  );
}

export default App;
