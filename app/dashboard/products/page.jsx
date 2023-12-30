import Image from 'next/image'
import Link from 'next/link'
import classes from '@/app/ui/dashboard/products/products.module.css'
import Search from '@/app/ui/dashboard/Search/Search'
import Pagination from '@/app/ui/dashboard/Pagination/Pagination'
import { fetchProducts } from '@/app/lib/data'
import { deleteProduct } from '@/app/lib/actions'

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || ''
  const page = searchParams?.page || 1
  const { count, products } = await fetchProducts(q, page)

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
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={classes.product}>
                  <Image
                    src={product.img || '/no-product.jpg'}
                    alt=''
                    width={40}
                    height={40}
                    className={classes.productImage}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 24)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={classes.buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${classes.button} ${classes.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type='hidden' name='id' value={product.id} />
                    <button className={`${classes.button} ${classes.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default ProductsPage
