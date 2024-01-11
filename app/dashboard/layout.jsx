import SideBar from '@/app/ui/dashboard/SideBar/SideBar'
import Navbar from '@/app/ui/dashboard/Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <div className='h-screen flex'>
      <SideBar />
      <div className='flex-1 px-5 pb-5 pt-[80px] relative overflow-auto w-[calc(100vh-260px]'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default Layout
