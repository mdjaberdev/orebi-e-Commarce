
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayouts from './components/layouts/RootLayouts'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import About from './components/pages/About'
import Contacts from './components/pages/Contacts'
import Myaccount from './components/pages/Myaccount'
import Cart from './components/pages/Cart'
import Checkout from './components/pages/Checkout'
import Error from './components/pages/Error'
import ProductsInside from './components/pages/ProductsInside'
import Login from './components/pages/Login'
import Singup from './components/pages/Singup'
import ReactLenis from 'lenis/react'

function App() {

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products_inside" element={<ProductsInside />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/myaccount" element={<Myaccount />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </ReactLenis>
  );
}

export default App
