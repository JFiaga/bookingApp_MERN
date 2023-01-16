
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header, Navbar } from './components';
import { Home, Hotels, HotelsList } from './pages';

function App() {
  return (
<>
<Navbar/>
<Header/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/hotelslist' element={<HotelsList/>} />
      <Route path='/hotelslist/:id' element={<Hotels/>}/>
    </Routes>
</>

  );
}

export default App;
