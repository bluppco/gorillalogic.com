import { endpointFetch } from "../../functions/endpoint"

export const homeAPI = async ( environment ) => {

    const endpoint = endpointFetch( environment )

    // NETWORK CALL TO GET DATA
    const network_data = await fetch( endpoint + "/home" )
    const data_json = await network_data.json()

    const { home, studies, locations, blogs, testimonials, meta_tags } = data_json.data

    let home_data = {

        // HOME PROPS
        hero : "",
        services : "",
        nearshoring : "",
        read_why : "",
        case_study : "",
        latest_insights : ""

    }
    home.map( ( data ) => {

        if( data.slug === "hero" )
            home_data.hero = data
        else if( data.slug === "services" )
            home_data.services = data
        else if ( data.slug === "nearshoring" )
            home_data.nearshoring = data
        else if ( data.slug === "read-why" )
            home_data.read_why = data
        else if ( data.slug === "case-study" )
            home_data.case_study = data
        else if( data.slug === "latest-insights" )
            home_data.latest_insights = data

    })

    return { home_data, studies, locations, blogs, testimonials, meta_tags }

}
