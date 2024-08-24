import React from 'react'
import { Route, Router, Routes, UNSAFE_DataRouterStateContext } from 'react-router-dom'
import MotorComponent from './componens/motor'
import CaravanComponent from './componens/caravan'
import TuningComponent from './componens/tuning'
import UsedCarComponent from './componens/used car'
import CampingPlaceComponent from './componens/campingPlace'
import NotFoundComponent from './componens/404'
import Naavbar from './componens/naavbar'
import Navbar from './componens/navbar'
import DetailComponent from './componens/motor/detail'
import TuningDetail from './componens/tuning/detail'
import UsedDetail from './componens/used car/detail'
import CaravanDetail from './componens/caravan/detail'
import MotorDetail from './componens/motor/detail'
import ProfileComponents from './componens/Navbar  Items/Profile'
import RegistrationComponent from './componens/Navbar  Items/Registration'
// import Navbar from './componens/navbar'

const RouterComponent = () => {
  return <Routes>
             <Route path="*"element={<NotFoundComponent />} />
             {/* <Route path="/"element={<Navbar />} /> */}
             <Route path="/motor"element={<MotorComponent />} />
         <Route path="/"element={<MotorComponent />} />
         <Route path="/caravan"element={<CaravanComponent />} />
         <Route path="/tuning"element={<TuningComponent />} />
         <Route path="/used-car"element={<UsedCarComponent/>} />
         <Route path="/camping-place"element={<CampingPlaceComponent />} />
         <Route path="/motor/:id"element={<MotorDetail/>} />
         <Route path="/tuning/:id"element={<TuningDetail/>} />
         <Route path="/used-car/:id"element={<UsedDetail/>} />
         <Route path="/caravan/:id"element={<CaravanDetail/>} />
         <Route path="/profile"element={<ProfileComponents />} />
         <Route path="/create"element={<RegistrationComponent />} />
         </Routes>
    
  
}

export default RouterComponent