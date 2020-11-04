'use strict'

const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
	console.log("endpoint hit")
	res.send('MillCantin')
})
app.get('/api/menus/a', (req, res) => {
	console.log("endpoint menus/a hit")


	// https://millcantin.hu/termekkategoria/etlap/02-menuk/
	res.send('<h2>A menu</h2>')
})
app.get('/pi/menus/b', (req, res) => {
	console.log("endpoint menus/b hit")
	res.send('B menu')
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
