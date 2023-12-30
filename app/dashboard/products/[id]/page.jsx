import { fetchProduct } from '@/app/lib/data'
import classes from '@/app/ui/dashboard/products/product/product.module.css'
import Image from 'next/image'

const ProductPage = async ({ params }) => {
  const { id } = params
  const product = await fetchProduct(id)

  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <div className={classes.imgContainer}>
          <Image src={product.img || '/no-avatar.png'} alt='' fill />
        </div>
        {product.title}
      </div>
      <div className={classes.formContainer}>
        <form className={classes.form}>
          <input type='hidden' name='id' value={product.id} />
          <label>Title</label>
          <input
            type='text'
            name='title'
            placeholder='please input title'
            defaultValue={product.title}
          />
          <label>Price</label>
          <input
            type='number'
            name='price'
            placeholder='please input price'
            defaultValue={product.price}
          />
          <label>Stock</label>
          <input
            type='number'
            name='stock'
            placeholder='please input stock'
            defaultValue={product.stock}
          />
          <label>Color</label>
          <input
            type='text'
            name='color'
            placeholder='please input color'
            defaultValue={product.color}
          />
          <label>Size</label>
          <textarea
            type='text'
            name='size'
            placeholder='please input size'
            defaultValue={product.size}
          />
          <label>Cat</label>
          <select name='cat' id='cat' defaultValue={product.cat}>
            <option value='kitchen'>Phones</option>
            <option value='computers'>Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name='desc'
            id='desc'
            rows='10'
            placeholder='please input desc'
            defaultValue={product.desc}></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default ProductPage
