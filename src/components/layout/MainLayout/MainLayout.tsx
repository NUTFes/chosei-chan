import React from 'react'
import { Footer } from '@/components/common'
import { Header } from '@/components/common'

interface Props {
  children: React.ReactNode
};

const MainLayout = (props:Props) => {

  return (
    <div>
      <Header />
        <div>{props.children}</div>
      <Footer />
    </div>
  )
};

export default MainLayout;
