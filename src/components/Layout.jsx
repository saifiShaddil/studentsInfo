import { useContext, useEffect } from 'react';
import { Sidebar } from '.'
import { ContextOne } from '../store/reducer';


const Layout = ({children}) => {

  const { dispatch }= useContext(ContextOne);

  useEffect(() => {
    dispatch({
      type: "setSize", 
      payload: {
        height: document.querySelector("#content").offsetHeight, 
        width: document.querySelector("#content").offsetWidth
      }
    })
    const reSize = () => window.addEventListener("resize", () => {
      dispatch({
        type: "setSize", 
        payload: {
          height: document.querySelector("#content").offsetHeight, 
          width: document.querySelector("#content").offsetWidth
        }
      })
    })
    reSize();
    return () => {
      window.removeEventListener("resize", reSize)
    }
  },[])

  return (
    <div className="layout-container w-screen h-screen overflow-hidden flex">
        <Sidebar />
        <main className='flex flex-1 h-full relative'>
          <div id='content' className='h-full w-[90%] mx-auto'>
            {children}
          </div>
        </main>
    </div>
  )
}

export default Layout