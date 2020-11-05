'use strict'

const request = require('request-promise')
const cheerio = require('cheerio')

const getMenuPage = (menuLetter) => {
	console.log("getting page")
	return new Promise((res, rej) => {
		const options = {
			method: 'GET',
			uri: 'https://millcantin.hu/termekkategoria/etlap/02-menuk/',
			transform: body => cheerio.load(body)
		}

		request(options)
			.then($ => {
				let index = (menuLetter === 'A' ? 4 : 5)
				let url = $("a[title]")[index].attribs.href
				res(url)
			})
	})
}

const scrapeMenuPage = url => {
	console.log("scraping page")
	return new Promise((res, rej) => {
		const options = {
			method: 'GET',
			uri: url,
			transform: body => cheerio.load(body)
		}

		request(options)
			.then($ => {
				const details = {
					price: $('p.price bdi').text(),
					soup: $('.woocommerce-product-details__short-description p:nth-child(2)').text().replace('Soup: ', ''),
					// soup_allergenes: $('.woocommerce-product-details__short-description p:nth-child(3)').text().replace('Soup: ', ''),
					main: $('.woocommerce-product-details__short-description p:nth-child(4)').text().replace('Main course: ', ''),
					// main_allergenes: $('.woocommerce-product-details__short-description p:nth-child(5)').text().replace('Soup: ', ''),
				}
				res(details)
			})
	})
}

const getMenuDetails = (menuLetter) =>{
	return new Promise((res, rej) => {
		getMenuPage(menuLetter)
		.then((url) => scrapeMenuPage(url))
		.then(menuDetails => {
			menuDetails.letter = menuLetter
			res(menuDetails)
		})
	})
}

module.exports = {
	getMenuDetails
}