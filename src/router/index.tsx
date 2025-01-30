import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CartProvider } from "../contexts/cartContext/cartContext";
import { AuthProvider } from "../contexts/authContext/authContext";

// Lazy load components for code splitting
const LoginPage = lazy(() => import("../pages/loginPage"));
const AppLayout = lazy(() => import("../layout/appLayout"));
const Home = lazy(() => import("../pages/home"));
const Category = lazy(() => import("../pages/category"));
const Cart = lazy(() => import("../components/Cart/Cart"));
const DisplayPage = lazy(() => import("../pages/displayPage"));
const Products = lazy(() => import("../pages/products"));
const ProductDetails = lazy(() => import("../pages/productDetails"));
const CartCheckout = lazy(() => import("../components/Cart/CartCheckout"));
const BrowseCategory = lazy(() => import("../pages/browseCategory"));

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
