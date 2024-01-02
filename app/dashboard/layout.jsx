import SideBar from '@/app/ui/dashboard/SideBar/SideBar'
import Navbar from '@/app/ui/dashboard/Navbar/Navbar'
import classes from '@/app/ui/dashboard/dashboard.module.css'

const Layout = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        <SideBar />
      </div>
      <div className={classes.content}>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default Layout
