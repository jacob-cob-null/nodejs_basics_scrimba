export function headUtil(res, code, contentType) {
    res.writeHead(code, {
        'Content-Type': `${contentType}`
    })
}