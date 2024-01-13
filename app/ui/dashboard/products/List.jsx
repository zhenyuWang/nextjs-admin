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

const ProductList = ({ products, total, pageNum, pageSize, deleteProduct }) => {
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
  const [currentProductId, setCurrentProductId] = useState('')

  return (
    <>
      <Table
        isHeaderSticky
        removeWrapper={theme !== 'light'}
        color='primary'
        isStriped
        aria-label='products table'
        topContent={
          <div className='pb-2 flex justify-between'>
            <Search placeholder='Search for a product...' />
            <Button
              as={Link}
              href='/dashboard/products/add'
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
          <TableColumn key='title'>Title</TableColumn>
          <TableColumn key='description'>Description</TableColumn>
          <TableColumn key='price'>Price</TableColumn>
          <TableColumn key='created-at'>Created At</TableColumn>
          <TableColumn key='stock'>Stock</TableColumn>
          <TableColumn key='action'>Action</TableColumn>
        </TableHeader>
        <TableBody items={products}>
          {(product) => (
            <TableRow key={product._id}>
              <TableCell>
                <div className='flex items-center'>
                  <Image
                    src={product.img || '/no-avatar.png'}
                    width={40}
                    height={40}
                    className='h-[40px] w-[40px]'
                    radius='full'
                    alt='product img'
                  />
                  <span className='ml-2'>{product.title}</span>
                </div>
              </TableCell>
              <TableCell>{product.desc}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.createdAt}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>
                <Button
                  as={Link}
                  className='w-[fit-content]'
                  href={`/dashboard/products/${product._id}`}
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
                    setCurrentProductId(product._id)
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
              <ModalHeader>Delete Product</ModalHeader>
              <ModalBody>Whether to delete the product?</ModalBody>
              <ModalFooter>
                <Button onClick={() => setIsOpenModal(false)}>Cancel</Button>
                <Button
                  color='primary'
                  onClick={() => {
                    setIsOpenModal(false)
                    deleteProduct(currentProductId)
                    setCurrentProductId('')
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

export default ProductList
