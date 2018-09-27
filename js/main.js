var app = new Vue({

	el: "#body",
	data : {
		name: '',
		link: '',
		showPanel: false,
		delseen: false,
		list: [
		{
			name: 'Google',
			link: 'https://www.google.com/',
			icon: 'https://www.google.com/favicon.ico',
			group: 'Favorite'
		},
		{
			name: 'Baidu',
			link: 'https://www.baidu.com/',
			icon: 'https://www.baidu.com/favicon.ico',
			group: 'Favorite'
		},
		{
			name: 'Facebook',
			link: 'https://facebook.com/',
			icon: 'https://facebook.com/favicon.ico',
			group: 'Social'
		},
		{
			name: 'Twitter',
			link: 'https://twitter.com/',
			icon: 'https://twitter.com/favicon.ico',
			group: 'Social'
		},
		{
			name: 'Instagram',
			link: 'https://www.Instagram.com/',
			icon: 'https://www.Instagram.com/favicon.ico',
			group: 'Social'
		},
		{
			name: '博客园',
			link: 'https://www.cnblogs.com/',
			icon: 'https://www.cnblogs.com/favicon.ico',
			group: 'Academy'
		},
		{
			name: 'Segmentfault',
			link: 'https://www.segmentfault.com/',
			icon: 'https://www.segmentfault.com/favicon.ico',
			group: 'Academy'
		},
		{
			name: 'Vue.js',
			link: 'https://vuejs.org/v2/guide/',
			icon: 'https://vuejsexamples.com/favicon.ico',
			group: 'Academy'
		},
		{
			name: 'New York Times',
			link: 'https://www.nytimes.com/',
			icon: 'https://www.nytimes.com/favicon.ico',
			group: 'News'
		},
		{
			name: 'Youtube',
			link: 'https://www.youtube.com/',
			icon: 'https://www.youtube.com/favicon.ico',
			group: 'Entertainment'
		},
		{
			name: 'netflix',
			link: 'https://www.netflix.com/',
			icon: 'https://www.netflix.com/favicon.ico',
			group: 'Entertainment'
		},
		]
	},
	methods : {
		sideToggle() {
			this.showPanel = !this.showPanel
		},
		linkfill() {
			this.link = 'https://'
		},
		createShortcut() {
			var sc = { name: this.name, link: this.link, icon: this.link+"favicon.ico"}
			this.list.push(sc)
			this.name = this.link ='' 
		},
		del(index) {
			this.list.splice(index,1);
		},
	},
})