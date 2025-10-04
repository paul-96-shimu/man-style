import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DetailsPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/manproducts/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="card bg-base-100 w-96 shadow-sm mx-auto mt-10">
            <figure>
                <img src={product.images?.[0]} alt={product.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.title}
                    <div className="badge badge-secondary">{product.collection}</div>
                </h2>
                <p>{product.shortDescription}</p>
                <p className="font-bold text-lg">
                    {product.price} {product.currency}
                </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{product.category}</div>
                    <div className="badge badge-outline">⭐ {product.rating}</div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;