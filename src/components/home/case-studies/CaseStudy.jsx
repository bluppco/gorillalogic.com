import { useEffect, useRef } from "react"
import { useInView, useAnimation, motion } from "framer-motion"

// IMPORT JSX ATOMS
import H3 from "../../../atoms/jsx/H3"
import Paragraph from "../../../atoms/jsx/Paragraph"
import ArrowAnchor from "../../../atoms/jsx/ArrowAnchor"

// IMPORT CONSTANTS
import { CDN_LINK, IMAGE_QUALITY } from "../../../constants/cdn"

const CaseStudy = ( props ) => {

    const {

        src,
        alt,
        title,
        description,
        anchor_text,
        top_padding,
        primary_technology

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
    const delayedSlidingVariant = {

        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.1 } },
        hidden: { opacity: 0, y: 50 }

    }

    return(
        <div className={` ${ top_padding ? "md:mt-32" : "" } space-y-6`}>
            <div className="w-full aspect-[3/2] bg-transparent cursor-pointer group perspective">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                    <div className="w-full aspect-[3/2] bg-zinc-200 absolute backface-hidden">
                        <img
                            src={ CDN_LINK + src + "?quality=" + IMAGE_QUALITY }
                            alt={ alt }
                            className="h-full w-full"
                        />
                    </div>
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blue-100 overflow-hidden">
                        <div className="flex flex-col gap-10 p-20">
                            <div className="flex gap-2">
                                <div className="h-8 aspect-video">
                                    <img
                                        src="/icons/primary_tech.svg"
                                        alt={ alt }
                                        className="h-8 aspect-video"
                                    />
                                </div>
                                <p className="font-open_sans font-semibold text-xl uppercase tracking-widest">Primary technology</p>
                            </div>
                            <div className="flex flex-wrap gap-x-8 gap-y-2">
                                {

                                    primary_technology.map( ( value ) => {

                                        return(
                                            <div className="pl-2">
                                                <li className="font-open_sans text-2xl marker:text-gl_blue">{ value }</li>
                                            </div>
                                        )

                                    })

                                }
                            </div>
                        </div>
                    </div>
                </div>
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
            <motion.div
                className="space-y-6" ref={ ref }
                initial="hidden"
                variants={ delayedSlidingVariant }
                animate={ controls }
            >
                <ArrowAnchor>{ anchor_text }</ArrowAnchor>
            </motion.div>
        </div>
    )

}

export default CaseStudy
