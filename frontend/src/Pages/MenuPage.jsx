import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { data } from '../restApi.json';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Extract all dishes
  const allDishes = data[0].dishes;
  
  // Get unique categories and prepend 'All'
  const categories = ['All', ...new Set(allDishes.map(dish => dish.category))];

  // Filter dishes based on selection
  const filteredDishes = selectedCategory === 'All' 
    ? allDishes 
    : allDishes.filter(dish => dish.category === selectedCategory);

  return (
    <>
      <Navbar />
      <section className="menu-page">
        <div className="menu-banner">
          <div className="banner-content">
            <h1>OUR MENU</h1>
            <p>Savor the culinary creations crafted with love, precision, and the freshest ingredients.</p>
          </div>
        </div>

        <div className="menu-container">
          {/* Category Filter Tabs */}
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Dishes Grid */}
          <div className="dishes_container">
            {filteredDishes.map((element) => {
              return (
                <div className="card" key={element.id}>
                  <img src={element.image} alt={element.title} />
                  <h3>{element.title}</h3>
                  <button>{element.category}</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MenuPage;
