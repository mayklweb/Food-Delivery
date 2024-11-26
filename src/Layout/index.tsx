import React, { useState } from 'react'
import Filter from '../components/filter'
import { CartModal, Header, ProductsList } from '../components'

export const Layout: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <Filter />
      <ProductsList />
      <CartModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  )
}
