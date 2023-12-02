const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end("Here is the home page")
    }
    else if(req.url=== '/about'){
        res.end("Here is our story")
    }
//default response
    else{
        res.end(`
        <h1>Opps</h1>
        <p> we cannot find the page</p>
        <a href="/">back home</a>
        `)
    }
})

server.listen(1000)
//localhost:1000