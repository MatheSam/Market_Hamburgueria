import { useState } from 'react'
import Product from './Product'
import style from './style.css'

const ProductList = ({ products, setCarrinho, itensCarrinho }) => {

  return (
    <div className='productList'>
      {products.map(({ name, id, img, price, category }) => {
        return <Product
          key={id}
          id={id}
          name={name}
          img={img}
          price={price}
          category={category}
          products={products}
          setCarrinho={setCarrinho}
          itensCarrinho={itensCarrinho}
        />
      })}
    </div>
  )
}

export default ProductList