import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Category from '../../components/category/Category'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import HomePageProductCard from '../../components/productCard/ProductCard'

export default function HomePage() {
  return (
    <Layout>
        <HeroSection />
        <Category />
        
       
        <br></br>                                                                      
         <ProductCard />    
         <Track /> 
         <Testimonial/>
       
    </Layout>
  )
}
