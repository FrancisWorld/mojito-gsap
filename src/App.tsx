import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

gsap.registerPlugin(ScrollTrigger, SplitText)
gsap.config({ nullTargetWarn: false })

function App() {
  return (
    <main>
        <Navbar />
        <Hero />
    </main>
  )
}

export default App