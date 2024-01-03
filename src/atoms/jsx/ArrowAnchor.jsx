const ArrowAnchorJSX = ( props ) => {

    const { href, aria_label } = props

    return(
        <div>
            <a href={ href } aria-label={ aria_label }>
                <div className="flex gap-2 items-center group hover:cursor-pointer">
                    <span className="uppercase text-lg text-gl_blue hover:text-black font-open_sans font-semibold tracking-widest">{ props.children }</span>
                    <div className="size-6 group-hover:hidden">
                        <img
                            src="/icons/blue_right_arrow.svg"
                            alt="right arrow"
                            className="size-6"
                        />
                    </div>
                    <div className="size-6 hidden group-hover:block">
                        <img
                            src="/icons/dark_blue_right_arrow.svg"
                            alt="right arrow"
                            className="size-6"
                        />
                    </div>
                </div>
            </a>
        </div>
    )

}

export default ArrowAnchorJSX
