import { fetchLatestTransactions } from '@/app/lib/data'
import Transactions from './Transactions'

const LatestTransactions = async () => {
  const latestTransactions = await fetchLatestTransactions()
  const list = latestTransactions.map((item) => {
    const _item = item._doc
    _item._id = _item._id.toString()
    _item.createdAt = _item.createdAt.toString().slice(4, 24)
    return _item
  })

  return (
    <div>
      <h2 className='mb-6 text-slate-500'>Latest Transactions</h2>
      <Transactions list={list} />
    </div>
  )
}

export default LatestTransactions
