import { CartProvider } from './context/CartContext'; // Correct import for CartProvider
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Listing from './pages/Listing'; // Listing page where addToCart is used
import PlaceOrder from './pages/PlaceOrder';
import Navbar from './components/Navbar'; // Navbar component for navigation
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import SeeOrder from './pages/SeeOrder';

const App = () => {
  return (
    <CartProvider> {/* Wrap the entire app with CartProvider */}
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/listing/:category" element={<Listing />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/see-order" element={<SeeOrder />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
