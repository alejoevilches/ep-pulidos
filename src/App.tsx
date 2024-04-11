import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"

function App() {
  return (
    <main className="font-mainFont">
      <Navbar />
      <Hero />
      <Services />
    </main>
  )
}

export default App
