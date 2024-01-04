import { TypeAnimation } from "react-type-animation"

const HeroDescription = () => {

    return (
        <div className="pt-4 md:pt-10">
            <TypeAnimation
                sequence={[
                    'Strategic Design: taking the guesswork out of your digital product build.',
                    2000,
                    'Solutions Architecture: creating scalable, reliable, and efficient technology roadmaps.',
                    2000,
                    "Agile Nearshore Development: building + scaling highly-skilled teams in your time zone.",
                    2000,
                ]}
                wrapper="span"
                cursor={ true }
                repeat={ Infinity }
                className="text-white font-open_sans text-2xl"
            />
        </div>
)
}

export default HeroDescription
