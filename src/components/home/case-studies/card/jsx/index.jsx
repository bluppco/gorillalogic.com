// IMPORTS REACT
import { useEffect, useRef } from "react"

// IMPORTS FRAMER MOTION
import { useInView, useAnimation, motion } from "framer-motion"

// IMPORTS ATOMS
import ArrowAnchor from "@/atoms/arrow-anchor/jsx/index.jsx"
import HeadingThree from "@/atoms/headings/three/jsx/index.jsx"
import ParagraphXl from "@/atoms/paragraphs/xl/jsx/index.jsx"

const CaseStudyCard = ( props ) => {

    // GET PROPS
    const {

        alternative_text,
        anchor_text,
        description,
        primary_technology,
        source,
        title,
        CDN,
        PROJECT,
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
    const delayedSlidingVariant = {

        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.1 } },
        hidden: { opacity: 0, y: 50 }

    }

    return(
        <div className={` ${ top_padding ? "md:mt-32" : "" } space-y-6 `}>
            <div className="w-full aspect-[3/2] bg-transparent cursor-pointer group perspective">
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                    <div className="w-full aspect-[3/2] bg-zinc-200 absolute backface-hidden">
                        <img
                            alt={ alternative_text }
                            className="h-full w-full"
                            src={ CDN + PROJECT + "/" + source + "?quality=80" + "&width=1200" }
                        />
                    </div>
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blue-100 overflow-hidden">
                        <div className="flex flex-col gap-10 p-10 md:p-20">
                            <div className="flex gap-2">
                                <div className="h-8 aspect-video">
                                    <img
                                        alt={ alternative_text }
                                        className="h-8 aspect-video"
                                        src="/icons/primary_tech.svg"
                                    />
                                </div>
                                <p className="font-open_sans font-semibold text-xl uppercase tracking-widest">Primary technology</p>
                            </div>
                            <div className="flex flex-wrap gap-x-8 gap-y-2">
                                {

                                    primary_technology.map( ( value, index ) => {

                                        return(
                                            <div className="pl-2" key={ "primary-technology" + index }>
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
                animate={ controls }
                className="space-y-6" ref={ ref }
                initial="hidden"
                variants={ slidingVariant }
            >
                <HeadingThree>{ title }</HeadingThree>
                <ParagraphXl>{ description }</ParagraphXl>
            </motion.div>
            <motion.div
                animate={ controls }
                className="space-y-6" ref={ ref }
                initial="hidden"
                variants={ delayedSlidingVariant }
            >
                <ArrowAnchor>{ anchor_text }</ArrowAnchor>
            </motion.div>
        </div>
    )

}

export default CaseStudyCard
