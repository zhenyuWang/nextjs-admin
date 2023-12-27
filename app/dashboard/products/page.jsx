import Image from 'next/image'
import Link from 'next/link'
import classes from '@/app/ui/dashboard/products/products.module.css'
import Search from '@/app/ui/dashboard/Search/Search'
import Pagination from '@/app/ui/dashboard/Pagination/Pagination'

const ProductsPage = async () => {
  const page = 1

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <Search placeholder='Search for a product...' />
        <Link href='/dashboard/products/add'>
          <button className={classes.addButton}>Add New</button>
        </Link>
      </div>
      <table className={classes.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={classes.product}>
                <Image
                  src='/no-product.jpg'
                  alt=''
                  width={40}
                  height={40}
                  className={classes.productImage}
                />
                product-1
              </div>
            </td>
            <td>product-desc</td>
            <td>100</td>
            <td>2023.12.28</td>
            <td>200</td>
            <td>
              <div className={classes.buttons}>
                <Link href={`/dashboard/products/1`}>
                  <button className={`${classes.button} ${classes.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${classes.button} ${classes.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination count={10} />
    </div>
  )
}

export default ProductsPage
