import React from 'react'
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { getProducts } from '../../api/apiServices'
import { ProductsType } from '../../types'
import { ProductCard } from '../productCard'
import { Loading } from '../loading'


export const ProductsList: React.FC = () => {

  const { data: products, isError, error, isLoading } = useQuery<ProductsType[], Error>({
    queryKey: ['products'],
    queryFn: getProducts,
  })



  // const { data: categories, isError, error, isLoading } = useQuery<CategoryesType[], Error>({
  //   queryKey: ['categories'],
  //   queryFn: getCategories,
  // })


  if (isLoading) return <Loading />

  if (isError) {
    toast.error(error?.message || 'An error occurred while fetching products')
    return null
  }

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className='mt-6'>
          <h2 className="text-2xl font-semibold mb-6">
            All Products: <span className="font-normal">{products?.length || 0}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products?.map((product, i) => (
              <ProductCard key={i} product={product}  />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}