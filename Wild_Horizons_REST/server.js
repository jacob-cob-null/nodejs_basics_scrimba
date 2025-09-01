import { write } from 'node:fs'
import http from 'node:http'

const PORT = 8000

//pass a callback, req and res
const server = http.createServer((req, res) => {
    res.write("THis is a data")
    res.end()
})

//get port and callback
server.listen(PORT, () => console.log(`From ${PORT}`))