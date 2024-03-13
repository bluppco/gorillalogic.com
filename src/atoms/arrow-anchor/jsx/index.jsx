// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"
import Picture from "@/atoms/picture/internal/jsx/contain/index.jsx"

const ArrowAnchor = ( props ) => {

    // GET PROPS
    const {

        aria_label,
        href

    } = props

    return(
        <Link href={ href } aria_label={ aria_label }>
            <div className="flex gap-2 items-center group hover:cursor-pointer hover:underline">
                <span className="uppercase text-lg text-gl_blue hover:text-black font-open_sans font-semibold tracking-widest">{ props.children }</span>
                <div className="size-6 group-hover:hidden">
                    <Picture
                        alternative_text="right arrow"
                        source="/icons/blue_right_arrow.svg"
                    />
                </div>
                <div className="size-6 hidden group-hover:block">
                    <Picture
                        alternative_text="right arrow"
                        source="/icons/dark_blue_right_arrow.svg"
                    />
                </div>
            </div>
        </Link>
    )

}

export default ArrowAnchor
