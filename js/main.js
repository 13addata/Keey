var app = new Vue({

	el: "#body",
	data : {
		name: '',
		link: '',
		showPanel: false,
		delseen: false,
		google: true,
		switchBox: "switch-box-slider",
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
		searchToggle() {
			this.google = !this.google
			}
	},
})

function searchtoggle(){
        $('.slider').toggleClass('on');
    }