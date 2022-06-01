import style from './style.css'

const CartProduct = ({ carrinho, setCarrinho }) => {

  const deleteItemCarrinho = (e) => {
    const idItem = +e.target.id

    return setCarrinho(carrinho.filter(el => el.id !== idItem))
  }

  return (
    <section className='carrinho' style={{ gap: carrinho.length > 0 ? "20px" : '0px' }}>
      <h1 className="titulo">Carrinho de compras</h1>
      {carrinho.length > 0 ?

        carrinho.map(({ img, category, name, id }) => {
          return <div className='itensCarrinho' key={id} >
            <img src={img} alt={name} />
            <div>
              <h1>{name}</h1>
              <h2>{category}</h2>
            </div>
            <h1 onClick={(e) => deleteItemCarrinho(e)} id={id}>Remover</h1>
          </div>
        }
        ) : (
          <div className='carrinhoVazio'>
            <h1>Sua sacola está vazia</h1>
            <h2>Adicione itens</h2>
          </div>)
      }
    </section >
  )
}

export default CartProduct