import React, { useState, useEffect } from 'react';
import pluse from '../assets/img/plus.png';


const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/manproducts')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Search Products</h1>

      <input
        type="text"
        placeholder="Search by product name..."
        className="border p-2 rounded w-full mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
      



         <section className="bg-[#FFF]">
      <div className="container mx-auto mt-[80px]">
        <h1 className="text- primary text-[36px] font-bold instrument-sans">
          TOP PICKS FOR YOU
        </h1>

        <div className="mt-8 md:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-[42px]">
          {filteredProducts.map((item) => (
            <div key={item._id} to={`/product/${item._id}`}>
              <div className="bg-neutral-100 rounded-md  shadow hover:shadow-lg transition">
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={
                      item.images && item.images.length > 0
                        ? item.images[0]
                        : '/placeholder.jpg'
                    }
                    alt={item.title}
                    className=" "
                  />
                  <div className="absolute top-2 left-0 right-0 flex justify-between px-2">
                    {item.discount && (
                      <small className="text-[#5B3E38] font-bold bg-[#E9E2D8] px-3 py-1 text-xs sm:text-sm instrument-sans">
                        {item.discount}% off
                      </small>
                    )}
                    <img
                      src={pluse}
                      alt="plus"
                      className="w-6 border border-[#E9E2D8] p-1 bg-white"
                    />
                  </div>
                </div>
              </div>
              {/* Content Section */}
              <div className="mt-2 p-2 sm:p-1 md:p-1">
                <h6 className="instrument-sans text-[#5B3E38] text-sm sm:text-base md:text-[16px] mt-3 font-bold">
                  {item.title}
                </h6>
                <small className="text-[#AA8265] text-xs sm:text-sm md:text-[14px] font-semibold instrument-sans mt-2 block">
                  {item.category}
                </small>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[#5B3E38] font-bold text-lg sm:text-xl md:text-[24px]">
                    {item.discount
                      ? ((item.price - (item.price * item.discount) / 100).toFixed(2))
                      : item.price}{' '}
                    {item.currency}
                  </span>
                  {item.discount && (
                    <span className="text-[#6D6D6D] text-sm sm:text-base md:text-[16px] font-semibold line-through">
                      {item.price} {item.currency}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
      )}
    </div>
  );
};

export default SearchPage;
