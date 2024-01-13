'use client'

import {
  Link,
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Image,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react'
import { MdAdd } from 'react-icons/md'
import Search from '@/app/ui/dashboard/Search/Search'
import { useTheme } from '@/app/context/theme-context'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

const UserList = ({ users, total, pageNum, pageSize, deleteUser }) => {
  const themeContext = useTheme()
  const theme = themeContext?.theme

  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const params = new URLSearchParams(searchParams)

  const handleChangePage = (page) => {
    params.set('page', page)
    replace(`${pathname}?${params}`)
  }
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [currentUserId, setCurrentUserId] = useState('')

  return (
    <>
      <Table
        isHeaderSticky
        removeWrapper={theme !== 'light'}
        color='primary'
        isStriped
        aria-label='users table'
        topContent={
          <div className='pb-2 flex justify-between'>
            <Search placeholder='Search for a user...' />
            <Button
              as={Link}
              href='/dashboard/users/add'
              color='primary'
              size='sm'
              endContent={<MdAdd />}
            >
              Add New
            </Button>
          </div>
        }
        bottomContent={
          <Pagination
            className='mx-auto'
            isCompact
            loop
            showControls
            total={Math.ceil(total / pageSize)}
            initialPage={pageNum}
            onChange={handleChangePage}
          />
        }
      >
        <TableHeader>
          <TableColumn key='name'>Name</TableColumn>
          <TableColumn key='email'>Email</TableColumn>
          <TableColumn key='createdAt'>Created At</TableColumn>
          <TableColumn key='role'>Role</TableColumn>
          <TableColumn key='status'>Status</TableColumn>
          <TableColumn key='action'>Action</TableColumn>
        </TableHeader>
        <TableBody items={users}>
          {(user) => (
            <TableRow key={user._id}>
              <TableCell>
                <div className='flex items-center'>
                  <Image
                    src={user.img || '/no-avatar.png'}
                    width={40}
                    height={40}
                    className='h-[40px] w-[40px]'
                    radius='full'
                    alt='avatar'
                  />
                  <span className='ml-2'>{user.username}</span>
                </div>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.createdAt}</TableCell>
              <TableCell>{user.isAdmin ? 'Admin' : 'Client'}</TableCell>
              <TableCell>{user.isActive ? 'active' : 'passive'}</TableCell>
              <TableCell>
                <Button
                  as={Link}
                  className='w-[fit-content]'
                  href={`/dashboard/users/${user._id}`}
                  size='sm'
                  color='primary'
                >
                  View
                </Button>
                <Button
                  className='w-[fit-content] ml-4'
                  size='sm'
                  color='danger'
                  onClick={() => {
                    setIsOpenModal(true)
                    setCurrentUserId(user._id)
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader>Delete User</ModalHeader>
              <ModalBody>Whether to delete the user?</ModalBody>
              <ModalFooter>
                <Button onClick={() => setIsOpenModal(false)}>Cancel</Button>
                <Button
                  color='primary'
                  onClick={() => {
                    setIsOpenModal(false)
                    deleteUser(currentUserId)
                    setCurrentUserId('')
                    replace(`${pathname}?${params}`)
                  }}
                >
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default UserList
