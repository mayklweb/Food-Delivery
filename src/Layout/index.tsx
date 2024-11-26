import React from 'react'
import Filter from '../components/filter'
import { Header, ProductsList } from '../components'

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Filter />
      <ProductsList />
    </>
  )
}
