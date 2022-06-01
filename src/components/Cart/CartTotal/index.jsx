import style from './style.css'

const CartTotal = ({ carrinho, setCarrinho }) => {

  const totalCarrinho = carrinho.reduce((acc, { price }) => {
    return acc + price
  }, 0)

  const limparCarrinho = () => {
    setCarrinho([])
  }

  return (
    <div className='cartTotal'>
      <div>
        <h1>Total</h1>
        <h2>R$ {totalCarrinho.toFixed(2)}</h2>
      </div>
      <button onClick={limparCarrinho}>Remover todos</button>
    </div>
  )
}

export default CartTotal