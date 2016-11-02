import React from 'react';
import style from '../styles/_TableHeader.scss';

class TableHeader extends React.Component {
	render() {
		return (
			<p className="header">
				<span className="header__id">ID <input type="submit" value="sort"onClick={this.sort} /></span>
				<span className="header__user">User name</span>
				<span className="header__post-title">Post title</span>
				<span className="header__views">Views</span>
				<span className="header__likes">Likes</span>
				<span className="header__created">Created at</span>
			</p>
		);
	}

	sort () {
		console.log("Sort");
		
	}

}

export default TableHeader;