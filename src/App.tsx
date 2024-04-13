import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Products } from "./components/Products"
import { Gallery } from "./components/Gallery"
import { Footer } from "./components/Footer"

function App() {
  return (
    <main className="font-mainFont">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Products />
      <Footer />
    </main>
  )
}

export default App
