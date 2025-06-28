import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import gsap from "gsap"
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

function Hero() {

    const videoRef = useRef<HTMLVideoElement>(null);

    const isMobile = useMediaQuery({ maxWidth: 767 });

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
            .to(".left-leaf", { y: -200 }, 0)
            .to(".right-leaf", { y: 200 }, 0)

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        // Timeline para animar o vídeo durante o scroll
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            }
        })
        if (videoRef.current) {
            videoRef.current.onloadedmetadata = () => {
                tl.to(videoRef.current, {
                    currentTime: videoRef.current?.duration
                })
            }
        }
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
                                Sinta o sabor <br /> da Japonesa
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

            <div className="video absolute inset-0">
                <video 
                src="/videos/output.mp4" 
                ref={videoRef} 
                muted 
                playsInline 
                preload="auto" 
                className="w-full h-full object-cover" />
            </div>
        </>
    )
}

export default Hero