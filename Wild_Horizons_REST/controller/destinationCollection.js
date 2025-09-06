import { headUtil } from "../utility/util.js";
import { getData } from "../database/dataFetcher.js";


// GET /destinations
export async function getDestinations(req, res) {
    const data = await getData()
    if (data) {
        headUtil(res, 200, "application/json")
        res.end(JSON.stringify(data))
    } else {
        headUtil(res, 404, "application/json")
        res.end(JSON.stringify({ message: "Destinations not found" }))
    }
}

// GET /destinations/open
export async function getOpenDestinations(req, res) {
    const data = await getData()
    if (data) {
        const filteredDestination = data.filter(destination => destination.is_open_to_public === true)
        headUtil(res, 200, "application/json")
        res.end(JSON.stringify(filteredDestination))
    } else {
        headUtil(res, 404, "application/json")
        res.end(JSON.stringify({ message: "Destinations not found" }))
    }
}
// GET /destinations/restricted
export async function getRestrictedDestinations(req, res) {
    const data = await getData()
    if (data) {
        const filteredDestination = data.filter(destination => destination.is_open_to_public === false)
        headUtil(res, 200, "application/json")
        res.end(JSON.stringify(filteredDestination))
    } else {
        headUtil(res, 404, "application/json")
        res.end(JSON.stringify({ message: "Destinations not found" }))
    }
}

// GET /destinations/restricted
// GET /destinations/continent/:continent
// GET /destinations/country/:country
// GET /destinations/search?q=keyword
