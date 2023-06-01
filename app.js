const express = require('express')
const app = express()
const hbs = require('hbs');





app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
// Servir contenido estatico
app.use( express.static('public') )

app.get('/',   (req, res) =>  {
  res.render('home', {
    nombre: 'Isaac G',
    titulo: 'curso node'
  });
})



app.get('/generic',  (req, res) => {
  res.render('generic', {
    nombre: 'Isaac G',
    titulo: 'curso node'
  });
  })

  app.get('/elements',  (req, res) => {
    res.render('elements', {
      nombre: 'Isaac G',
      titulo: 'curso node'
    });
  })

app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/template/404.html')
  })

app.listen(8080)

console.log('App running in: 8080')