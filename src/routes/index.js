import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "../layout/nav/Nav";

const Home = lazy(() => import("../pages/home/Home"));
const Cart = lazy(() => import("../pages/cart/Cart"));
const Like = lazy(() => import("../pages/like/Like"));


const RouteController = () => {
  return (
  <>
    <Nav/>
    <Routes>
      <Route path="" element={
        <Suspense fallback={<p>Loading...</p>}>
          <Home/>
        </Suspense>}
      />
      <Route path="cart" element={
        <Suspense fallback={<p>Loading...</p>}>
          <Cart/>
        </Suspense>}
      />
      <Route path="liked" element={
        <Suspense fallback={<p>Loading...</p>}>
          <Like/>
        </Suspense>}
      />
    </Routes>
  </>
  )
}

export default RouteController;