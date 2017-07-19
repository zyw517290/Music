import axios from 'axios'

export function getRecommend() {
	return axios.get('static/recommend.json')
	.then((res) => {
		return res.data
	})
}

export function getDiscList() {
	return axios.get('static/disclist.json')
	.then((res) => {
		return res.data
	})
}
