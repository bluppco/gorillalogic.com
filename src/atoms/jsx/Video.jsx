const VideoJSX = ( props ) => {

    const { cy } = props

    return(
        <video
            loop={ true }
            autoPlay={ true }
            muted={ true }
            playsInline={ true }
            preload="auto"
            className="h-full w-full object-cover"
            data-cy={ cy }
        >
            { props.children }
        </video>

    )

}

export default VideoJSX
