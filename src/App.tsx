import './App.css'
import Container from './components/Container/Container'
import Header from './components/Header/Header'
import ProductsList from './components/ProductsList/ProductsList'

function App() {

  return (
    <div className="wrapper">
      <Header />
      <Container>
        <ProductsList />
      </Container>
    </div>
  )
}

export default App
