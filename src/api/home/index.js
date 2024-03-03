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
        read_why : "",
        case_studies : "",
        latest_insights : "",
        solutions : ""

    }
    home.map( ( data ) => {

        if( data.slug === "hero" )
            home_data.hero = data
        else if ( data.slug === "read-why" )
            home_data.read_why = data
        else if ( data.slug === "case-studies" )
            home_data.case_studies = data
        else if( data.slug === "latest-insights" )
            home_data.latest_insights = data
        else if( data.slug === "solutions" )
            home_data.solutions = data

    })

    return { home_data, studies, locations, blogs, testimonials, meta_tags }

}
