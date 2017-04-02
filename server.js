"use strict"
let express = require('express')

let app= express()
let bodyParser= require('body-parser')
let session = require('express-session')
//Moteur de template

app.set('view engine','ejs')

//Middleware

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.use(session({
  secret: 'stranger',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(require('./middlewares/flash'))

//Routes

app.get('/', (request,response) => {

	console.log(request.session)

	response.render('pages/index',{test:'salut'})
})

app.post('/', (request, response) =>{
if(request.body.message === undefined || request.body.message === ''){

request.flash('error',"Pas de Post")
response.redirect('/')
}
else{
	let Message = require('./models/message')

	Message.create(request.body.message, function(){

		request.flash('success',"Oki good")
	})
}
response.redirect('/')
})


app.listen(3000)