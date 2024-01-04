const VideoJSX = ( props ) => {

    const { cy } = props

    return(
        <video
            loop={ true }
            autoplay={ false }
            muted={ true }
            playsinline={ true }
            preload="auto"
            class="h-full w-full object-cover"
            data-cy={ cy }
        >
            { props.children }
        </video>

    )

}

export default VideoJSX
