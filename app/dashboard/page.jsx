import classes from '@/app/ui/dashboard/dashboard.module.css'
import { cards } from '@/app/lib/data'
import Card from '@/app/ui/dashboard/Card/Card'
import Chart from '@/app/ui/dashboard/Chart/Chart'
import RightBar from '@/app/ui/dashboard/RightBar/RightBar'
import LatestTransactions from '@/app/ui/dashboard/Transactions/LatestTransactions'

const Dashboard = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.main}>
        <div className={classes.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <LatestTransactions />
        <Chart />
      </div>
      <div className={classes.side}>
        <RightBar />
      </div>
    </div>
  )
}

export default Dashboard
