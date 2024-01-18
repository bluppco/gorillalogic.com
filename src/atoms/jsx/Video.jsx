const VideoJSX = ( props ) => {

    const { cy } = props

    return(
        <video
            loop={ true }
            autoPlay={ false }
            muted={ true }
            playsInline={ true }
            preload="auto"
            className="h-full w-full object-cover"
            data-cy={ cy }
            onMouseOver={event => event.target.play()}
            onMouseOut={event => event.target.pause()}
        >
            { props.children }
        </video>

    )

}

export default VideoJSX
