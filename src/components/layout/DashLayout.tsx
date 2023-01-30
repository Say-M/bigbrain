import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../common/Header'
import Sidebar from '../common/Sidebar'

const DashLayout = () => {
  // ! hooks
  const [isSidebar, setSidebar] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setSidebar(false)
  }, [location.pathname])

  return (
    <div className='flex'>
      <Sidebar isSidebar={isSidebar} setSidebar={setSidebar} />
      <div className='content w-full'>
        <Header isSidebar={isSidebar} setSidebar={setSidebar} />
        <Outlet />
      </div>
    </div>
  )
}

export default DashLayout
