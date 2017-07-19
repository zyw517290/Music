<template>
  <div class="singer" ref="singer">
    <listview :data="singerList" ref="list"></listview>
  </div>
</template>

<script type="text/ecmascript-6">
	import {getSingerList} from 'api/singer'
	import Singer from 'common/js/singer'
	import Listview from 'base/listview/listview'
	
			let HOT_NAME = "热门"
			let HOT_COUNT = 10
			export default {
				data() {
					return {
						singerList: []
					}
				},
				created(){
					this._getSingerList()
				},
				methods: {
					_getSingerList() {
						getSingerList().then((res) => {
							if(res.code === 0){
								this.singerList = this._normalSingerList(res.data.list)
							}
						})
					},
					_normalSingerList(list){
						let map = {
							hot: {
								title: HOT_NAME,
								item: []
							}
						}
						list.forEach((item,index) => {
							if(index < HOT_COUNT){
								map.hot.item.push(new Singer({
									id: item.Fsinger_mid,
									name: item.Fsinger_name
								}))
							}
							const key = item.Findex
							if(!map[key]){
								map[key] = {
									title: key,
									items: []
								}
							}
							map[key].items.push(new Singer({
								id: item.Fsinger_mid,
								name: item.Fsinger_name
							}))
						})
						
						console.log(map)
						
						let hot = []
						let ret = []
						for(let key in map){
							let val = map[key]
							if(val.title.match(/[a-zA-Z]/)){
								ret.push(val)
							}else if(val.title === HOT_NAME){
								hot.push(val)
							}
						}
						ret.sort((a,b) => {
							return a.title.charCodeAt(0) - b.title.charCodeAt(0)
						})
						return hot.concat(ret)
					}
				},
				components: {
					Listview
				}
			}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
