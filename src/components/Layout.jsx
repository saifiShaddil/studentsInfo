import React from 'react'
import { Sidebar, Header } from '.'

const Layout = ({children}) => {
  return (
    <div className="layout-container w-screen h-screen overflow-hidden">
        <Header />
        <Sidebar />
        <main className='flex ml-60 w-100 pt-[60px] h-screen overflow-y-auto'>
            {children}
        </main>
    </div>
  )
}

export default Layout