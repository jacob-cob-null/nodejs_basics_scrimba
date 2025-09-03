import { parse } from "node:url"
import { getDestinationbyId, getDestinations } from "../controller/crud.js"

//router setup
export async function routesEntry(req, res) {

    const parsedUrl = parse(req.url, true)
    const urlRoute = parsedUrl.pathname

    //routes

    // /destinations
    if (urlRoute == '/destinations') {
        getDestinations(req, res)

        // /destinations/id
    } else if (urlRoute.startsWith('/destinations/')) {
        const id = urlRoute.split('/').pop()
        console.log(id)
        await getDestinationbyId(id, req, res)
    }
}