import './App.css';
import Salutation from './Components/Salutation';
import Welcome from './Components/Welcome';

function App() {
	return (
		<div className="App">
			<h1 id="">Hello</h1>
			<Salutation name="Godlive" />
			<Welcome name="Marie" />
		</div>
	);
}

export default App;
