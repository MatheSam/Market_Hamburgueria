import './style.css'

const InputSearch = ({ product, setProduct }) => {

  const inputValue = (e) => {
    const digitado = e.target.value.toLowerCase()
    console.log()
    const filtrado = product.filter(el => {
      return el.name.toLowerCase().includes(digitado) || el.category.toLowerCase().includes(digitado)
    })

    return digitado == "" ? setProduct(product) : setProduct(filtrado)
  }

  return (
    <div>
      <input onChange={(e) => inputValue(e)} type="text" placeholder='Digitar Pesquisa' />
      <button className='btnPesquisa'>Pesquisar</button>
    </div>
  )
}

export default InputSearch