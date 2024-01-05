import { useEffect, useRef } from "react"
import { useInView, useAnimation, motion } from "framer-motion"

// IMPORT JSX ATOMS
import H3 from "../../../atoms/jsx/H3"
import Paragraph from "../../../atoms/jsx/Paragraph"
import ArrowAnchor from "../../../atoms/jsx/ArrowAnchor"

const CaseStudy = ( props ) => {

    const {

        src,
        alt,
        title,
        description,
        anchor_text,
        top_padding

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
        <div className={` ${ top_padding ? "mt-32" : "" } space-y-6`}>
            <div className="w-full aspect-[3/2] bg-zinc-200">
                <img
                    src={ src }
                    alt={ alt }
                    className="h-full w-full"
                />
            </div>
            <motion.div
                className="space-y-6" ref={ ref }
                initial="hidden"
                variants={ slidingVariant }
                animate={ controls }
            >
                <H3>{ title }</H3>
                <Paragraph>{ description }</Paragraph>
            </motion.div>
            <ArrowAnchor>{ anchor_text }</ArrowAnchor>
        </div>
    )

}

export default CaseStudy