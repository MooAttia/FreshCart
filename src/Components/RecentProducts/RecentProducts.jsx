import React from 'react';
import { Link } from 'react-router-dom';

export default function RecentProducts({ product, addProduct , addProductToWishlist  }) {
    
    return (
        <div className="w-1/4 p-10 product overflow-hidden hover:border hover:border-green-600 hover:rounded-xl hover:shadow-lg hover:shadow-green-600 ease-in-out duration-200">
            <Link to={`/productdetails/${product.id}/${product.category.name}`}>
                <div>
                    <img src={product.imageCover} alt={product.title} />
                    <h2 className='py-2 text-green-500'>{product.category.name}</h2>
                    <h2 className='py-2 font-bold'>{product.title.split(' ').slice(0, 2).join(' ')}</h2>
                </div>
                <div className='flex justify-between'>
                    <h3>{product.price} EGP</h3>
                    <h3><i className='fas fa-star text-yellow-300'></i> {product.ratingsAverage}</h3>
                </div>
                <div>
                </div>
                
            </Link>
            <button onClick={() => addProductToWishlist(product.id)} className='bg-white-600 px-5 py-2 rounded-md text-white w-full   my-2'><i className="fa-regular fa-xl fa-heart text-black"></i></button>
            <button onClick={() => addProduct(product.id)} className='bg-green-600 px-5 py-2 rounded-md text-white w-full mt-2 btn'>+Add</button>
        </div>
    );
}

                
