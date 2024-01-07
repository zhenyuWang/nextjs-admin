import { addProduct } from '@/app/lib/actions'
import AddForm from '@/app/ui/dashboard/products/AddForm'

const AddProductPage = () => {
  return <AddForm addProduct={addProduct} />
}

export default AddProductPage
