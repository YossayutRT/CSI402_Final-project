import React, { useState } from 'react';
import { Search, ShoppingBag, ArrowRight, Star, Plus } from 'lucide-react'; // Professional Icons
// อย่าลืม import icons ที่ต้องใช้เพิ่มตามหมวดหมู่

// Mock Data
const MOCK_PRODUCTS = [
  { id: 1, name: 'Artisan Sourdough', category: 'Bread', price: 120, image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&q=80&w=800', description: 'หมักธรรมชาติ 48 ชม.' },
  { id: 2, name: 'French Butter Croissant', category: 'Pastry', price: 85, image: 'https://images.unsplash.com/photo-1555507036-ab1f40388085?auto=format&fit=crop&q=80&w=800', description: 'เนยแท้ AOP นำเข้าจากฝรั่งเศส' },
  { id: 3, name: 'Classic Strawberry Shortcake', category: 'Cake', price: 150, image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800', description: 'ครีมสดแท้ เนื้อนุ่มละลาย' },
  { id: 4, name: 'Dark Chocolate Cookie', category: 'Cookie', price: 45, image: 'https://images.unsplash.com/photo-1499636138143-bd649043ea52?auto=format&fit=crop&q=80&w=800', description: 'ช็อกโกแลตเบลเยี่ยมเข้มข้น' },
  { id: 5, name: 'Traditional Baguette', category: 'Bread', price: 60, image: 'https://images.unsplash.com/photo-1597079910443-60c43fc4f756?auto=format&fit=crop&q=80&w=800', description: 'กรอบนอกนุ่มใน สูตรดั้งเดิม' },
  { id: 6, name: 'Uji Matcha Latte', category: 'Beverage', price: 90, image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&q=80&w=800', description: 'มัทฉะเกรดพรีเมียมจากเกียวโต' },
];

const CATEGORIES = [
  { id: 'all', name: 'All Menu' },
  { id: 'Bread', name: 'Bread' },
  { id: 'Cake', name: 'Cake' },
  { id: 'Cookie', name: 'Cookie' },
  { id: 'Pastry', name: 'Pastry' },
  { id: 'Beverage', name: 'Beverage' },
];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content">
          <span className="hero-badge">Since 2026</span>
          <h1 className="hero-title">
            Crafting Happiness <br /> <span className="highlight">One Bite at a Time</span>
          </h1>
          <p className="hero-subtitle">
            สัมผัสรสชาติเบเกอรี่โฮมเมดระดับพรีเมียม อบสดใหม่ทุกเช้าด้วยวัตถุดิบนำเข้า <br/>
            ใส่ใจในทุกรายละเอียด เพื่อช่วงเวลาพิเศษของคุณ
          </p>
          
          {/* Search Bar in Hero */}
          <div className="search-wrapper">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="ค้นหาเมนูโปรดของคุณ..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn-search">Search</button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-section container">
        <div className="category-list">
          {CATEGORIES.map(cat => (
            <button 
              key={cat.id} 
              className={`category-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="product-section container">
        <div className="section-header">
          <h2 className="section-title">Our Signature</h2>
          <p className="section-desc">เมนูแนะนำที่ผ่านการคัดสรรมาอย่างดี</p>
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="empty-state">
            <ShoppingBag size={48} />
            <p>ไม่พบสินค้าที่คุณค้นหา</p>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="card-image-wrapper">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="card-overlay">
                    <button className="btn-quick-view" onClick={() => alert('Please login to order')}>
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-meta">{product.category}</div>
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-desc">{product.description}</p>
                  <div className="card-footer">
                    <span className="price">฿{product.price}</span>
                    <button className="btn-add" onClick={() => alert('Please login')}>
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;