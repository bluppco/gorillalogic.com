import { useEffect, useRef } from "react"
import { useInView, useAnimation, motion } from "framer-motion"

// IMPORT JSX LAYOUTS
import ContainerJSX from "../../../layouts/jsx/Container"

// IMPORT JSX ATOMS
import OpenSansH3JSX from "../../../atoms/jsx/OpenSansH3"
import H2JSX from "../../../atoms/jsx/H2"
import ParagraphJSX from "../../../atoms/jsx/Paragraph"
import ButtonJSX from "../../../atoms/jsx/Button"

// IMPORT JSX COMPONENTS
import CaseStudy from "./CaseStudy"

const CaseStudies = ( props ) => {

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

    const data = Array(2).fill({

        title: "Developing a tool to increase revenue and streamline operations",
        src: "",
        alt: "",
        description: "A collaborative partnership to create a faster and easier way for customers to search, find, and price the best satellite images online.",
        anchor_text: "Explore Maxar"

    })

    return(
        <section className="py-20 bg-neutral-100">
            <ContainerJSX>
                <div>
                    <motion.div
                        initial="hidden"
                        variants={ slidingVariant }
                        animate={ controls }
                    >
                        <div className="space-y-6" ref={ ref }>
                            <OpenSansH3JSX>Case Studies</OpenSansH3JSX>
                            <H2JSX>Gorilla Logic in action</H2JSX>
                            <ParagraphJSX>For more than 20 years, we’ve partnered with hundreds of leading Fortune 500 and SMB companies across industries to build their business-critical software applications.</ParagraphJSX>
                        </div>
                    </motion.div>
                    <div className="grid grid-cols-2 gap-24 py-10">
                        {

                            data.map( ( item, index ) => {

                                return(
                                    <CaseStudy
                                        top_padding={ index %2 -1 }
                                        src={ item.src }
                                        alt={ item.alt }
                                        title={ item.title }
                                        description={ item.description }
                                        anchor_text={ item.anchor_text }
                                    />
                                )

                            })

                        }
                    </div>
                    <div className="flex justify-center">
                        <ButtonJSX>View more successes</ButtonJSX>
                    </div>
                </div>
            </ContainerJSX>
        </section>
    )

}

export default CaseStudies
