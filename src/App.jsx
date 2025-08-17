import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./components/Home";
import Xidmetler from "./pages/Xidmetler";
import Catdirilma from "./pages/Catdirilma";
import Filiallar from "./pages/Filiallar";
import Statuslar from "./pages/Statuslar";
import SignUp from "./pages/SignUp";
import SocialChatButton from "./components/SocialChatButton";
import CategoryLayout from "./layout/CategoryLayout";
import BasketButton from "./components/BasketButton";
import { Toaster, toast } from "react-hot-toast";
import BasketModal from "./components/BasketModal";
import CheckoutPage from "./pages/CheckoutPage";
import Detail from "./pages/Detail";
import DetailLayout from "./layout/DetailLayout";
import SalePage from "./pages/SalePage";
import BuketYarat from "./pages/BuketYarat";
import SifarisStatusu from "./pages/SifarisStatusu";
import Loader from "./components/Loader";


function App() {
  const [loading, setLoading] = useState(true);
  const [basketItems, setBasketItems] = useState([]);
  const [isBasketOpen, setBasketOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; // ⬅️ Bu hissə burda olmalıdır

  const handleAddToCart = (product) => {
    const existingItem = basketItems.find((item) => item.id === product.id);
    const quantityToAdd = product.quantity || 1;

    const updatedBasket = existingItem
      ? basketItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        )
      : [...basketItems, { ...product, quantity: quantityToAdd }];

    setBasketItems(updatedBasket);

    if (!existingItem) {
      toast.success(`${product.name} səbətə əlavə olundu`);
    }
  };

  const handleRemoveItem = (id) => {
    const updatedBasket = basketItems.filter((item) => item.id !== id);
    setBasketItems(updatedBasket);
    toast.success("Məhsul səbətdən silindi!");
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route
          path="/"
          element={
            <MainLayout
              basketItems={basketItems}
              setBasketItems={setBasketItems}
              onAddToCart={handleAddToCart}
              onRemoveItem={handleRemoveItem}
              basketButton={
                <BasketButton
                  itemCount={basketItems.length}
                  onClick={() => setBasketOpen(true)}
                />
              }
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="xidmetler" element={<Xidmetler />} />
          <Route path="catdirilma" element={<Catdirilma />} />
          <Route path="filiallar" element={<Filiallar />} />
          <Route path="statuslar" element={<Statuslar />} />
          <Route path="signup" element={<SignUp />} />

          {/* Kategoriya və subkategoriya */}
         <Route path=":categorySlug/:subSlug?"element={<CategoryLayout onAddToCart={handleAddToCart} />}/>


          {/* Məhsul detalları */}
         <Route path="detail/:id" element={<DetailLayout onAddToCart={handleAddToCart} />}>
  <Route index element={<Detail />} />
</Route>



          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="/endirimler" element={<SalePage />} />
         <Route path="/buket-yarat"  element={<BuketYarat  onAddToCart={handleAddToCart} openBasket={() => setBasketOpen(true)} />} />

          <Route path="/sifaris-statusu" element={<SifarisStatusu />} />
        </Route>
      </Routes>

      {/* Səbət modalı */}
      {isBasketOpen && (
        <BasketModal
          items={basketItems}
          onClose={() => setBasketOpen(false)}
          removeItem={handleRemoveItem}
        />
      )}

      <SocialChatButton />
    </>
  );
}

export default App;
