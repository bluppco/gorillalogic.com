import { useEffect, useRef } from "react"
import { useInView, useAnimation, motion } from "framer-motion"

import { marked } from "marked"

// IMPORT JSX ATOMS
import HeadingTwoJSX from "../../atoms/heading/jsx/Two"
import ParagraphJSX from "../../atoms/jsx/Paragraph"
import ArrowAnchorJSX from "../../atoms/jsx/ArrowAnchor"

// IMPORT CONSTANTS
import { CDN_LINK, IMAGE_QUALITY, IMAGE_WIDTH } from "../../constants/cdn"

// IMPORT JSX LAYOUTS
import ContainerJSX from "../../layouts/jsx/Container"

const ServicesAndNearShoring = ( props ) => {

	const { services, nearshoring } = props

	const description = marked.parse( nearshoring.description )

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
		<section className="py-10 md:py-20 z-10 bg-white relative" ref={ ref }>
			<ContainerJSX>
				<section className="grid md:grid-cols-5 gap-10">
					<section className="md:col-span-2 space-y-20">
					<motion.div
						initial="hidden"
						variants={ slidingVariant }
						animate={ controls }
					>
						<div className="space-y-6">
							<HeadingTwoJSX>{ services.title }</HeadingTwoJSX>
							<ParagraphJSX>{ services.description }</ParagraphJSX>
							<ArrowAnchorJSX>See our services</ArrowAnchorJSX>
						</div>
					</motion.div>
					<motion.div
						initial="hidden"
						variants={ slidingVariant }
						animate={ controls }
					>
						<div className="space-y-6">
							<HeadingTwoJSX>{ nearshoring.title }</HeadingTwoJSX>
							<section dangerouslySetInnerHTML={{ __html: description }} className="markdown" />
							<ArrowAnchorJSX>Explore nearshoring</ArrowAnchorJSX>
						</div>
					</motion.div>
					</section>
					<motion.div
						initial="hidden"
						variants={ slidingVariant }
						animate={ controls }
						className="md:col-span-3 flex flex-col gap-20"
					>
						<section className="relative pl-12 md:pl-20 h-[600px]">
							{

								services.images.map( ( value, index ) => {

									let position = "";

									if ( index === 0 ) {

										position = "absolute top-0 left-36 md:left-80 z-10"

									} else if ( index === 1 ) {

										position = "my-36 md:my-52 z-20 absolute"

									} else {

										position = "z-30 absolute top-80 md:top-[500px] left-36 md:left-80"

									}

									return(
										<div className={"w-48 md:w-72 aspect-[3/4] bg-zinc-200 " + position } key={ "services-and-nearshoring-" + index }>
											<img
												src={ CDN_LINK + value.file + "?quality=" + IMAGE_QUALITY + "&width=" + IMAGE_WIDTH }
												alt=""
												className="w-full h-full"
											/>
										</div>
									)

								})

							}
						</section>
					</motion.div>
				</section>
			</ContainerJSX>
		</section>

	)

}

export default ServicesAndNearShoring
