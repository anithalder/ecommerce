import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import { Auth0Provider } from "@auth0/auth0-react";
import Product from "./components/Products/Product.jsx";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Orders from "./components/Orders/Orders.jsx";
import OrderDetail from "./components/Orders/OrderDetail.jsx";
import Error from "./Error.jsx";
import { Provider } from "react-redux";
import store from "./state/store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<Home />} />
      <Route path="/register" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="product" element={<Product />} />
      <Route path="product/:productId" element={<ProductDetail />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="account/order" element={<Orders />} />
      <Route path="account/order/:orderId" element={<OrderDetail />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <Auth0Provider
      domain="dev-sqs130jpqkzcr31a.us.auth0.com"
      clientId="sbKJ6Jh2wAlMTfEcTU2iwpUo17Em8mLC"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    > */}
    <RouterProvider router={router} />
    {/* </Auth0Provider> */}
  </Provider>
  // </React.StrictMode>
);
