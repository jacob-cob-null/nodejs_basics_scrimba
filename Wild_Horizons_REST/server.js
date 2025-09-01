import http from 'node:http'
import { getData } from './database/dataFetcher.js'
const PORT = 8000

const server = http.createServer(async (req, res) => {

    console.log("Incoming request:", req.url)

    if (req.url == '/api') {
        const raw = await getData() || []
        const list = raw.map(item => `${item.name} from ${item.country}`)
        res.statusCode = 200
        res.end(JSON.stringify(list))
    }

})

server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
