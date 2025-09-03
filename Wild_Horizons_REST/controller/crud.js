import { headUtil } from "../utility/util.js";
import { getData } from "../database/dataFetcher.js";


// /destinations
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

// /destinations/
export async function getDestinationbyId(id, req, res) {
    const data = await getData()
    const destination = data.find((item) => item.id === Number(id))

    if (destination) {
        headUtil(res, 200, "application/json")
        res.end(JSON.stringify(destination))
    } else {
        headUtil(res, 404, "application/json")
        res.end(JSON.stringify({ message: "Destination not found" }))
    }
}
// post new destination
// put destination
// patch destination
// delete destination