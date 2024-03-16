import { CartProvider } from "react-use-cart"
import ShopCard from "./components/ShopCard"

const App = () => {
  return <>
    <CartProvider>
      <ShopCard />
    </CartProvider>
  </>
}

export default App