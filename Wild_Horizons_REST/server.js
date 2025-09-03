import http from 'node:http'
import { routesEntry } from './routes/routeEntry.js'
import { parse } from 'node:path'

const PORT = 3000

const server = http.createServer(async (req, res) => {

    //router entry
    routesEntry(req, res)

})

server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
