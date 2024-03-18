// IMPORTS REACT
import { useEffect, useRef } from "react"

// IMPORTS FRAMER MOTION
import { useInView, useAnimation, motion } from "framer-motion"

// IMPORTS ATOMS
import ArrowAnchor from "@/atoms/arrow-anchor/jsx/index.jsx"
import HeadingThree from "@/atoms/headings/three/jsx/index.jsx"
import ParagraphXl from "@/atoms/paragraphs/xl/jsx/index.jsx"
import Link from "@/atoms/links/jsx"

const CaseStudyCard = ( props ) => {

    // GET PROPS
    const {

        alternative_text,
        anchor_text,
        anchor_link,
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
        <motion.div
            animate={ controls }
            className="space-y-6" ref={ ref }
            initial="hidden"
            variants={ slidingVariant }
        >
            <div className={` ${ top_padding ? "md:mt-32" : "" } space-y-6 `}>
                <div className="space-y-6 flip-container">
                    <div className="w-full aspect-[3/2] bg-transparent cursor-pointer group">
                        <div className="flipper relative w-full h-full">
                            <div className="w-full aspect-[3/2] bg-zinc-200">
                                <img
                                    alt={ alternative_text }
                                    className="h-full w-full"
                                    src={ CDN + PROJECT + "/" + source + "?quality=80" + "&width=1200" }
                                />
                            </div>
                            <div className="back absolute w-full h-full bg-blue-100 overflow-hidden">
                                <div className="flex flex-col gap-10 p-4 md:p-20">
                                    <div className="flex md:gap-2 items-center">
                                        <div className="h-8 aspect-video">
                                            <img
                                                alt={ alternative_text }
                                                className="h-8 aspect-video"
                                                src="/icons/primary_tech.svg"
                                            />
                                        </div>
                                        <p className="font-open_sans font-semibold text-lg md:text-xl uppercase tracking-widest">Primary technology</p>
                                    </div>
                                    <div className="flex flex-wrap gap-x-8 gap-y-2">
                                        {

                                            primary_technology.map( ( value, index ) => {

                                                return(
                                                    <div className="pl-2" key={ "primary-technology" + index }>
                                                        <li className="font-open_sans md:text-2xl marker:text-gl_blue">{ value }</li>
                                                    </div>
                                                )

                                            })

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HeadingThree>{ title }</HeadingThree>
                <ParagraphXl>{ description }</ParagraphXl>
                <Link href={ anchor_link } aria_label={ anchor_text }>
                    <ArrowAnchor>{ anchor_text }</ArrowAnchor>
                </Link>
            </div>
        </motion.div>
    )

}

export default CaseStudyCard
