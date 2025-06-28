import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)
gsap.config({ nullTargetWarn: false })

function App() {
  return (
    <div className="flex-center h-screen">Hello World</div>
  )
}

export default App