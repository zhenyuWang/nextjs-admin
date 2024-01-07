import { fetchProducts } from '@/app/lib/data'
import { deleteProduct } from '@/app/lib/actions'
import List from '@/app/ui/dashboard/products/product/List'

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || ''
  const pageNum = searchParams?.page * 1 || 1
  const pageSize = 10

  const { total, products } = await fetchProducts(q, pageNum, pageSize)

  const simpleProducts = products.map((item) => {
    const _item = item._doc
    _item._id = _item._id.toString()
    _item.createdAt = _item.createdAt.toString().slice(4, 24)
    return _item
  })

  return (
    <List
      products={simpleProducts}
      total={total}
      pageNum={pageNum}
      pageSize={pageSize}
      deleteProduct={deleteProduct}
    />
  )
}

export default ProductsPage
