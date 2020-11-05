import React, { useState } from 'react'
import github from './github.png'
import logo from './logo1-100.png'
import './App.css'

const App = () => {
	const [menuDetails, setDetails] = useState(false)

	const getMenu = (letter: string) => {
		// fetch(`${window.location.origin}/api/menus/${letter}`)
		fetch(`http://localhost:4000/api/menus/${letter}`)
			.then(response => response.json())
			.then(resp => {
				setDetails(resp)
			})
	}

	return (
		<div className="App">
			<header className="App-header">
				<div id="repo">
					<a href="https://github.com/DaniBencz/MillCantin" rel="noopener noreferrer" target="_blank">
						<img alt="gitHub repo" src={github} width="60" height="60"></img>
					</a>
				</div>
				<img alt="gitHub repo" src={logo} width="60" height="60"></img>
			</header>
			<div id="welcome">
				<h2>Mill Cantin totally fake clone site</h2>
				<h3>which menu are you interested in?</h3>
			</div>
			<div id="buttons">
				<button onClick={() => getMenu('a')}>Menu A</button>
				<button onClick={() => getMenu('b')}>Menu B</button>
			</div>
			{menuDetails ? <Display details={menuDetails}></Display> : null}
		</div>
	)
}

const Display = ({ details }: any) => {
	console.log(details)
	const { price, soup, soup_allergenes, main, main_allergenes, letter } = details
	return (
		<div id="display">
			<h2>{`Menu ${details.letter}`}</h2>
			<h2 id="price">{price}</h2>
			<p>{`Soup: ${soup}`}</p>
			<p>
				{soup_allergenes.map((el: string, i:number) => {
					return <img src={el} key={i.toString()}></img>
				})}
			</p>
		</div>
	)
}

export default App
