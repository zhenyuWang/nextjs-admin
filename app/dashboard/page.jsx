import classes from '@/app/ui/dashboard/dashboard.module.css'
import { cards } from '@/app/lib/data'
import Card from '@/app/ui/dashboard/card/card'
import Chart from '@/app/ui/dashboard/Chart/Chart'
import RightBar from '@/app/ui/dashboard/RightBar/RightBar'
import Transactions from '@/app/ui/dashboard/Transactions/Transactions'

const Dashboard = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.main}>
        <div className={classes.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={classes.side}>
        <RightBar />
      </div>
    </div>
  )
}

export default Dashboard
