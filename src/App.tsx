import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Cubreautos } from "./components/Cubreautos"

function App() {
  return (
    <main className="font-mainFont">
      <Navbar />
      <Hero />
      <Services />
      <Cubreautos />
    </main>
  )
}

export default App
