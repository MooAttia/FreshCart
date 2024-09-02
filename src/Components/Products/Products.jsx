import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../Context/CartContext';
import { WishContext } from '../Context/WishlistContext';
import Loading from '../Loading/Loading';

export default function Products() {
    let { addProduct } = useContext(CartContext);
    let { addProductToWishlist, removeProduct, wish } = useContext(WishContext);
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    async function getProducts() {
        try {
            let { data } = await axios("https://ecommerce.routemisr.com/api/v1/products");
            setProducts(data.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const isInWishlist = (productId) => {
        return wish?.data.some((item) => item.id === productId);
    };

    const handleWishlistClick = (productId) => {
        if (isInWishlist(productId)) {
            removeProduct(productId);
        } else {
            addProductToWishlist(productId);
        }
    };

    return (
        <>
            <h1 className="text-4xl text-center text-green-500 mb-5">All Products</h1>
            <hr className='pb-4 w-56 mx-auto' />
            <div className='flex justify-center py-4'>
                <input type="text" className='border-green-500 w-1/2 text-center py-2 rounded-full border-2' placeholder='Search for product' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            {filteredProducts.length ? (
                <div className="flex flex-wrap">
                    {filteredProducts.map((product, index) => (
                        <div key={index} className="w-1/4 p-10 product overflow-hidden hover:border hover:border-green-600 hover:rounded-xl hover:shadow-lg hover:shadow-green-600 ease-in-out duration-200">
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
                            </Link>
                            <div className='flex justify-between mt-2'>
                                <button onClick={() => handleWishlistClick(product.id)} className='bg-white px-5 py-2 rounded-md text-black'>
                                    <i className={`fa-heart fa-xl ${isInWishlist(product.id) ? 'fa-solid text-red-500' : 'fa-regular'}`}></i>
                                </button>
                                <button onClick={() => addProduct(product.id)} className='bg-green-600 px-5 py-2 rounded-md text-white btn'>+Add</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='flex justify-center py-20'>
                    <Loading />
                </div>
            )}
        </>
    );
}
