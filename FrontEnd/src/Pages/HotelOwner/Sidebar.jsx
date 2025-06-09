import React from 'react'
import { assets } from '../../Assets/assets'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  const sidebarLinks = [
    {
      name:"Dashboard",
      icon:assets.dashboardIcon,
      path:"/owner",
    },
     {
      name:"Add Room",
      path:"add-room",
      icon:assets.addIcon
    },
     {
      name:"List Room",
      path:"list-room",
      icon:assets.listIcon
    },
  ]

  return (
    <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300'>
      {sidebarLinks.map((item,index) => {
       return <NavLink key={index} to={item.path && item.path} end="/owner" className={({isActive})=> `flex items-center py-3 px-4 md:px-8 gap-3 ${isActive ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600" : "hover:bg-gray-100/90 border-white text-gray-700"}`}>
          <img src={item.icon} alt={item.name} className='min-w-6 min-h-6' />
          <p className='md:block hidden text-center'>{item.name}</p>
        </NavLink>
      })}
    </div>
  )
}

export default Sidebar