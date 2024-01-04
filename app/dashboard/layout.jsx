import SideBar from '@/app/ui/dashboard/SideBar/SideBar'
import Navbar from '@/app/ui/dashboard/Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <div className='h-screen flex'>
      <div className='min-w-[260px] bg-[var(--bgSoft)] overflow-y-auto'>
        <SideBar />
      </div>
      <div className='flex-1 px-5 pb-5 pt-[80px] relative overflow-auto w-[calc(100vh-260px]'>
        <div className='fixed top-0 w-[calc(100%-280px)] right-0 z-50'>
          <Navbar />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Layout
