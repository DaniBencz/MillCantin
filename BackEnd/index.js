'use strict'

const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

const request = require('request-promise')
const cheerio = require('cheerio')

app.get('/', (req, res) => {
	console.log("endpoint hit")
	res.send('MillCantin')
})

app.get('/api/menus/a', (req, res) => {
	console.log("endpoint menus/a hit")
	const options = {
		method: 'GET',
		uri: 'https://millcantin.hu/termekkategoria/etlap/02-menuk/',
		transform: body => cheerio.load(body)
	}

	request(options)
		.then($ => {
			let urlA = $("a[title]")[4].attribs.href
			// console.log('urlA: ', urlA)
			return urlA
		})
		.then((urlA) => {
			return scrapeMenu(urlA)


			// res.send(`<a>${urlA}</a>`)
		})
		.then(price => {

			res.send(price)
		})
		.catch(() => {
			res.send(`something went wrong...`)
		})
})

const scrapeMenu = url => {
	return new Promise((res, rej) => {
		const options = {
			method: 'GET',
			uri: url,
			transform: body => cheerio.load(body)
		}

		request(options)
			.then($ => {
				res($('p.price bdi').text())
			})
	})
}

app.get('/pi/menus/b', (req, res) => {
	console.log("endpoint menus/b hit")
	res.send('B menu')
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
