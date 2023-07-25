import React from 'react'
import { Footer, Header } from '@/components/common'

interface Props {
  children: React.ReactNode
}

const MainLayout = (props: Props) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
