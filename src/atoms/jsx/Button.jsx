const ButtonJSX = ( props ) => {

    const { href, aria_label } = props

    return(
        <a href={ href } aria-label={ aria_label }>
            <button className="bg-transparent text-gl_blue hover:text-black uppercase px-8 h-16 flex items-center justify-center border border-gl_blue hover:border-gl_sky_blue">
                { props.children }
            </button>
        </a>
    )

}

export default ButtonJSX
