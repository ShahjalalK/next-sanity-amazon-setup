import React from 'react'
import ProductItem from './productItem'
import { Home, Product } from '@/typings'

type Props = {
  products : Product[];
  homePage : Home[]
}

const ProductList = ({products, homePage}: Props) => {
   return (
    <div className="grid grid-flow-dense grid-cols-1 md:grid-cols-4 gap-5 mx-5 md:-mt-96 z-20">
      {products.map((product, i) => (        
        <div key={i}>
          <ProductItem product={product} homePage={homePage} />
        </div>
      ))}
      
      
    </div>
  )
}

export default ProductList