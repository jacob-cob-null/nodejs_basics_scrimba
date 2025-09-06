import { parse } from "node:url"
import { getDestinations, getOpenDestinations, getRestrictedDestinations } from "../controller/destinationCollection.js"
import { getDestinationbyId } from "../controller/destinationItem.js"

//router setup
export async function routesEntry(req, res) {

    const parsedUrl = parse(req.url, true)
    const urlRoute = parsedUrl.pathname

    //routes

    // /destinations
    if (urlRoute == '/destinations') {
        getDestinations(req, res)

    }
    // GET /destination/open
    else if (urlRoute == '/destinations/open') {
        getOpenDestinations(req, res)
    }
    // GET /destination/restricted
    else if (urlRoute == '/destinations/closed') {
        getRestrictedDestinations(req, res)
    }
    // /destinations/id
    else if (urlRoute.startsWith('/destinations/')) {
        const id = urlRoute.split('/').pop()

        const method = req.method
        switch (String(method)) {
            case 'PUT':
                console.log('put')
                break
            case 'PATCH':
                console.log('patch')
                break
            case 'GET':
                console.log('get')
                if (id) {
                    await getDestinationbyId(id, req, res)
                }
                break
        }
    }

}