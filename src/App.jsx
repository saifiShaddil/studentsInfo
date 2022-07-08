import { Layout } from "./components"
import {  Routes, Route, Navigate } from "react-router-dom"
import { allRoutes } from "./routes"



function App() {


  return (
    <Layout>
        <Routes>
          {allRoutes.map((route) => {
            return <Route key={route.path} path={route.path} element={<route.element />} />
          })}
          <Route path="*" element={<Navigate replace to='/' />} />
        </Routes>
    </Layout>
  )
}

export default App
