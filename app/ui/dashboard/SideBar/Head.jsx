import Link from 'next/link'
import { Image } from '@nextui-org/react'

const SideBarHead = () => {
  return (
    <Link
      href='/dashboard'
      className='flex items-center justify-center p-4 border-b border-gray-700'>
      <Image src='/avatar.png' width={40} height={40} radius='full' />
      <span className='ml-3'>Next.js Admin</span>
    </Link>
  )
}

export default SideBarHead
