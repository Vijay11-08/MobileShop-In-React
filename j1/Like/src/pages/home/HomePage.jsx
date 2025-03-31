import React from 'react'
import Layout from '../../components/layout/layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Category from '../../components/category/Category'

export default function HomePage() {
  return (
    <Layout>
        <HeroSection />
        <Category />
       
    </Layout>
  )
}
