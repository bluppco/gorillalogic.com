const Video = ( props ) => {

    // GET PROPS
    const { cy } = props

    return(
        <video
            autoPlay={ false }
            className="h-full w-full object-cover"
            data-cy={ cy }
            loop={ true }
            muted={ true }
            onMouseOut={event => event.target.pause()}
            onMouseOver={event => event.target.play()}
            playsInline={ true }
            preload="auto"
        >
            { props.children }
        </video>

    )

}

export default Video
