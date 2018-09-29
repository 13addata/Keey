var app = new Vue({

	el: "#body",
	data : {
		name: '',
		link: '',
		group: 'void',
		tools: false,
		others: false,
		showPanel: false,
		delseen: false,
		google: true,
		isF: false,
		switchBox: "switch-box-slider",
		list:[],
	},
	created() {
		this.getList()
	},

	methods : {
		panelClose() {
			this.showPanel = false
		},
		linkfill() {
			this.link = 'https://'
		},
		createShortcut() {
			var sc = { name: this.name, link: this.link, icon: this.link+"favicon.ico", group: this.group}
			this.list.push(sc)
			this.name = this.link =''
		},
		del(index) {
			this.list.splice(index,1);
		},
		ifocus() {
			this.isF = true
		},
		iblur() {
			this.isF = false
		},
		getList() {
			this.$http.get('http://localhost:3000/data').then(result => {
				if(result.status === 200) {
					this.list = result.body.list
				}else{
					console.log('fail to get data from server')
				}
			})
		},
		// getList() {
		// 	this.$http.get('http://localhost:3000/data').then(function(result) {
		// 		console.log(result.body.list)
		// 	})
		// },
	},
	directives: {        
		clickoutside:{            
			bind:function(el,binding,vnode){                
				function documentHandler(e){                    
					if(el.contains(e.target)){                        
						return false;                    
					}                    
					if(binding.expression){                        
						binding.value(e)                    
					}                
				}                
				el._vueClickOutside_ = documentHandler;                
				document.addEventListener('click',documentHandler);            
			},            
			unbind:function(el,binding){                
				document.removeEventListener('click',el._vueClickOutside_);                
				delete el._vueClickOutside_;            
			}        
		}    
	},
})

function searchtoggle(){
        $('.slider').toggleClass('on');
}