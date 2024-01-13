'use client'

import { useTheme } from '@/app/context/theme-context'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  Image,
  Chip,
} from '@nextui-org/react'

const Transactions = ({ list }) => {
  const themeContext = useTheme()
  const theme = themeContext?.theme

  const getChipColor = (status) => {
    switch (status) {
      case 'pending':
        return 'primary'
      case 'done':
        return 'success'
      case 'canceled':
        return 'default'
      default:
        return 'primary'
    }
  }

  return (
    <Table
      removeWrapper={theme !== 'light'}
      color='primary'
      isStriped
      aria-label='transaction table'
    >
      <TableHeader className='font-bold'>
        <TableColumn>Name</TableColumn>
        <TableColumn>Status</TableColumn>
        <TableColumn>Date</TableColumn>
        <TableColumn>Amount</TableColumn>
      </TableHeader>
      <TableBody
        items={list}
        emptyContent={
          list?.length ? (
            <Spinner label='Loading...' labelColor='primary' />
          ) : (
            'No rows to display.'
          )
        }
      >
        {(item) => (
          <TableRow key={item._id}>
            <TableCell className='flex items-center'>
              <Image
                width={40}
                height={40}
                className='h-[40px] w-[40px]'
                src={item.img}
                radius='full'
                alt='user avatar'
              />
              <span className='ml-2 z-10'>{item.username}</span>
            </TableCell>
            <TableCell>
              <Chip color={getChipColor(item.status)}>{item.status}</Chip>
            </TableCell>
            <TableCell>{item.createdAt}</TableCell>
            <TableCell>
              <span>${item.amount}</span>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default Transactions
