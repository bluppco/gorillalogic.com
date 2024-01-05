import { useEffect, useRef } from "react"
import { useInView, useAnimation, motion } from "framer-motion"

// IMPORT JSX ATOMS
import H2JSX from "../../atoms/jsx/H2"
import ParagraphJSX from "../../atoms/jsx/Paragraph"
import ArrowAnchorJSX from "../../atoms/jsx/ArrowAnchor"

const ServicesAndNearShoring = () => {

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
		<section className="py-20" ref={ ref }>
			<section className="grid md:grid-cols-5 gap-10">
				<section className="md:col-span-2 space-y-20">
				<motion.div
					initial="hidden"
					variants={ slidingVariant }
					animate={ controls }
				>
					<div className="space-y-6">
						<H2JSX>Become unstoppable with a committed development partner.</H2JSX>
						<ParagraphJSX>From wireframing and prototyping to web and mobile development, our Strategic Designers, Solutions Architects, and Agile nearshore teams help you deliver the products your organization is counting on.</ParagraphJSX>
						<ArrowAnchorJSX>See our services</ArrowAnchorJSX>
					</div>
				</motion.div>
				<motion.div
					initial="hidden"
					variants={ slidingVariant }
					animate={ controls }
				>
					<div className="space-y-6">
						<H2JSX>Another vendor might be fine...</H2JSX>
						<ParagraphJSX>But with a team of Gorillas, you’ll be unstoppable. We hire Latin America's best English-fluent devs, ensuring our clients get the exact skills, expertise, and collaboration they need.</ParagraphJSX>
						<ArrowAnchorJSX>Explore nearshoring</ArrowAnchorJSX>
					</div>
				</motion.div>
				</section>
				<motion.div
					initial="hidden"
					variants={ slidingVariant }
					animate={ controls }
				>
					<section className="col-span-3 flex flex-col gap-20 relative pl-12 md:pl-20">
						<div className="w-48 md:w-72 aspect-[3/4] bg-zinc-200 absolute top-0 left-36 md:left-80">
							<img
								src=""
								alt=""
								className="w-full h-full"
							/>
						</div>
						<div className="w-48 md:w-72 aspect-[3/4] bg-zinc-300 z-10 my-36 md:my-52">
							<img
								src=""
								alt=""
								className="w-full h-full"
							/>
						</div>
						<div className="w-48 md:w-72 aspect-[3/4] bg-zinc-400 z-20 absolute top-80 left-36 md:left-80">
							<img
								src=""
								alt=""
								className="w-full h-full"
							/>
						</div>
					</section>
				</motion.div>
			</section>
		</section>

	)

}

export default ServicesAndNearShoring
