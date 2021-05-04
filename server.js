function requireHTTPS(req,res,next){
    if(!req.secure && req.get('x-forwarded-proto')=='https'){
        return res.redirect('https://'+req.get('host')+req.url);
    }

    next()
}


const express = require('express')
const app = express()
app.use(requireHTTPS)

app.use(express.static('./dist/betsson'))


app.get('/*', function(req,res){
    res.sendFile('index.html',{
        root: 'dist/betsson'
    })
})

const port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log(`server is listening on port ${port}`)
})