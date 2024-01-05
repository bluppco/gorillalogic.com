import { useEffect, useRef } from "react"
import { useInView, useAnimation, motion } from "framer-motion"

// IMPORT JSX COMPONENTS
import Location from "./Location.jsx"

const Locations = ( props ) => {

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

    const data = Array(4).fill({

        title: "United States",
        src: "",
        alt: "",
        video_src: "/united_states.mp4"

    })

    return(
        <motion.div
            initial="hidden"
            variants={ slidingVariant }
            animate={ controls }
        >
            <section className="grid grid-cols-2 md:grid-cols-4 pb-20 md:pb-32 pt-10" ref={ ref }>
                {

                    data.map( ( item, index ) => {

                        return(
                            <Location
                                bottom_position={ index % 2 - 1 }
                                src={ item.src }
                                alt={ item.alt }
                                title={ item.title }
                                video_src={ item.video_src }
                            />
                        )

                    })

                }
            </section>
        </motion.div>
    )

}

export default Locations
