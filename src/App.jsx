import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Events from "./components/Events";
import Profhacks from "./components/Profhacks";
import Eboard from "./components/Eboard";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Photos from "./components/Photos";
import React, { useState } from "react";
import useKeySequence from "./hooks/useKeySequence";
import CLIAdventure from "./components/CLIAdventure";

const App = () => {
  const [showCLI, setShowCLI] = useState(false);

  // Trigger the CLI with the 'i', 'e', 'e', 'e' sequence
  useKeySequence(["i", "e", "e", "e"], () => setShowCLI(true));

  return (
    <div>
      {/* Render the CLI Adventure game if the key sequence is triggered */}
      {showCLI && <CLIAdventure closeCLI={() => setShowCLI(false)} />}
      
      {/* Main website content */}
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
    </div>
  );
};

export default App;
