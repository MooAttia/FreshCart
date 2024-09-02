import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import Loading from '../Loading/Loading';
import { CartContext } from '../Context/CartContext';

export default function ProductDetails() {
  let { addProduct } = useContext(CartContext);
  let { id, category } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const relatedSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  async function fetchProductDetails(id) {
    try {
      const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
      setProductDetails(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setLoading(false);
    }
  }

  async function fetchRelatedProducts(category) {
    try {
      const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/`);
      const filteredProducts = data.data.filter(product => product.category.name === category);
      setRelatedProducts(filteredProducts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching related products:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductDetails(id);
    fetchRelatedProducts(category);
  }, [id, category]);

  return (
    <>
      <h1 className="py-5 text-4xl text-center text-green-500 font-semibold">Product Details</h1>
      <hr className='pb-4 w-56 mx-auto' />
      {loading ? (
        <div className='flex justify-center py-20'>
          <Loading />
        </div>
      ) : (
        <>
          <div className="flex items-center">
            <div className="w-1/4">
              <Slider {...settings}>
                {productDetails.images?.map((image, index) => (
                  <img key={index} src={image} className='w-full' alt={productDetails.title} />
                ))}
              </Slider>
            </div>
            <div className="w-3/4">
              <h2>{productDetails.title}</h2>
              <p className='my-6'>{productDetails.description}</p>
              <h3>{productDetails.category?.name}</h3>
              <div className='flex justify-between my-3'>
                <h3>{productDetails.price} EGP</h3>
                <h3><i className='fas fa-star text-yellow-400 px-2'></i>{productDetails.ratingsAverage}</h3>
              </div>
              <button onClick={() => addProduct(productDetails.id)} className='bg-green-500 px-5 py-2 rounded-md text-white w-full mt-2'>Add to Cart</button>
            </div>
          </div>
          <div className='mt-10'>
            <Slider {...relatedSettings}>
              {relatedProducts.map((product, index) => (
                <div key={index}>
                  <img src={product.imageCover} className='w-[200px]' alt={product.title} />
                  <h2 className='text-center py-4 text-green-500'>{product.category.name}</h2>
                </div>
              ))}
            </Slider>
          </div>
        </>
      )}
    </>
  );
}
