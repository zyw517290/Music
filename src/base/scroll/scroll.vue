<template>
	<div ref="wrapper">
		<slot>
			
		</slot>
	</div>
</template>
<script type="text/ecmascript">
	import BScroll from 'better-scroll'
	const DIRECTION_H = 'horizontal'
	const DIRECTION_V = 'vertical'
	export default {
		props: {
			probeType: {
				type: Number,
				default: 1
			},
			click: {
				type: Boolean,
				default: true
			},
			data: {
				type: Array,
				default: null
			},
			refreshDealy: {
				type:Number,
				default: 20
			},
			listenScroll: {
				type:Boolean,
				default: false
			},
			direction: {
				type:String,
				default:DIRECTION_V
			}
		},
		mounted(){
			setTimeout(() => {
				this._initScroll()
			},20)
		},
		methods:{
			_initScroll(){
				if(!this.$refs.wrapper){
					return
				}
				this.scroll = new BScroll(this.$refs.wrapper,{
					probeType: this.probeType,
					click: this.click,
					eventPassthrough: this.direction === DIRECTION_V ? DIRECTION_H : DIRECTION_V
				})
				if(this.listenScroll){
					let that = this
					this.scroll.on('scroll', (pos) => {
						that.$emit('scroll', pos)
					})
				}
				if(this.pullup) {
					this.scroll.on('scrollEnd', ()=> {
						if(this.scroll.y <= (this.scrollmaxScrollY + 50)){
							this.$emit('scrollToEnd')
						}
					})
				}
			},
			disable(){
				this.scroll && this.scroll.disable()
			},
			enable() {
				this.scroll && this.scroll.enable()
			},
			refresh() {
				this.scroll && this.scroll.refresh()
			},
			scrollTo() {
				this.scroll && this.scrollTo.apply(this.scroll,arguments)
			},
			scrollToElement() {
				this.scroll && this.scroll.scrollToElement.apply(this.scroll,arguments)
			}
		},
		watch: {
			data(){
				setTimeout(() => {
					this.refresh()
				},this.refreshDealy)
			}
		}
	}
	
	
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	
</style>