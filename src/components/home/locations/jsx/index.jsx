// IMPORTS REACT
import { useEffect, useRef } from "react"

// IMPORTS FRAMER MOTION
import { useInView, useAnimation, motion } from "framer-motion"

// IMPORTS LAYOUTS
import Container from "@/layouts/container/jsx/index.jsx"

// IMPORTS COMPONENTS
import LocationCard from "@/components/home/locations/card/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain"

const Locations = ( props ) => {

    // GET PROPS
    const {

        CDN,
        data,
        locations,
        PROJECT

    } = props

    const ref = useRef()
    const isInView = useInView( ref )
    const controls = useAnimation()

    useEffect( () => {

        if( isInView ){

            controls.start("visible")

        }


    }, [ isInView ])
    const slidingVariant = {

        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: 200 }

    }
    const delaySlidingVariant = {

        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } },
        hidden: { opacity: 0, y: 200 }

    }

    return(
        <Container>
            <section>
                <motion.div
                    animate={ controls }
                    initial="hidden"
                    variants={ slidingVariant }
                >
                    <section className="space-y-6 pt-20" ref={ ref }>
                        <div className="flex gap-2 items-center justify-center">
                            <div className="size-6">
                                <PictureInternalContain
                                    alternative_text=""
                                    source="icons/location-hub.svg"
                                />
                            </div>
                            <h3 className="text-xl uppercase font-open_sans font-semibold text-center tracking-widest">{ data.title }</h3>
                        </div>
                        <h2 className="font-lora text-center text-5xl">Innovation <span className="text-gl_blue">without</span> borders</h2>
                    </section>
                </motion.div>
                <motion.div
                    animate={ controls }
                    initial="hidden"
                    variants={ delaySlidingVariant }
                >
                    <section className="grid grid-cols-2 md:grid-cols-4 pb-20 md:pb-32 pt-10 md:pt-32" ref={ ref }>
                        {

                            locations.map( ( item, index ) => {

                                return(
                                    <div key={ index }>
                                        <LocationCard
                                            alternative_text={ item.location }
                                            bottom_position={ index % 2 - 1 }
                                            CDN={ CDN }
                                            PROJECT={ PROJECT }
                                            source={ item.cover }
                                            title={ item.location }
                                            video_source={ item.video }
                                        />
                                    </div>
                                )

                            })

                        }
                    </section>
                </motion.div>
            </section>
        </Container>
    )

}

export default Locations
