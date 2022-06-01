import InputSearch from "./InputSearch"
import Logo from "./Logo"
import style from './style.css'

const Header = ({ product, setProduct }) => {

  return (
    <header>
      <div className="itens">
        <Logo />
        <InputSearch
          product={product}
          setProduct={setProduct}
        />
      </div>
    </header>
  )
}

export default Header