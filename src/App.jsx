import { useState } from "react"
import { Layout } from "./components"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { allRoutes } from "./routes"

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          {allRoutes.map((route) => {
            return <Route key={route.path} path={route.path} element={<route.element />} />
          })}
          <Route path="*" element={<Navigate replace to='/' />} />
        </Routes>
      </Router>
    </Layout>
  )
}

export default App
