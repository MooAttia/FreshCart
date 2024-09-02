import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import Categories from './../Categories/Categories';
import axios from 'axios';


export default function CategorySlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    const [categories, setCategories] = useState([])

    async function getCategories() {
        try {
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
            setCategories(data.data)
            // console.log('heel'+ data.data);
            
        }
        catch(err){
            console.log(err);
            
        }
    }
    useEffect(() => {
        getCategories();
    } ,[])
    return <>
            <Slider {...settings}>
                {categories?.map((category, index) => (
                    <div key={index} >
                        <img src={category.image} className='w-full h-[200px] my-5' alt={category.image } />
                        <h3 className='text-center text-lg font-semibold'>{category.name}</h3>
                    </div>
                ))}
            </Slider>
        </>
    }
