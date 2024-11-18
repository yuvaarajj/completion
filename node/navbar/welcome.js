const http = require('http')

const serveron = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
   res.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <title>welcome</title>
</head>
<body>
    <nav>
        <a href="http:/home">home</a>
        <a href="http:/men">men</a>
        <a href="http:/women">women</a>
        <a href="http:/kids">kids</a>
        <a href="http:/cart">cart</a>
    </nav>
</body>
</html>
    `)
    if(req.url === '/home'){
        res.write('<h1>Welcome to home</h1>')
    }
    else if(req.url === '/men'){
        res.write('<h1>Welcome to men section</h1>')
    }
    else if(req.url === '/women'){
        res.write('<h1>Welcome to women section</h1>')
    }
    else if(req.url === '/kids'){
        res.write('<h1>Welcome to kids section</h1>')
    }
    else if(req.url === '/cart'){
        res.write('<h1>Welcome to cart section</h1>')
    }

const port = 3000
serveron.listen(port, () => {
    console.log(`serverBro is running...`)
})