import React, { useState } from 'react'
import github from './github.png'
import logo from './logo1-100.png'
import loader from './loader.gif'
import './App.css'

const App = () => {
	const [renderDetails, setDetails] = useState(0)
	const [renderLoading, setLoading] = useState(0)
	const [connectionError, setError] = useState(0)

	const fetchMenu = (letter: string) => {
		setDetails(0)
		setLoading(1)
		setError(0)

		// fetch(`${window.location.origin}/api/menus/${letter}`)
		fetch(`http://localhost:4000/api/menus/${letter}`)
			.then(response => response.json())
			.then(resp => {
				setDetails(resp)
				setLoading(0)
			})
			.catch(() => {
				setDetails(0)
				setLoading(0)
				setError(1)
			})
	}

	return (
		<div className="App">
			<div id="wrapper">
				<header className="App-header">
					<div id="repo">
						<a href="https://github.com/DaniBencz/MillCantin" rel="noopener noreferrer" target="_blank">
							<img alt="gitHub repo" src={github} width="60" height="60"></img>
						</a>
					</div>
					<div>
						<img alt="Mill Cantin logo" src={logo} width="60" height="60"></img>
					</div>
				</header>
				<div id="welcome">
					<h2>Mill Cantin totally fake clone site</h2>
					<h3>Which menu are you interested in?</h3>
				</div>
				<div id="buttons">
					<button onClick={() => fetchMenu('a')}>Menu A</button>
					<button onClick={() => fetchMenu('b')}>Menu B</button>
				</div>
				{renderLoading ? <div id="loader"><img alt="loader" src={loader} width="150" height="150"></img></div> : null}
				{renderDetails ? <Display details={renderDetails}></Display> : null}
				{connectionError ? <h2>Something went wrong...</h2> : null}
			</div>
		</div>
	)
}

const getTodaysDate = () => {
	let today = new Date()
	let dd = String(today.getDate()).padStart(2, '0')
	let mm = String(today.getMonth() + 1).padStart(2, '0')
	let yyyy = today.getFullYear()
	return `${mm}/${dd}/${yyyy}`
}

const Display = ({ details }: any) => {
	const { price, soup, soup_allergenes, main, main_allergenes, letter } = details
	const today: string = getTodaysDate()

	return (
		<div id="display">
			<h2 id="letter">{`Menu ${letter}`}</h2>
			<span>{`on ${today}`}</span>
			<h2 id="price">{price}</h2>
			<p>{`Soup: ${soup}`}</p>
			<p>
				{soup_allergenes.map((el: string, i: number) => {
					return <img alt="soup allergenes" src={el} key={i.toString()}></img>
				})}
			</p>
			<p>{`Main: ${main}`}</p>
			<p>
				{main_allergenes.map((el: string, i: number) => {
					return <img alt="main allergenes" src={el} key={i}></img>
				})}
			</p>
		</div>
	)
}

export default App
