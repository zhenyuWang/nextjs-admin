import { cards } from '@/app/lib/data'
import Card from '@/app/ui/dashboard/Card/Card'
import Chart from '@/app/ui/dashboard/Chart/Chart'
import RightBar from '@/app/ui/dashboard/RightBar/RightBar'
import LatestTransactions from '@/app/ui/dashboard/Transactions/LatestTransactions'

const Dashboard = () => {
  return (
    <div className='flex mt-5 relative gap-5'>
      <div className='min-w-[600px] flex basis-3/4 flex-col gap-5'>
        <div className='flex gap-5 justify-between'>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <LatestTransactions />
        <Chart />
      </div>
      <div className='w-[calc(25%-20px)] min-w-[230px] xl:fixed xl:w-[calc((100%-300px)/4-20px)] xl:right-5'>
        <RightBar />
      </div>
    </div>
  )
}

export default Dashboard
