import React, { useState } from 'react'
import github from './github.png'
import logo from './logo1-100.png'
import './App.css'

function App() {
	const getMenu = (letter: string) => {
		console.log(letter)
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
				<h2>MillCantin totally fake clone site</h2>
				<h3>which menu are you interested in?</h3>
			</div>
			<div id="buttons">
				<button onClick={() => getMenu('A')}>Menu A</button>
				<button onClick={() => getMenu('B')}>Menu B</button>
			</div>
		</div>
	)
}

export default App
