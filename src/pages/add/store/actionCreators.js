import * as constants from './constants'
import Taro from '@tarojs/taro'

export const pickBigItem = (obj, s) => ({
	type: constants.PICK_BIG,
	data: obj,
	flag: s
})

export const saveItem = (arr) => {
	return (dispatch) => {
		Taro.request({
		  url: 'http://localhost:3000/',
		  data: {
		    arr: arr
		  },
		  header: {
		    'content-type': 'application/json'
		  }
		})
		.then(res => console.log(res.data))
		.catch((err) => {
			console.log(err)
		})
	}
}