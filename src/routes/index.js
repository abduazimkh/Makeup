import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "../layout/nav/Nav";
import Category from "../components/category/Category";
import { Loading } from "../utils";

const Home = lazy(() => import("../pages/home/Home"));
const Cart = lazy(() => import("../pages/cart/Cart"));
const Like = lazy(() => import("../pages/like/Like"));
const SingleCard = lazy(() => import("../components/single-cart/SingleCard"));

const RouteController = () => {
  return (
  <>
    <Nav/>
    <Routes>
      <Route path="" element={
        <Suspense fallback={<Loading/>}>
          <Home/>
        </Suspense>}
      />
      <Route path="cart" element={
        <Suspense fallback={<Loading/>}>
          <Cart/>
        </Suspense>}
      />
      <Route path="liked" element={
        <Suspense fallback={<Loading/>}>
          <Like/>
        </Suspense>}
      />
      <Route path="/single-card/:id" element={
        <Suspense fallback={<Loading/>}>
          <SingleCard/>
        </Suspense>}
      />

      <Route path="category/:name" element={<Category/>}
      />
    </Routes>
  </>
  )
}

export default RouteController;