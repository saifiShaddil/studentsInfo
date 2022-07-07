import { useContext, useEffect } from 'react';
import { Sidebar, Header } from '.'
import { ContextOne } from '../store/reducer';


const Layout = ({children}) => {

  const { state, dispatch }= useContext(ContextOne);

  const { width, height } = state;

  useEffect(() => {
    dispatch({
      type: "setSize", 
      payload: {
        height: document.querySelector("main").offsetHeight, 
        width: document.querySelector("main").offsetWidth
      }
    })
  },[])

  return (
    <div className="layout-container w-screen h-screen overflow-hidden">
        <Header />
        <Sidebar />
        <main className='flex ml-60 pt-[60px] absolute inset-0 overflow-y-auto' style={{ width: width, height: height}}>
            {children}
        </main>
    </div>
  )
}

export default Layout