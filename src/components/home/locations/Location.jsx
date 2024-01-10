// IMPORT JSX ATOMS
import Video from "../../../atoms/jsx/Video"

// IMPORT CONSTANTS
import { CDN_LINK, IMAGE_QUALITY } from "../../../constants/cdn"

const Location = ( props ) => {

    const {

        src,
        alt,
        title,
        video_src,
        bottom_position

    } = props

    return(
        <div className={` ${ bottom_position ? "mt-12 md:mt-16" : "" } relative`}>
            <div className="w-full aspect-[2/3] bg-zinc-200">
                {

                    video_src.map( ( value ) => {

                        return(
                            <Video cy="locations-video">
                                <source src={ CDN_LINK + value.file } type="video/mp4"/>
                            </Video>
                        )

                    })

                }
            </div>
            <div className={` ${ bottom_position ? "bottom-6" : "bottom-[88px]" } md:absolute flex gap-4 items-center justify-center w-full pt-2 md:pt-0`}>
                <div className="w-6 md:w-14 aspect-video">
                    <img
                        src={ CDN_LINK + src + "?quality=" + IMAGE_QUALITY }
                        alt={ alt }
                        className="w-full h-full"
                    />
                </div>
                <span className="text-black md:text-white uppercase font-open_sans font-semibold text-sm md:text-base">{ title }</span>
            </div>
        </div>

    )

}

export default Location
