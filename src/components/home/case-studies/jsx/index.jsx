// IMPORTS REACT
import { useEffect, useRef } from "react"

// IMPORTS FRAMER MOTION
import { useInView, useAnimation, motion } from "framer-motion"

// IMPORTS LAYOUTS
import Container from "@/layouts/container/jsx/index.jsx"

// IMPORTS ATOMS
import Button from "@/atoms/buttons/transparent/blue/jsx/index.jsx"
import HeadingTwo from "@/atoms/headings/two/jsx/index.jsx"
import HeadingThreeOpenSans from "@/atoms/headings/three/open-sans/jsx/index.jsx"
import ParagraphXl from "@/atoms/paragraphs/xl/jsx/index.jsx"

// IMPORTS COMPONENTS
import CaseStudyCard from "@/components/home/case-studies/card/jsx/index.jsx"

const CaseStudies = ( props ) => {

    // GET PROPS
    const {

        case_study,
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
        <section className="py-20 bg-gl_cream" ref={ ref }>
            <Container>
                <div>
                    <motion.div
                        animate={ controls }
                        initial="hidden"
                        variants={ slidingVariant }
                    >
                        <div className="space-y-4 md:space-y-6" ref={ ref }>
                            <HeadingThreeOpenSans>{ case_study.title }</HeadingThreeOpenSans>
                            <HeadingTwo>{ case_study.sub_title }</HeadingTwo>
                            <ParagraphXl>{ case_study.description }</ParagraphXl>
                        </div>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-24 py-10">
                        {

                            data.map( ( item, index ) => {

                                return(
                                    <div key={ index }>
                                        <CaseStudyCard
                                            alternative_text={ item.title }
                                            anchor_text={ item.button_title }
                                            CDN={ CDN }
                                            description={ item.description }
                                            primary_technology={ item.primary_technology }
                                            PROJECT={ PROJECT }
                                            source={ item.cover }
                                            title={ item.title }
                                            top_padding={ index %2 -1 }
                                        />
                                    </div>
                                )

                            })

                        }
                    </div>
                    <div className="flex md:justify-center">
                        <Button>View more successes</Button>
                    </div>
                </div>
            </Container>
        </section>
    )

}

export default CaseStudies
