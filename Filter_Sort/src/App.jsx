import { useState } from 'react';
import './App.css';

function App() {
  const [mobiles, setMobiles] = useState([
    { brand: 'Apple', model: 'iPhone 13', info: 'A15 Bionic chip, 5G enabled, Dual-camera system', image: 'https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg'},
    { brand: 'Apple', model: 'iPhone 14 Pro', info: 'A16 Bionic chip, ProMotion display, Triple-camera system', image: 'https://m.media-amazon.com/images/I/71ZDY57yTQL._SL1500_.jpg'},
    { brand: 'Samsung', model: 'Galaxy S21', info: 'Exynos 2100, 120Hz display, Triple-camera system', image: 'https://m.media-amazon.com/images/I/614UStvPFKL._SL1000_.jpg'},
    { brand: 'Samsung', model: 'Galaxy Note 20', info: 'S Pen support, Exynos 990, Triple-camera system', image: 'https://m.media-amazon.com/images/I/71eVZFpYUvL._SL1500_.jpg'},
    { brand: 'OnePlus', model: '9 Pro', info: 'Snapdragon 888, 120Hz Fluid Display, Hasselblad Camera', image: 'https://m.media-amazon.com/images/I/41GxvNQyFyS._SX300_SY300_QL70_FMwebp_.jpg'},
    { brand: 'OnePlus', model: '10 Pro', info: 'Snapdragon 8 Gen 1, 120Hz AMOLED Display, Improved Cooling', image: 'https://m.media-amazon.com/images/I/61mIUCd-37L._AC_UY327_FMwebp_QL65_.jpg'},
    { brand: 'Google', model: 'Pixel 6', info: 'Google Tensor chip, 90Hz display, Advanced Camera Features', image: 'https://m.media-amazon.com/images/I/41i1sZFOLOL._SX300_SY300_QL70_FMwebp_.jpg'},
    { brand: 'Google', model: 'Pixel 7 Pro', info: 'Google Tensor G2, 120Hz LTPO OLED, Enhanced Camera System', image: 'https://m.media-amazon.com/images/I/615rI0PoyOL.__AC_SX300_SY300_QL70_FMwebp_.jpg'},
    { brand: 'Xiaomi', model: 'Mi 11', info: 'Snapdragon 888, 120Hz AMOLED Display, Triple-camera system', image: 'https://m.media-amazon.com/images/I/41Y52jD863S._SX300_SY300_QL70_FMwebp_.jpg'},
    { brand: 'Xiaomi', model: 'Redmi Note 11', info: 'Snapdragon 680, 90Hz display, Quad-camera setup', image: 'https://m.media-amazon.com/images/I/4121yWSVFmL._SX300_SY300_QL70_FMwebp_.jpg'},
    { brand: 'Sony', model: 'Xperia 5 III', info: 'Snapdragon 888, 120Hz OLED Display, Triple-camera system', image: 'https://m.media-amazon.com/images/I/61r6pYjE9NL.__AC_SX300_SY300_QL70_FMwebp_.jpg'},
    { brand: 'Sony', model: 'Xperia 1 IV', info: 'Snapdragon 8 Gen 1, 120Hz 4K HDR OLED, Advanced Photography', image: 'https://m.media-amazon.com/images/I/51nfiDXOOqL.__AC_SX300_SY300_QL70_FMwebp_.jpg'},
    { brand: 'Motorola', model: 'Moto G Power', info: 'Snapdragon 662, 60Hz display, Triple-camera system', image: 'https://m.media-amazon.com/images/I/41Fsy5ayFKL._SX300_SY300_QL70_FMwebp_.jpg'},
    { brand: 'Motorola', model: 'Moto Edge 30', info: 'Snapdragon 778G, 144Hz AMOLED Display, Triple-camera system', image: 'https://m.media-amazon.com/images/I/71-bvinpbYL._SX569_.jpg'},
    { brand: 'Huawei', model: 'P50 Pro', info: 'Kirin 9000, 120Hz OLED Display, Quad-camera system', image: 'https://m.media-amazon.com/images/I/41jXYwZ-0WL._SX300_SY300_QL70_FMwebp_.jpg'},
    { brand: 'Huawei', model: 'Mate 40 Pro', info: 'Kirin 9000, 90Hz OLED Display, Triple-camera system', image: 'https://m.media-amazon.com/images/I/417E3gDr7PL.__AC_SX300_SY300_QL70_FMwebp_.jpg'}
  ]);

  const [sortKey, setSortKey] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMobiles = mobiles.filter((mobile) =>
    mobile.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mobile.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Mobile Brands and Models</h1>
      
      <div className="controls">
        <input type="text" placeholder="Search Mobile" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="search-input"/>
      </div>

      <div className="controls">
        <select className="sort-select" onChange={(e) => setSortKey(e.target.value)} value={sortKey}>
          <option value="all">All</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="OnePlus">One Plus</option>
          <option value="Google">Google</option>
          <option value="Xiaomi">Xiaomi</option>
          <option value="Sony">Sony</option>
          <option value="Motorola">Motorola</option>
          <option value="Huawei">Huawei</option>
        </select>
      </div>

      <div className="mobile-list">
        {filteredMobiles.length > 0 ? (
          filteredMobiles.map((mobile, index) => {
            if(sortKey === "all" || sortKey === mobile.brand){
              return (
                <div className="mobile-item">
                  <div className="image-container">
                    <img src={mobile.image} alt={mobile.model} className="mobile-image" />
                  </div>
                  <h3 className="mobile-title">{mobile.brand} - {mobile.model}</h3>
                  <p className="mobile-info">{mobile.info}</p>
                </div>
              );
            } else {
              return null;
            }
          })
        ) : (
          <p className="no-results">No mobiles found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
