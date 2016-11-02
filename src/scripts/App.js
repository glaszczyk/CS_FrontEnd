import React from 'react';
import MainBar from './MainBar';
import Table from './Table';
import style from '../styles/_App.scss';

var tableRows = [
	{
		id: 1,
		user: "Asterix the Gall",
		post: "Pax, pax, pax",
		views: 10,
		likes: 3,
		created: "2015-03-04" 
	},
	{
		id: 2,
		user: "Mustang Sally",
		post: "Fort Mustang 1959",
		views: 1000,
		likes: 345,
		created: "2014-02-05" 
	},
	{
		id: 3,
		user: "Coffee Mug",
		post: "Arabica 100%",
		views: 2000,
		likes: 935,
		created: "2015-06-04" 
	},
	{
		id: 4,
		user: "Lisa Simpson",
		post: "The Simpsons",
		views: 1000,
		likes: 345,
		created: "2013-08-09" 
	},
	{
		id: 5,
		user: "Ismael",
		post: "Moby Dick",
		views: 5400,
		likes: 3345,
		created: "2015-10-15" 
	},
	{
		id: 6,
		user: "John Doe",
		post: "How to train a Dragon",
		views: 100,
		likes: 35,
		created: "2014-12-25" 
	}
]

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<MainBar />
				<Table tableRows={tableRows} />
			</div>
		)
	}
}

export default App;