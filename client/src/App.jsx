import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import routes from './routes/routes'
import NProgressHandler from './components/NProgressHandler'


function App() {
  return (
    <Router>
      <NProgressHandler />
      <MainLayout>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
