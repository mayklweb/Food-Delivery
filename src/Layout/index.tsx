import React from 'react'
import { Header, ProductsList } from '../components'
import Filter from '../components/filter'

function Layout() {
  return (
    <>
      <Header/>
      <Filter/>
      <ProductsList/>
    </>
  )
}

export default Layout