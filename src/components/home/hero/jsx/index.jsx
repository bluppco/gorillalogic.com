// IMPORTS ASTRO LAYOUTS
import Container from "@/layouts/container/jsx/index.jsx"

// IMPORTS ASTRO ATOMS
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

// IMPORTS REACT SCROLL
import { Link } from "react-scroll"

const Hero = ( props ) => {

    // GET PROPS
    const {

        CDN,
        data,
        PROJECT

    } = props

    return(
        <section className="md:mt-28 py-10 md:pt-32 md:pb-48 h-full w-full relative bg-cover overflow-hidden bg-no-repeat" style={{ backgroundImage: `url(${CDN + PROJECT + "/" + data.cover + "?quality=80"})` }}>
            <Container>
                <section className="relative z-10 flex flex-col justify-between h-full">
                    <div className="w-[80%]">
                        <h1 className="text-white text-4xl md:text-6xl font-lora">Digital engineering challenges?</h1>
                        <div className="pt-2">
                            <span className="text-white text-6xl md:text-8xl font-lora">{ data.sub_title } <span className="text-gl_sky_blue italic">solutions.</span></span>
                        </div>
                        <div className="pt-8">
                            <p className="text-lg md:text-xl text-white font-open_sans">{ data.description }</p>
                        </div>
                    </div>
                    <div className="pt-4">
                        <span className="text-xl md:text-4xl text-white font-lora">{ data.button_title }</span>
                    </div>
                </section>
            </Container>
            <section className="absolute top-0 left h-full w-full bg-gradient-to-l from-[#061b36e6] to-[#061b3613]" />
            <Link to="solutions" smooth={ true } offset={ -115 }>
                <div className="animate-bounce size-16 fixed bottom-5 right-16 z-30">
                    <PictureInternalContain
                        alternative_text="scroll icon"
                        source="/icons/scroll-icon.svg"
                    />
                </div>
            </Link>
        </section>
    )

}

export default Hero
