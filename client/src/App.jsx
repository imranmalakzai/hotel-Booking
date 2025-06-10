import { useLocation } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import AllRooms from './Pages/Allrooms'
import RoomDetails from './Pages/RoomDetails'
import MyBooking from './Pages/MyBooking'
import HotelReg from './Components/HotelReg'
import Layout from './Pages/HotelOwner/Layout'
import Dashboard from './Pages/HotelOwner/Dashboard'
import AddRoom from './Pages/HotelOwner/AddRoom'
import ListRoom from './Pages/HotelOwner/ListRoom'

function App() {

  //checking the path
  const isOwnerPath = useLocation().pathname.includes("owner")


  return (
    <div>
      {!isOwnerPath && (<Navbar />)}
     {false && ( <HotelReg />)}
      <div className='min-h-[75vh]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<AllRooms />} />
        <Route path='/rooms/:id' element={<RoomDetails />} />
        <Route path='/my-bookings' element={<MyBooking />} />
        <Route path='/owner' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='add-room' element={<AddRoom />} />
        <Route path='list-room' element={<ListRoom />} />
        </Route>
      </Routes>
      </div>
      {!isOwnerPath && (<Footer />)}
    </div>
  )
}

export default App