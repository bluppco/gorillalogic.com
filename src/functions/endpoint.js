export const endpointFetch = ( environment ) => {

    return environment === "staging" ? "https://staging.api.gorillalogic.blupp.co" : "https://api.gorillalogic.blupp.co"

}
