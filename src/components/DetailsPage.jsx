import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import pluse from '../assets/img/plus.png';

const DetailsPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null)
      const [related, setRelated] = useState([]);

useEffect(() => {
    // fetch single product
    fetch(`http://localhost:3000/manproducts/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));

    // fetch related products
    fetch(`http://localhost:3000/manproducts/${id}/related`)
      .then(res => res.json())
      .then(data => setRelated(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

    return (
        // <div className="card bg-base-100 w-96 shadow-sm mx-auto mt-10">
        //     <figure>
        //         <img src={product.images?.[0]} alt={product.title} />
        //     </figure>
        //     <div className="card-body">
        //         <h2 className="card-title">
        //             {product.title}
        //             <div className="badge badge-secondary">{product.collection}</div>
        //         </h2>
        //         <p>{product.shortDescription}</p>
        //         <p className="font-bold text-lg">
        //             {product.price} {product.currency}
        //         </p>
        //         <div className="card-actions justify-end">
        //             <div className="badge badge-outline">{product.category}</div>
        //             <div className="badge badge-outline">⭐ {product.rating}</div>
        //         </div>
        //     </div>
        // </div>





        <div className="container mx-auto mt-8">
      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <img src={product.images[0]} alt={product.title} className="mx-auto" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-[#AA8265]">{product.category} / {product.collection}</p>
          <div className="font-bold text-xl mt-2">{product.price} {product.currency}</div>
          <p className="mt-4">{product.shortDescription}</p>
        </div>
      </div>

      {/* Related Products */}
      <h2 className="text-xl font-bold mt-8 mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {related.map(item => (
          <Link key={item._id} to={`/product/${item._id}`}>
            <div className="bg-neutral-100 p-2 relative">
              <img src={item.images[0]} alt={item.title} className="mx-auto" />
              <div className="absolute top-2 left-2 bg-[#E9E2D8] px-2 py-1 text-xs font-bold">{item.discount || 'New'}</div>
              <img src={pluse} alt="plus" className="absolute top-2 right-2 w-6 border p-1" />
              <h6 className="font-bold mt-2">{item.title}</h6>
              <small className="text-[#AA8265]">{item.category}</small>
              <div className="font-bold mt-1">{item.price} {item.currency}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    );
};

export default DetailsPage;