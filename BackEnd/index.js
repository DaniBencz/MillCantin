'use strict'

const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const { getMenuPage, scrapeMenuPage } = require('./services')

app.get('/', (req, res) => {
	console.log("endpoint hit")
	res.send('MillCantin')
})

app.get('/api/menus/a', (req, res) => {
	console.log("endpoint menus/a hit")

	getMenuPage("A")
		.then((url) => scrapeMenuPage(url))
		.then(menuDetails => {
			menuDetails.letter = 'A'
			res.send(menuDetails)
		})
		.catch(() => {
			res.send(`something went wrong...`)
		})
})

app.get('/pi/menus/b', (req, res) => {
	console.log("endpoint menus/b hit")
	res.send('B menu')
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
