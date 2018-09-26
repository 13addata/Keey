var app = new Vue({

	el: "#body",
	data : {
		name: '',
		link: '',
		showsidebar: true,
		delseen: false,
		list: [
			{
				name: '博客园',
				link: 'https://www.cnblogs.com/',
				icon: 'https://www.cnblogs.com/favicon.ico'
			},
			{
				name: 'Segmentfault',
				link: 'https://segmentfault.com/',
				icon: 'https://segmentfault.com/favicon.ico'
			}
		]
	},
	methods : {
		sideToggle() {
			this.showsidebar = !this.showsidebar
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
			this.list.splice(index,1);//How to get index number ??
		}
	}
})