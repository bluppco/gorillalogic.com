// IMPORTS REACT
import { useEffect, useRef } from "react"

// IMPORTS FRAMER MOTION
import { useInView, useAnimation, motion } from "framer-motion"

// IMPORTS LAYOUTS
import Container from "@/layouts/container/jsx/index.jsx"

// IMPORTS COMPONENTS
import LocationCard from "@/components/home/locations/card/index.jsx"

const Locations = ( props ) => {

    // GET PROPS
    const {

        CDN,
        data,
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

    return(
        <motion.div
            animate={ controls }
            initial="hidden"
            variants={ slidingVariant }
        >
            <Container>
                <section className="grid grid-cols-2 md:grid-cols-4 pb-20 md:pb-32 pt-10 md:pt-36" ref={ ref }>
                    {

                        data.map( ( item, index ) => {

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
            </Container>
        </motion.div>
    )

}

export default Locations
