import React from 'react'
import { Footer, Header } from '@/components/common'

interface Props {
  children: React.ReactNode
}

const MainLayout = (props: Props) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <div className='flex-1'>{props.children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
