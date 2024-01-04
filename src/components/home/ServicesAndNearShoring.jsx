// IMPORT JSX ATOMS
import H2JSX from "../../atoms/jsx/H2"
import ParagraphJSX from "../../atoms/jsx/Paragraph"
import ArrowAnchorJSX from "../../atoms/jsx/ArrowAnchor"

const ServicesAndNearShoring = () => {

	return(
		<section class="py-20">
			<section class="grid grid-cols-2 gap-20">
				<div className="space-y-20">
					<div className="space-y-6">
						<H2JSX>Become unstoppable with a committed development partner.</H2JSX>
						<ParagraphJSX>From wireframing and prototyping to web and mobile development, our Strategic Designers, Solutions Architects, and Agile nearshore teams help you deliver the products your organization is counting on.</ParagraphJSX>
						<ArrowAnchorJSX>See our services</ArrowAnchorJSX>
					</div>
					<div className="space-y-6">
						<H2JSX>Another vendor might be fine...</H2JSX>
						<ParagraphJSX>But with a team of Gorillas, you’ll be unstoppable. We hire Latin America's best English-fluent devs, ensuring our clients get the exact skills, expertise, and collaboration they need.</ParagraphJSX>
						<ArrowAnchorJSX>Explore nearshoring</ArrowAnchorJSX>
					</div>
				</div>
				<section className="flex flex-col gap-20 relative">
					<div className="w-60 aspect-[2/3] bg-zinc-200 absolute top-0 left-60">
						<img
							src=""
							alt=""
							className="w-full h-full"
						/>
					</div>
					<div className="w-60 aspect-[2/3] bg-zinc-300 z-10 absolute top-48 left-12">
						<img
							src=""
							alt=""
							className="w-full h-full"
						/>
					</div>
					<div className="w-60 aspect-[2/3] bg-zinc-400 z-20 absolute top-[460px] left-60">
						<img
							src=""
							alt=""
							className="w-full h-full"
						/>
					</div>
				</section>
			</section>
		</section>

	)

}

export default ServicesAndNearShoring
