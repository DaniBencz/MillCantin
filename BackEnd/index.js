'use strict'

const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const { getMenuDetails } = require('./services')

app.get('/', (req, res) => {
	console.log("endpoint hit")
	res.send('MillCantin')
})

app.get('/api/menus/a', (req, res) => {
	console.log("'api/menus/a' hit")

	getMenuDetails("A")
		.then(menuDetails =>{
			console.log('sending response')
			res.send(menuDetails)
		})
		.catch((err) => {
			console.log(err)
			res.send(`something went wrong...`)
		})
})

app.get('/api/menus/b', (req, res) => {
	console.log("'api/menus/b' hit")
	
	getMenuDetails("B")
	.then(menuDetails =>{
		console.log('sending response')
		res.send(menuDetails)
	})
	.catch((err) => {
		console.log(err)
		res.send(`something went wrong...`)
	})
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
