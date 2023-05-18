import { Route, Routes } from 'react-router-dom'
import './App.css'
import OverviewPage from './components/Pages/OverviewPage/index.js'
import NotFound from './components/Layout/NotFound.js'
import Products from './components/Pages/Products/index.js'
import data from './data.json'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={'/'} element={<OverviewPage data={data} />} />
        <Route exact path={'/details/:id'} element={<Products data={data} />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
