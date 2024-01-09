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
                            <OpenSansH3JSX>{ case_study.title }</OpenSansH3JSX>
                            <H2JSX>{ case_study.sub_title }</H2JSX>
                            <ParagraphJSX>{ case_study.description }</ParagraphJSX>
                        </div>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-24 py-10">
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
