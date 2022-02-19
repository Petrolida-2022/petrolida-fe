import Error from './pages/Error';
import Home from './pages/Home';
// import ComingSoon from './pages/ComingSoon';
import About from './pages/About';
import BusinessCase from './pages/BusinessCase';
import Paper from './pages/Paper'
import Petrosmart from './pages/Petrosmart'
import './assets/css/style.css'

import {
  Routes,
  Route
} from 'react-router-dom'
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import OilRigDesign from './pages/OilRigDesign';
import FractureDesign from './pages/FractureDesign';
import StockTrading from './pages/StockTrading';
import AwardingNight from './pages/AwardingNight';
import CityTour from './pages/CityTour';

function App() {
  const { pathname, hash} = useLocation()
  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0)
    } else{
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) element.scrollIntoView()
      }, 0)
    }
    
  }, [pathname, hash])
  return (
    <Routes>
      <Route path='*' element={<Error/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>} />
      <Route path='competitions/business_case' element={<BusinessCase/>}/>
      <Route path='competitions/paper' element={<Paper/>}/>
      <Route path='competitions/petrosmart' element={<Petrosmart/>}/>
      <Route path='competitions/oil_rig_design' element={<OilRigDesign/>} />
      <Route path='competitions/fracturing_fluid_design' element={<FractureDesign/>} />
      <Route path='competitions/stock_trading' element={<StockTrading/>}/>
      <Route path='non_competitions/city_tour' element={<CityTour/>} />
      <Route path='awarding_night' element={<AwardingNight/>} />
    </Routes>
  );
}

export default App;
