import { useContext, useEffect } from 'react';
import { Sidebar, Header } from '.'
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
    <div className="layout-container w-screen h-screen overflow-hidden">
        <Header />
        <Sidebar />
        <main className='flex ml-60 pt-[60px] h-full overflow-y-auto relative'>
          <div id='content' className='flex h-full w-full'>
            {children}
          </div>
        </main>
    </div>
  )
}

export default Layout