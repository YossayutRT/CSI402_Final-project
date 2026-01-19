import React from 'react';
import Home from './pages/public/Home.jsx';
import './index.css'; 
import logo from './assets/BakeQuery_Logo.png'; 
import { User, ShoppingBag, Menu } from 'lucide-react'; // Icons

function App() {
  return (
    <div className="app-wrapper">
      
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-inner">
          <div className="nav-brand">
            <img src={logo} alt="BakeQuery" className="nav-logo" />
            <span className="brand-text">BakeQuery</span>
          </div>
          
          <div className="nav-menu">
            <a href="#" className="nav-link active">Home</a>
            <a href="#" className="nav-link">Menu</a>
            <a href="#" className="nav-link">Story</a>
            <a href="#" className="nav-link">Promotions</a>
          </div>

          <div className="nav-actions">
             <button className="icon-btn">
               <ShoppingBag size={20} />
             </button>
             <button className="btn-login">
               <User size={16} />
               <span>Login</span>
             </button>
             {/* Mobile Menu Button */}
             <button className="icon-btn mobile-only">
               <Menu size={20} />
             </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Home />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-col">
            <h4>BakeQuery</h4>
            <p>Premium Homemade Bakery</p>
          </div>
          <div className="footer-col">
            <p>© 2026 BakeQuery. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;