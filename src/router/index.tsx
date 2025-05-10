import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CartProvider } from "../contexts/cartContext/CartContext";
import { AuthProvider } from "../contexts/authContext/AuthContext";

// Lazy load components for code splitting
const LoginPage = lazy(() => import("../pages/Login"));
const AppLayout = lazy(() => import("../layout/AppLayout"));
const Home = lazy(() => import("../pages/Home"));
const Category = lazy(() => import("../pages/Category"));
const Cart = lazy(() => import("../components/Cart/Cart"));
const DisplayPage = lazy(() => import("../pages/Display"));
const Products = lazy(() => import("../pages/Products"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const CartCheckout = lazy(() => import("../components/Cart/CartCheckout"));
const BrowseCategory = lazy(() => import("../pages/BrowseCategory"));

const Index: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          {/* Suspense component for fallback loading indicators */}
          <Suspense
            fallback={
              <div className="w-full flex justify-center">Loading...</div>
            }
          >
            <Routes>
              <Route path="/" element={<DisplayPage />} />
              <Route path="/" element={<AppLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="category" element={<Category />} />
                <Route path="products" element={<Products />} />
                <Route path="productDetails/:id" element={<ProductDetails />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<CartCheckout />} />
                <Route
                  path="browseCategory/:name"
                  element={<BrowseCategory />}
                />
              </Route>
              <Route path="login" element={<LoginPage />} />
            </Routes>
          </Suspense>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default Index;
