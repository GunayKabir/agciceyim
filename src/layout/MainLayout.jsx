import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import BasketModal from '../components/BasketModal';
import { fetchDropdowns } from '../services/api';

function MainLayout({ basketItems, onAddToCart, onRemoveItem }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [dropdowns, setDropdowns] = useState([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  useEffect(() => {
    fetchDropdowns().then((res) => {
      setDropdowns(res.data);
    });
  }, []);

  return (
    <>
      <Header
        dropdowns={dropdowns}
        cartItems={basketItems}
        setIsBasketOpen={setIsBasketOpen}
      />

      {isHome && <Slider />}

      <main>
        <Outlet context={{ onAddToCart }} />
      </main>

      <Footer />

      {isBasketOpen && (
        <BasketModal
          items={basketItems}
          onClose={() => setIsBasketOpen(false)}
          removeItem={onRemoveItem}  // ✅ səbətdən silmək üçün funksiyanı göndər
        />
      )}
    </>
  );
}

export default MainLayout;
