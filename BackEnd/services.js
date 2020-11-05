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

const getMainDish = ($, menuLetter) => {
	return new Promise((res, rej) => {
		let main
		// since page structure for the two menus are slightly different
		// it has to be handled
		if (menuLetter === 'A') {
			let str = $('.woocommerce-product-details__short-description p:nth-child(4)')
				.text().replace('Main course: ', '')
			let indexOfLineBreak = str.indexOf("\n")
			main = str.substring(indexOfLineBreak + 1)
		}
		else {
			main = $('.woocommerce-product-details__short-description p:nth-child(5)')
				.text().replace('Main course: ', '')
		}
		res({ $, main })
	})
}

const scrapeMenuPage = (url, menuLetter) => {
	console.log("scraping page")
	return new Promise((res, rej) => {
		const options = {
			method: 'GET',
			uri: url,
			transform: body => cheerio.load(body)
		}

		request(options)
			.then($ => {
				return getMainDish($, menuLetter)
			})
			.then(({ $, main }) => {
				let soup_allergenes = []
				$('.woocommerce-product-details__short-description p:nth-child(3) img').each((i, el) => {
					soup_allergenes.push(el.attribs.src)
				})

				const details = {
					price: $('p.price bdi').text(),
					soup: $('.woocommerce-product-details__short-description p:nth-child(2)')
						.text().replace('Soup: ', ''),
					soup_allergenes,
					main,
					// main_allergenes: $('.woocommerce-product-details__short-description p:nth-child(5)').text().replace('Soup: ', ''),
				}
				res(details)
			})
	})
}

const getMenuDetails = (menuLetter) => {
	return new Promise((res, rej) => {
		getMenuPage(menuLetter)
			.then((url) => scrapeMenuPage(url, menuLetter))
			.then(menuDetails => {
				menuDetails.letter = menuLetter
				res(menuDetails)
			})
	})
}

module.exports = {
	getMenuDetails
}