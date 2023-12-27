'use client'

import { MdSearch } from 'react-icons/md'
import classes from './search.module.css'

const Search = ({ placeholder }) => {
  return (
    <div className={classes.container}>
      <MdSearch />
      <input type='text' placeholder={placeholder} className={classes.input} />
    </div>
  )
}

export default Search
