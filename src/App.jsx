import { BrowserRouter as Router ,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import UrunKatalog from './pages/UrunKatalog'
import Favoriler from './pages/Favoriler'
import  İletisim from './pages/İletisim'
import  Sepet from './pages/Sepet'
import Header from './components/Header'
import UrunDetay from './pages/UrunDetay'
import './index.css'
import { ProductProvider } from "./context/ProductContext"

function App() {
  return (
<ProductProvider>
     <Router> 
   <Header />

    <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/UrunKatalog" element={<UrunKatalog />} />
    <Route path="/UrunDetay/:id" element={<UrunDetay />} />

    <Route path="/Favoriler" element={<Favoriler />} />
    <Route path="/İletisim" element={<İletisim />} />
    <Route path="/Sepet" element={<Sepet />} />


    </Routes>
  
    </Router>
</ProductProvider>
 



   
  )
}

export default App
