import React from 'react'
import { Sidebar, Header } from '.'

const Layout = ({children}) => {
  return (
    <>
        <Header />
        <Sidebar />
        <main>
            {children}
        </main>
    </>
  )
}

export default Layout