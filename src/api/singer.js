import axios from 'axios'

export function getSingerList(){
	return axios.get('static/singer.json')
	.then((res) => {
		return res.data
	})
}
