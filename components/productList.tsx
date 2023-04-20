import React from 'react'
import ProductItem from './productItem'
import { Product } from '@/typings'

type Props = {
  products : Product[]
}

const ProductList = ({products}: Props) => {
  
  return (
    <div className="grid grid-flow-dense grid-cols-1 md:grid-cols-4 gap-5 mx-5 md:-mt-96 z-20">
      {products.map((product) => (
        <>
        <ProductItem key={product._id} product={product} />
        <ProductItem key={product._id} product={product} />
        <ProductItem key={product._id} product={product} />
        <ProductItem key={product._id} product={product} />
        <ProductItem key={product._id} product={product} />
        </>
      ))}
      
      
    </div>
  )
}

export default ProductList