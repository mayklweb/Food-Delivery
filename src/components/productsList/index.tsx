import ProductsCard from '../productCard'
import { useQuery } from '@tanstack/react-query'
import { getProducts, } from '../../api/apiServices'
import Loading from '../loading'
import toast from 'react-hot-toast'
import { ProductsType } from '../../types'

function ProductsList() {
  const { data: products, isError, error, isLoading } = useQuery<ProductsType[], Error>({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  if (isLoading) return <Loading />

  if (error && isError) {
    toast.error(error.message)
    return null
  }

  return (
    <section>
      <div className='container mx-auto px-4'>
        <div>
          <h3 className='text-2xl font-semibold'>Все: {products?.length} productov</h3>
        </div>
        <div className='mt-4 grid grid-cols-4 gap-y-4'>
          {
            products?.map((product, i) => (
              <ProductsCard key={i} product={product} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ProductsList