import { fetchProduct } from '@/app/lib/data'
import { updateProduct } from '@/app/lib/actions'
import UpdateForm from '@/app/ui/dashboard/products/UpdateForm'

const ProductPage = async ({ params }) => {
  const { id } = params
  const product = await fetchProduct(id)

  const productInfo = product._doc
  productInfo._id = productInfo._id.toString()

  return <UpdateForm product={productInfo} updateProduct={updateProduct} />
}

export default ProductPage
