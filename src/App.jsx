import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Events from "./components/Events"
import Profhacks from "./components/Profhacks"
import Eboard from "./components/Eboard"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import Photos from "./components/Photos"

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Hero />
      <Navbar />
      <About />
      <Events />
      <Profhacks />
      <Eboard />
      <Photos />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default App