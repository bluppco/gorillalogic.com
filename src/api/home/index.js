export const homeAPI = async ( ENVIRONMENT, ENDPOINT ) => {

    // NETWORK CALL TO GET DATA
    const network_data = await fetch( ENDPOINT + "/home" )
    const data_json = await network_data.json()

    const {

        blogs,
        home,
        locations,
        meta_tags,
        studies,
        testimonials

    } = data_json.data

    let home_data = {

        // HOME PROPS
        hero : "",
        read_why : "",
        case_studies : "",
        latest_insights : "",
        solutions : "",
        locations: ""

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
        else if( data.slug === "locations" )
            home_data.locations = data

    })

    return {

        blogs,
        home_data,
        locations,
        meta_tags,
        studies,
        testimonials,

    }

}
