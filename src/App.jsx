import { useState } from 'react'
import { Layout } from './components';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Students from './Pages/Students';
import { allRoutes } from './routes';

function App() {

  return (
    <Layout>
      <Router>
        {allRoutes.map(route => {
          return <Route key={route.path} {...route} />
        })}
        <Route path="*" components={<Students />} />
      </Router>
    </Layout>
  )
}

export default App
