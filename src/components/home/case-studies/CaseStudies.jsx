import { useEffect, useRef } from "react"
import { useInView, useAnimation, motion } from "framer-motion"

// IMPORT JSX LAYOUTS
import ContainerJSX from "../../../layouts/jsx/Container"

// IMPORT JSX ATOMS
import OpenSansThreeJSX from "../../../atoms/heading/three/open-sans/jsx"
import HeadingTwoJSX from "../../../atoms/heading/two/jsx"
import ParagraphJSX from "../../../atoms/paragraphs/xl/jsx"
import ButtonJSX from "../../../atoms/buttons/transparent/blue/jsx"

// IMPORT JSX COMPONENTS
import CaseStudy from "./CaseStudy"

const CaseStudies = ( props ) => {

    const { case_study, data } = props

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
        <section className="py-20 bg-neutral-100">
            <ContainerJSX>
                <div>
                    <motion.div
                        initial="hidden"
                        variants={ slidingVariant }
                        animate={ controls }
                    >
                        <div className="md:space-y-6" ref={ ref }>
                            <OpenSansThreeJSX>{ case_study.title }</OpenSansThreeJSX>
                            <HeadingTwoJSX>{ case_study.sub_title }</HeadingTwoJSX>
                            <ParagraphJSX>{ case_study.description }</ParagraphJSX>
                        </div>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-24 py-10">
                        {

                            data.map( ( item, index ) => {

                                return(
                                    <CaseStudy
                                        top_padding={ index %2 -1 }
                                        src={ item.cover }
                                        alt={ item.title }
                                        title={ item.title }
                                        description={ item.description }
                                        anchor_text={ item.button_title }
                                        primary_technology={ item.primary_technology }
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
