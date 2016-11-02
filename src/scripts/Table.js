import React from 'react';
import SingleRow from './SingleRow';
import table from '../styles/_Table.scss';
import header from '../styles/_TableHeader.scss';
import add from '../styles/_AddRecord.scss';

class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
			tableRows: props.tableRows
		};
	}

	updateSearch(event) {
		this.setState ( {search: event.target.value} );
	}

	addRecord(event) {
		event.preventDefault();
		let user = this.refs.user.value,
			post = this.refs.post.value,
			id = this.state.tableRows.length + 1,
			views = 0,
			likes = 0, 
			created = Date.now();
		this.setState( {
			tableRows: this.state.tableRows.concat({id, user, post, views, likes, created})
		});
		this.refs.user.value = "";
		this.refs.post.value = "";
	}

	render() {
			let rows = this.state.tableRows.filter( (item) => {
				return item.user.toLowerCase().indexOf( this.state.search.toLowerCase() ) !== -1;
			});
			rows = rows.map( (item) => {
				return <SingleRow key={item.id} tableRows={item} />
			} );
		return (
			<div>
				<input type="text" className="filter"
					value={this.state.search} 
					onChange={this.updateSearch.bind(this)}
					placeholder="Type to filter"
				/>
				<form className="add" onSubmit={this.addRecord.bind(this)} >
					<input className="add__user" type="text" ref="user" name="user" placeholder="User"/>
					<input className="add__post-title" type="text" ref="post" name="post-title" placeholder="Sample Title"/>
					<button className="add__record" type="submit">Add Item</button>
				</form>
				<p className="header">
					<span className="header__id">ID</span>
					<span className="header__user">User name</span>
					<span className="header__post-title">Post title</span>
					<span className="header__views">Views</span>
					<span className="header__likes">Likes</span>
					<span className="header__created">Created at</span>
				</p>	
				<ul className="table">
					{rows}
				</ul>
			</div>
		);
	}
}

export default Table;