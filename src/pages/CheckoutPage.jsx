import { useLocation } from "react-router-dom";

function CheckoutPage() {
  const location = useLocation();
  const { items = [], total = 0 } = location.state || {};

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 mt-2">
  <div className="text-center">
<div className="text-center mb-6">
  <h1
    style={{ fontFamily: "'Dancing Script', cursive" }}
    className="text-2xl sm:text-4xl font-bold"
  >
    Sifarişin rəsmiləşdirilməsi
  </h1>
  <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full mt-2"></div>
</div>


</div>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-2">
        {/* ✅ SOL PANEL */}
        <div className="bg-white border rounded shadow p-4 sm:p-6 space-y-4">
          <h2 className="text-base sm:text-lg font-semibold">Müştəri məlumatları</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Ad, Soyad</label>
              <input type="text" className="w-full border rounded px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Əlaqə nömrəsi</label>
              <input type="text" className="w-full border rounded px-3 py-2 text-sm" />
            </div>
          </div>

          <h2 className="text-base sm:text-lg font-semibold">Çatdırılma məlumatları</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Çatdırılma üsulu</label>
              <select className="w-full border rounded px-3 py-2 text-sm">
                <option value="">Seçin</option>
                <option value="delivery">Çatdırılma</option>
                <option value="pickup">Özüm aparacağam</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Tarix</label>
                <input type="date" className="w-full border rounded px-3 py-2 text-sm" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Vaxt</label>
                <input type="time" className="w-full border rounded px-3 py-2 text-sm" />
              </div>
            </div>

            <p className="text-sm text-gray-500 italic pt-1">
              Məhsullar çatdırılma vaxtından minimum 2 saat öncə sifariş olunmalıdır.
            </p>

            <div>
              <label className="block text-sm font-medium mb-1">
                Əlavə məlumat və qeydlər
              </label>
              <textarea rows={3} className="w-full border rounded px-3 py-2 text-sm" />
            </div>

            <div className="flex items-start gap-2 mt-2">
              <input type="checkbox" />
              <span className="text-sm">Şərtlər və qaydalar ilə razıyam</span>
            </div>

            <button
              disabled
              className="w-full mt-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded disabled:opacity-50 text-sm"
            >
              Sifariş
            </button>
          </div>
        </div>

        {/* ✅ SAĞ PANEL */}
        <div>
          <div className="bg-cyan-300 text-white rounded-t px-4 py-3 font-semibold text-base sm:text-lg">
            Seçiminiz
          </div>
          <div className="border border-t-0 rounded-b p-4 bg-white shadow space-y-3 text-sm">
            <div className="flex justify-between text-gray-500 font-medium border-b pb-1">
              <span>Məhsul</span>
              <span>Qiymət</span>
            </div>
            {items.length === 0 ? (
              <p>Məhsul seçilməyib.</p>
            ) : (
              items.map((item, index) => (
                <div key={index} className="border-b py-1">
                  <div className="flex justify-between">
                    <span>{item.title}</span>
                    <span>{(item.price * item.quantity).toFixed(2)} ₼</span>
                  </div>
                  <div className="text-s text-gray-500 pl-2">
                    {item.name} <br />- kod {item.code || "0000"} × {item.quantity}
                  </div>
                </div>
              ))
            )}

            <div className="flex justify-between pt-3 font-bold text-gray-800">
              <span>Çatdırılma</span>
              <span>0.00 ₼</span>
            </div>
            <div className="flex justify-between font-bold text-cyan-600 text-base sm:text-lg">
              <span>Ümumi məbləğ:</span>
              <span>{total.toFixed(2)} ₼</span>
            </div>

            <div className="pt-4 space-y-3 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" checked readOnly />
                Kartla online ödəniş
                <img src="/5.png" alt="Visa/MasterCard" className="h-5 ml-2" />
              </label>

              <label className="flex items-start gap-2">
                <input type="checkbox" />
                <span>Şərtlər və qaydalar ilə razıyam</span>
              </label>

              <button
                disabled
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded disabled:opacity-50 text-sm"
              >
                Sifariş
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
