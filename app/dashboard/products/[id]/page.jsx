import classes from '@/app/ui/dashboard/products/product/product.module.css'
import Image from 'next/image'

const ProductPage = async ({ params }) => {
  const { id } = params

  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <div className={classes.imgContainer}>
          <Image src='/no-avatar.png' alt='' fill />
        </div>
        product-1
      </div>
      <div className={classes.formContainer}>
        <form className={classes.form}>
          <input type='hidden' name='id' value='1' />
          <label>Title</label>
          <input type='text' name='title' placeholder='product-1' />
          <label>Price</label>
          <input type='number' name='price' placeholder={100} />
          <label>Stock</label>
          <input type='number' name='stock' placeholder={200} />
          <label>Color</label>
          <input type='text' name='color' placeholder='color' />
          <label>Size</label>
          <textarea type='text' name='size' placeholder='size' />
          <label>Cat</label>
          <select name='cat' id='cat'>
            <option value='kitchen'>Kitchen</option>
            <option value='computers'>Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name='desc'
            id='desc'
            rows='10'
            placeholder='product-desc'></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default ProductPage
