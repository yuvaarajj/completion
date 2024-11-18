const http = require('http')

const serveron = http.createServer((req, res) => {
    if(req.url === '/first'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>first server</title></head>')
        res.write('<body><h1>Welcome to my first server</h1></body>')
        res.write('</html>')
    }
    else{
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Nothing</title></head>')
        res.write('<body><h1>Nothing to see here</h1></body>')
        res.write('</html>')
    }
})

const port = 3000
serveron.listen(port, () => {
    console.log(`serverBro is running...`)
})