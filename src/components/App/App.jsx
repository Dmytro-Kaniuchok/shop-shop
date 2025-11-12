import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "../Layout/Layout.jsx";
import Loader from "../Loader/Loader.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() =>
  import("../../pages/CatalogPage/CatalogPage.jsx")
);
const CartPage = lazy(() => import("../../pages/CartPage/CartPage.jsx"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage.jsx")
);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
