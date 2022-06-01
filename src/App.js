import { useEffect, useState } from "react";
import CartTotal from "./components/Cart/CartTotal";
import CartProduct from "./components/Cart/CartProduct";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import style from './style.css'

function App() {
  const [product, setProduct] = useState([])
  const [filterProduct, setFilterProduct] = useState([])
  const [currentSale, setCurrentSale] = useState([])

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
      .then(resp => resp.json())
      .then(resp => {
        setProduct(resp)
        setFilterProduct(resp)
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="App">
      <Header
        product={product}
        setProduct={setFilterProduct}
      />
      <main className="mainApp">
        <ProductList
          products={filterProduct}
          setCarrinho={setCurrentSale}
          itensCarrinho={currentSale}
        />
        <div className="carrinhoDiv">
          <CartProduct
            carrinho={currentSale}
            setCarrinho={setCurrentSale}
          />
          {currentSale.length > 0 &&
            <CartTotal
              carrinho={currentSale}
              setCarrinho={setCurrentSale} />
          }
        </div>
      </main>
    </div>
  );
}

export default App;
