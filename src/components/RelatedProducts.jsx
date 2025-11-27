import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

const RelatedProducts = () => {
  const { category } = useParams();
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetch(`https://y-three-blond.vercel.app//manproducts?category=${category}`)
      .then((res) => res.json())
      .then((data) => setRelated(data))
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold text-primary">
        Related Products in {category}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {related.map((item) => (
          <Link key={item._id} to={`/product/${item._id}`}>
            <div className="bg-neutral-100 rounded-md overflow-hidden shadow">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-3">
                <h6 className="text-[#5B3E38] font-bold">{item.title}</h6>
                <small className="text-[#AA8265]">{item.category}</small>
                <p className="text-[#5B3E38] font-bold">
                  {item.price} {item.currency}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
