import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import gsap from "gsap"

function Hero() {

    useGSAP(() => {
        const heroSplit = new SplitText(".title", {
            type: "chars, words",
        })
        const paragraphSplit = new SplitText(".subtitle", {
            type: "lines",
        })

        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
            delay: 1
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        })
        .to(".left-leaf", { y:-200 }, 0)
        .to(".right-leaf", { y:200 }, 0)
        
    }, [])
  return (
    <>
        <section id="hero" className='noisy'>
            <h1 className='title'> Carlito</h1>
            <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf' />
            <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf' />

            <div className="body">
                <div className="content">
                    <div className='space-y-5 hidden md:block'>
                        <p>Sapeca. Crocante. Classico.</p>
                        <p className='subtitle'>
                            Sinta o sabor <br/> da Japonesa
                        </p>
                    </div>

                    <div className='view-cocktails'>
                        <p className='subtitle'>
                            Todo cocktail do nosso menu é
                            uma história de sonhos distantes
                            e aventuras que ainda não aconteceram
                        </p>
                        <a href="#cocktails">
                            <p>Ver nossos cocktails</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero