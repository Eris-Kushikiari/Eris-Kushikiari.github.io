import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Education from "./components/Education"
import FadeInSection from "./components/FadeInSection"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <>
      <div className="relative antialiased">
        <div className="fixed inset-0 bg-img bg-cover bg-center z-[-10]"/>
        <main className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          <Navbar/>
          <Hero/>
          <FadeInSection><AboutMe/></FadeInSection>
          <FadeInSection><Education/></FadeInSection>
          <FadeInSection><Projects/></FadeInSection>
          <FadeInSection><Skills/></FadeInSection>
          <FadeInSection><Contact/></FadeInSection>
          <Footer/>
        </main>
      </div>
    </>
  )
}

export default App
