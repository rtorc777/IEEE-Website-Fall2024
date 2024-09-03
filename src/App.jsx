import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Events from "./components/Events"
import Profhacks from "./components/Profhacks"
import Eboard from "./components/Eboard"

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Hero />
      <Navbar />
      <About />
      <Events />
      <Profhacks />
      <Eboard />
    </main>
  )
}

export default App