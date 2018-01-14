import {combineReducers} from 'redux';
import {cardData} from './fetchApiData';

const allReducers = combineReducers({
	cardData
});

export default allReducers;
