var express =   require('express'),
    app =       express()

app.use('/', express.static(__dirname + '/client/'))
app.use('/libs', express.static(__dirname + '/node_modules/'))

app.listen(3000, function() {
    console.log('Im listening..')
})