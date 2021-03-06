import * as constants from './constants'

const defaultState = {
	isOpened: false,
	obj: null,
	which: '',
	content: ''
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.OPEN_MODAL:
			return {...state, 
				isOpened: true, 
				obj: action.data, 
				which: action.which,
				content: action.data.dis
			};
		case constants.CLOSE_MODAL:
			return {...state, isOpened: false};
		case constants.CHANGE_CONTENT:
			return {...state, content: action.data}
		default:
			return state;
	}
}