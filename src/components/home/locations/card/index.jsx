// IMPORTS JSX ATOMS
import Video from "@/atoms/video/jsx/index.jsx"

const LocationCard = ( props ) => {

    // GET PROPS
    const {

        alternative_text,
        bottom_position,
        CDN,
        PROJECT,
        source,
        title,
        video_source

    } = props

    return(
        <div className={` ${ bottom_position ? "mt-12 md:mt-16" : "" } relative h-fit `}>
            <div className="w-full aspect-[2/3] bg-zinc-200">
                {

                    video_source.map( ( value, index ) => {

                        return(
                            <div key={ "locations-video" + index } className="h-full">
                                <Video cy="locations-video">
                                    <source src={ CDN + PROJECT + "/" + value.file } type="video/mp4" />
                                </Video>
                            </div>
                        )

                    })

                }
            </div>
            <div className="md:absolute md:bottom-6 flex gap-4 items-center justify-center w-full pt-2 md:pt-0">
                <div className="w-6 md:w-14 aspect-video">
                    <img
                        alt={ alternative_text }
                        className="w-full h-full"
                        src={ CDN + PROJECT + "/" + source + "?quality=80" }
                    />
                </div>
                <span className="text-black md:text-white uppercase font-open_sans font-semibold text-sm md:text-base">{ title }</span>
            </div>
        </div>

    )

}

export default LocationCard
