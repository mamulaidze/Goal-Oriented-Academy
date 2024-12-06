const  http = require('http')
const server = http.createServer((req, res) => {
    res.end("hlrthrththtrou")
    if(req === "/about"){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>About Us</h1>
            <p>This is our about page</p>
        `)
    }else if(req === "/homepage"){
        req.writeHead(200, { 'Content-Type': 'text/html'});
        res.end(`
            <h1>Home Page</h1>
            <p>This is our homepage</p>
            <a href="/"></a>
        `)
    }
})

const PORT = 5000

server.listen(PORT, () => {
    console.log(`seeeeeeeerveri`)
})