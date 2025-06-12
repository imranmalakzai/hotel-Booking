import { useLocation } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home.js'
import Footer from './Components/Footer.js'
import AllRooms from './Pages/AllRooms.js'
import RoomDetails from './Pages/RoomDetails.js'
import MyBooking from './Pages/MyBooking.js'
import HotelReg from './Components/HotelReg.js'
import Layout from './Pages/HotelOwner/Layout.js'
import Dashboard from './Pages/HotelOwner/Dashboard.js'
import AddRoom from './Pages/HotelOwner/AddRoom.js'
import ListRoom from './Pages/HotelOwner/ListRoom.js'

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