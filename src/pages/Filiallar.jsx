import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const filiallar = [
  { id: 1, name: 'Baş filial', coords: [40.4093, 49.8671] },
  { id: 2, name: 'Elmlər Akademiyası', coords: [40.3800, 49.8400] },
  { id: 3, name: 'Xətai', coords: [40.3667, 49.8100] },
  // digər filiallar buraya əlavə et...
];

function Filiallar() {
  const [selectedFilial, setSelectedFilial] = useState(null);

  return (
    <div className="py-10 px-4">
      {/* Başlıq */}
      <div className="text-center mb-6">
        <h2 style={{ fontFamily: "'Dancing Script', cursive" }} className="text-6xl sm:text-3xl font-bold mb-1">Filiallar</h2>
        <div className="w-16 h-1 bg-cyan-300 mx-auto rounded"></div>
      </div>

      {/* Dropdown + Map konteyner */}
      <div className="max-w-5xl mx-auto">
        {/* Dropdown */}
        <div className="mb-4 flex justify-start">
          <select
            onChange={(e) => {
              const id = Number(e.target.value);
              const filial = filiallar.find(f => f.id === id);
              setSelectedFilial(filial || null);
            }}
            defaultValue=""
            className="border border-gray-300 rounded px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <option value="" disabled>Siyahıdan seçin</option>
            {filiallar.map(filial => (
              <option key={filial.id} value={filial.id}>{filial.name}</option>
            ))}
          </select>
        </div>

        {/* Xəritə */}
        <div className="w-full h-[500px] rounded overflow-hidden shadow">
          <MapContainer
            center={selectedFilial ? selectedFilial.coords : [40.4093, 49.8671]}
            zoom={selectedFilial ? 13 : 11}
            className="w-full h-full"
            key={selectedFilial ? selectedFilial.id : 'default'}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
            />
            {selectedFilial && (
              <Marker position={selectedFilial.coords}>
                <Popup>{selectedFilial.name}</Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Filiallar;
