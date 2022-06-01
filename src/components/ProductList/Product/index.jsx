import { useEffect } from 'react'
import style from './style.css'

const Product = ({ name, id, img, price, category, products, setCarrinho, itensCarrinho }) => {

  const addCarrinho = (e) => {
    const idItem = +e.target.id
    const item = products.filter(el => el.id == idItem)[0]

    let obj = {
      id: item.id,
      img: item.img,
      name: item.name,
      category: item.category,
      price: item.price
    }

    if (itensCarrinho.some(el => el.id == obj.id)) {
      alert('Esse item já está no carrinho, permitido apenas 1 item por compra')
    } else {
      setCarrinho([...itensCarrinho, obj])
    }
  }

  return (
    <div className="product" key={id}>
      <div className="img">
        <img src={img} alt="name" />
      </div>
      <h2 className="name">{name}</h2>
      <p>{category}</p>
      <h3 className="preco">R$ {price}</h3>
      <button id={id} className="addItem" onClick={(e) => addCarrinho(e)}>Adicionar</button>
    </div >
  )
}

export default Product