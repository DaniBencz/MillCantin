import React, { useState } from 'react'
import github from './github.png'
import logo from './logo1-100.png'
import loader from './loader.gif'
import './App.css'

const App = () => {
	const [menuDetails, setDetails] = useState(0)
	const [loading, setLoading] = useState(0)

	const getMenu = (letter: string) => {
		setLoading(1)
		setDetails(0)
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
					<h3>which menu are you interested in?</h3>
				</div>
				<div id="buttons">
					<button onClick={() => getMenu('a')}>Menu A</button>
					<button onClick={() => getMenu('b')}>Menu B</button>
				</div>
				{loading ? <div id="loader"><img alt="loader" src={loader} width="150" height="150"></img></div> : null}
				{menuDetails ? <Display details={menuDetails}></Display> : null}
			</div>
		</div>
	)
}

const Display = ({ details }: any) => {
	const { price, soup, soup_allergenes, main, main_allergenes, letter } = details
	return (
		<div id="display">
			<h2>{`Menu ${letter}`}</h2>
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
					return <img alt="main allergenes" src={el} key={i.toString()}></img>
				})}
			</p>
		</div>
	)
}

export default App
