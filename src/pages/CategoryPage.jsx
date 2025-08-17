// pages/CategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { group, category } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Kateqoriya Səhifəsi</h1>
      <p><strong>Qrup:</strong> {group}</p>
      <p><strong>Kateqoriya:</strong> {category}</p>
    </div>
  );
}

export default CategoryPage;
