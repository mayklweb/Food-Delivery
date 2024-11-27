import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { CategoryesType } from '../../types';
import { getCategories, getProductByCategory } from '../../api/apiServices';
import { Loading } from '../loading';


function Filter() {

  const { data: categories, isError, error, isLoading } = useQuery<CategoryesType[], Error>({
    queryKey: ['categories'],
    queryFn: getCategories,
  })

  if (isLoading) return <Loading />

  if (error && isError) {
    toast.error(error.message)
    return null
  }

  return (
    <div className='my-4 overflow-x-scroll'>
      <div className='container mx-auto px-4'>
        <div className='flex gap-3 mb-2'>
          <button className='px-4 py-1.5 text-white text-base border-[1px] border-solid border-[#FC014A] bg-[#FC014A] leading-[120%] rounded hover:bg-[#fc0148da] transition-all'>Все</button>
          {
            categories?.map((item, i) => (
              <button key={i} onClick={() => getProductByCategory(item.id)} className='px-4 py-1.5 text-base text-white border-[1px] border-solid border-[#FC014A] bg-[#FC014A] rounded hover:bg-[#fc0148c6] transition-all'>{item.name}</button>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Filter