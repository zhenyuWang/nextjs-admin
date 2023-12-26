import Image from 'next/image'
import classes from './transactions.module.css'

const Transactions = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Latest Transactions</h2>
      <table className={classes.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={classes.user}>
                <Image
                  src='/no-avatar.png'
                  alt=''
                  width={40}
                  height={40}
                  className={classes.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${classes.status} ${classes.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={classes.user}>
                <Image
                  src='/no-avatar.png'
                  alt=''
                  width={40}
                  height={40}
                  className={classes.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${classes.status} ${classes.done}`}>Done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={classes.user}>
                <Image
                  src='/no-avatar.png'
                  alt=''
                  width={40}
                  height={40}
                  className={classes.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${classes.status} ${classes.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={classes.user}>
                <Image
                  src='/no-avatar.png'
                  alt=''
                  width={40}
                  height={40}
                  className={classes.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${classes.status} ${classes.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
