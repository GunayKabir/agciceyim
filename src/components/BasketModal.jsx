import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function BasketModal({ onClose, items, removeItem })  {
  const navigate = useNavigate();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate("/checkout", { state: { items, total } });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end">
      <div className="bg-white w-[300px] h-full p-4 overflow-y-auto relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl text-gray-500"
        >
          &times;
        </button>

        <h2 className="text-lg font-semibold mb-4">Səbət</h2>

        {items.length === 0 ? (
          <p>Səbət boşdur.</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-2 border-b pb-2">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-600">
                    {item.quantity} × {item.price.toFixed(2)} ₼
                  </p>
                 
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400 hover:text-red-500 text-lg"
                >
                  <FiTrash2 />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 border-t pt-2 text-right font-semibold">
          Cəmi: {total.toFixed(2)} ₼
        </div>

        <button
          onClick={handleCheckout}
          className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded"
        >
          Sifarişi tamamla
        </button>
      </div>
    </div>
  );
}
