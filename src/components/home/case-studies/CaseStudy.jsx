// IMPORT JSX ATOMS
import H3 from "../../../atoms/jsx/H3"
import Paragraph from "../../../atoms/jsx/Paragraph"
import ArrowAnchor from "../../../atoms/jsx/ArrowAnchor"

const CaseStudy = ( props ) => {

    const {

        src,
        alt,
        title,
        description,
        anchor_text

    } = props

    return(
        <div className="space-y-6">
            <div className="w-full aspect-[3/2] bg-zinc-200">
                <img
                    src={ src }
                    alt={ alt }
                    className="h-full w-full"
                />
            </div>
            <H3>{ title }</H3>
            <Paragraph>{ description }</Paragraph>
            <ArrowAnchor>{ anchor_text }</ArrowAnchor>
        </div>
    )

}

export default CaseStudy
