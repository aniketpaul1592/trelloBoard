import React from 'react';
import { connect } from 'react-redux';
import { createComponent } from 'react-fela';
import './container.css';
import { itemsFetchData, sortAsPerRatingYear } from '../actions/actionCreator';
import List from "../components/List";
import Modal from 'react-modal';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div className="parentClass">
				<h2>Trello Board</h2>
				<div className='listClass'>
					<List name={'Todo'} cards={this.props.cards}/>
					<List name={'In Progess'} cards={this.props.cards}/>
					<List name={'Done'} cards={this.props.cards}/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
        cards: state.cardData,
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);