import SideBar from '@/app/ui/dashboard/SideBar/SideBar'
import Navbar from '@/app/ui/dashboard/Navbar/Navbar'
import { auth } from '@/auth'

const Layout = async ({ children }) => {
  const user = await auth()

  return (
    <div className='h-screen flex'>
      <SideBar />
      <div className='flex-1 h-full relative w-[calc(100vh-260px]'>
        <Navbar user={user} />
        <div className='h-full pt-[90px] pl-4 pb-4 pr-4 overflow-auto'>
          <div className='min-h-full p-4 rounded-lg bg-slate-100 dark:bg-slate-800 dark:text-white'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
