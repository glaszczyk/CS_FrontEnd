import React from 'react';
import style from '../styles/_SingleRow.scss';

class SingleRow extends React.Component {
	render() {
		return (
			<li className="row" >
				<span className="row__id">{this.props.tableRows.id}</span>
				<span className="row__user">{this.props.tableRows.user}</span>
				<span className="row__post-title">{this.props.tableRows.post}</span>
				<span className="row__views">{this.props.tableRows.views}</span>
				<span className="row__likes">{this.props.tableRows.likes}</span>
				<span className="row__created">{this.props.tableRows.created}</span>
			</li>
		);
	}
}

export default SingleRow;