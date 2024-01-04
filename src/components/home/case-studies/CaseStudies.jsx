// IMPORT JSX LAYOUTS
import ContainerJSX from "../../../layouts/jsx/Container"

// IMPORT JSX ATOMS
import OpenSansH3JSX from "../../../atoms/jsx/OpenSansH3"
import H2JSX from "../../../atoms/jsx/H2"
import ParagraphJSX from "../../../atoms/jsx/Paragraph"
import ButtonJSX from "../../../atoms/jsx/Button"

// IMPORT JSX COMPONENTS
import CaseStudy from "./CaseStudy"

const CaseStudies = () => {

    return(
        <section className="py-20">
            <ContainerJSX>
                <div>
                    <div className="space-y-6">
                        <OpenSansH3JSX>Case Studies</OpenSansH3JSX>
                        <H2JSX>Gorilla Logic in action</H2JSX>
                        <ParagraphJSX>For more than 20 years, we’ve partnered with hundreds of leading Fortune 500 and SMB companies across industries to build their business-critical software applications.</ParagraphJSX>
                    </div>
                    <div className="grid grid-cols-2 gap-24 py-10">
                        <div className="pt-32">
                            <CaseStudy
                                src=""
                                alt=""
                                title="Developing a tool to increase revenue and streamline operations"
                                description="A collaborative partnership to create a faster and easier way for customers to search, find, and price the best satellite images online."
                                anchor_text="Explore Maxar"
                            />
                        </div>
                        <CaseStudy
                            src=""
                            alt=""
                            title="Designing a SaaS platform from the ground up"
                            description="To secure its market-leading position, Astrella needed to deliver the exceptional online performance and ease of use that its customers expected."
                            anchor_text="Explore Astrella"
                        />
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
