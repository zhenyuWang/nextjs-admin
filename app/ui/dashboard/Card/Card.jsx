'use client'

import {
  Card as CardComp,
  CardHeader,
  CardBody,
  CardFooter,
} from '@nextui-org/react'
import { MdSupervisedUserCircle } from 'react-icons/md'
import dynamic from 'next/dynamic'

const Card = ({ item }) => {
  const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
    ssr: false,
  })

  return (
    <CardComp className='flex-1 bg-slate-800 text-white'>
      <CardHeader>
        <MdSupervisedUserCircle size={24} />
        <span className='ml-2'>{item.title}</span>
      </CardHeader>
      <CardBody>
        <AnimatedNumbers
          animateToNumber={item.number}
          fontStyle={{
            color: 'white',
            fontSize: 24,
          }}
        />
      </CardBody>
      <CardFooter>
        <span className='text-sm'>
          <span className={item.change > 0 ? 'text-green-500' : 'text-red-500'}>
            {item.change}%
          </span>
          &nbsp;
          {item.change > 0 ? 'more' : 'less'} than previous week
        </span>
      </CardFooter>
    </CardComp>
  )
}

export default Card
