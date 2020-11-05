'use strict'

const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const { getMenuDetails } = require('./services')

app.use(express.static('public'))

app.get('/api/menus/a', (req, res) => {
	console.log("'api/menus/a' hit")

	getMenuDetails("A")
		.then(menuDetails => {
			console.log('sending response')
			res.status(200).json(menuDetails)
		})
		.catch((err) => {
			console.log(err)
			res.status(500).send(`something went wrong...`)
		})
})

app.get('/api/menus/b', (req, res) => {
	console.log("'api/menus/b' hit")

	getMenuDetails("B")
		.then(menuDetails => {
			console.log('sending response')
			res.status(200).json(menuDetails)
		})
		.catch((err) => {
			console.log(err)
			res.status(500).send(`something went wrong...`)
		})
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
