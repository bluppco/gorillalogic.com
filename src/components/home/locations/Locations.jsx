import { useEffect, useRef } from "react"
import { useInView, useAnimation, motion } from "framer-motion"

// IMPORT JSX COMPONENTS
import Location from "./Location.jsx"

// IMPORT JSX LAYOUTS
import ContainerJSX from "../../../layouts/jsx/Container.jsx"

const Locations = ( props ) => {

    const { data } = props

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
            initial="hidden"
            variants={ slidingVariant }
            animate={ controls }
        >
            <ContainerJSX>
                <section className="grid grid-cols-2 md:grid-cols-4 pb-20 md:pb-32 pt-10 md:pt-36" ref={ ref }>
                    {

                        data.map( ( item, index ) => {

                            return(
                                <div key={ index }>
                                    <Location
                                        bottom_position={ index % 2 - 1 }
                                        src={ item.cover }
                                        alt={ item.location }
                                        title={ item.location }
                                        video_src={ item.video }
                                    />
                                </div>
                            )

                        })

                    }
                </section>
            </ContainerJSX>
        </motion.div>
    )

}

export default Locations
