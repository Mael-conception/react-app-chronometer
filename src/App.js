import { useEffect, useState } from 'react';
import './App.css';
import Salutation from './Components/Salutation';
import Welcome from './Components/Welcome';

function App() {

	const [dateToday, setDateToday] = useState(new Date());
	const [auth, setAuth] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setDateToday(new Date());
			setAuth(true);
		}, 1000);

		return () => {
			clearInterval(interval);
			console.log('unmouted');
		}
	});

	return (
		<div className="App">
			<h1 id="">Hello</h1>

			{(auth) ? <Salutation name="Godlive" /> : <Welcome />}

			<h5>Il est {dateToday.toLocaleDateString() + ' a ' + dateToday.toLocaleTimeString()}</h5>
		</div>
	);
}

export default App;
