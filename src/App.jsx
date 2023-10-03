import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Wastgept from './Pages/Wastgept';
import Rate from './Pages/Rate';
import KabadShop from './Pages/KabadShop';
import Footer from './Components/Footer';
import './App.css';
import Account from './Pages/Account';
import WastecollectorPage from './Pages/WastecollectorPage';
import Header from './Components/Header';

function App() {

  return (
    <>
    
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/wastegept' element={<Wastgept/>} />
      <Route path='/rate' element={<Rate/>} />
      <Route path='/kabadshop' element={<KabadShop/>} />
      <Route path='/account' element={<Account/>} />
      <Route path='/wastecollector' element={<WastecollectorPage/>} />



    </Routes>
    <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
