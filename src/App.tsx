import './App.css'
import Header from './components/Header/Header'
import ProductsList from './components/ProductsList/ProductsList'

function App() {

  return (
    <div className="wrapper">
      <Header />
        <div className="container">
            <h2 className="titleText">Catalog</h2>
            <ProductsList />
        </div>
    </div>
  )
}

export default App
