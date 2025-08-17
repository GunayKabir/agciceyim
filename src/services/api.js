import axios from 'axios';

// 🌐 Backend linkin
const BASE_URL = 'https://flowerdata.onrender.com'; 
// Əgər local `json-server` istifadə edirsənsə: 'http://localhost:3000'

// 🔐 Auth üçün ayrıca Axios instance
export const authInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Slugify funksiyası (əlavə string formatlama üçün)
export const slugify = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w-]+/g, "");

// ✅ Digər API funksiyaları
export const fetchCategories = () => axios.get(`${BASE_URL}/Category`);
export const fetchDropdowns = () => axios.get(`${BASE_URL}/dropdowns`);
export const fetchUsers = () => axios.get(`${BASE_URL}/users`);

export const fetchProducts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/product`);
    const enriched = res.data.map((item) => ({
      ...item,
      group: item.group || "Buketlər",
      category: item.category || "Qızılgül",
    }));
    return { data: enriched };
  } catch (error) {
    console.error("Məhsullar yüklənmədi:", error);
    return { data: [] };
  }
};
