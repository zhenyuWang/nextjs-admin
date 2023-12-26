import { MdSupervisedUserCircle } from 'react-icons/md'
import classes from './card.module.css'

const Card = ({ item }) => {
  return (
    <div className={classes.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={classes.texts}>
        <span className={classes.title}>{item.title}</span>
        <span className={classes.number}>{item.number}</span>
        <span className={classes.detail}>
          <span
            className={item.change > 0 ? classes.positive : classes.negative}>
            {item.change}%
          </span>{' '}
          {item.change > 0 ? 'more' : 'less'} than previous week
        </span>
      </div>
    </div>
  )
}

export default Card
