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
        <section className="relative mt-32 md:mt-28 py-10 md:pt-32 md:pb-48 h-full w-full bg-bottom bg-cover overflow-hidden bg-no-repeat" style={{ backgroundImage: `url(${CDN + PROJECT + "/" + data.cover + "?quality=80" + "&width=1600"})` }}>
            <Container>
                <section className="relative z-10 flex flex-col justify-between h-[600px] md:h-full">
                    <div className="md:w-[80%]">
                        <h1 className="text-white text-4xl md:text-6xl font-lora leading-normal">Digital engineering challenges?</h1>
                        <div className="pt-4 md:pt-2">
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
            <section className="absolute z-0 top-0 left-0 h-full w-full" style={{ background: "linear-gradient(180deg, rgba(6,27,54,.9) 31.04%, rgba(6,27,54,.2) 115.52%)" }} />
            <div className="absolute bottom-52 md:bottom-28 -right-80 md:right-0 w-full h-full">
                <Link to="solutions" smooth={ true } offset={ -115 }>
                    <div className="animate-bounce size-10 md:size-16 absolute bottom-5  md:right-24 z-30">
                        <PictureInternalContain
                            alternative_text="scroll icon"
                            source="/icons/scroll-icon.svg"
                        />
                    </div>
                </Link>
            </div>
        </section>
    )

}

export default Hero
