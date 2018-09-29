#.Development notes

##0x01
	Install json-server
	$<npm install -g json-server>

	Use:
	create a database.json file
	Example:
	$<{
	"data":{
	"list": [	
		{
			"name": "Google",
			"link": "https://www.google.com/",
			"icon": "https://www.google.com/favicon.ico",
			"group": "Favorite"
		},
		{
			"name": "Baidu",
			"link": "https://www.baidu.com/",
			"icon": "https://www.baidu.com/favicon.ico",
			"group": "Favorite"
		},
		{
			"name": "Facebook",
			"link": "https://facebook.com/",
			"icon": "https://facebook.com/favicon.ico",
			"group": "Social"
		},
		{
			"name": "Twitter",
			"link": "https://twitter.com/",
			"icon": "https://twitter.com/favicon.ico",
			"group": "Social"
		},
		{
			"name": "Instagram",
			"link": "https://www.Instagram.com/",
			"icon": "https://www.Instagram.com/favicon.ico",
			"group": "Social"
		},
		{
			"name": "博客园",
			"link": "https://www.cnblogs.com/",
			"icon": "https://www.cnblogs.com/favicon.ico",
			"group": "Academy"
		},
		{
			"name": "Segmentfault",
			"link": "https://www.segmentfault.com/",
			"icon": "https://www.segmentfault.com/favicon.ico",
			"group": "Academy"
		},
		{
			"name": "Vue.js",
			"link": "https://vuejs.org/v2/guide/",
			"icon": "https://vuejsexamples.com/favicon.ico",
			"group": "Academy"
		},
		{
			"name": "New York Times",
			"link": "https://www.nytimes.com/",
			"icon": "https://www.nytimes.com/favicon.ico",
			"group": "News"
		},
		{
			"name": "Youtube",
			"link": "https://www.youtube.com/",
			"icon": "https://www.youtube.com/favicon.ico",
			"group": "Entertainment"
		},
		{
			"name": "Netflix",
			"link": "https://www.netflix.com/",
			"icon": "https://www.netflix.com/favicon.ico",
			"group": "Entertainment"
		},
		{
			"name": "Github",
			"link": "https://www.Github.com/",
			"icon": "https://www.Github.com/favicon.ico",
			"group": "Favorite"
		}
	]
	}
}>
	Start json-server
	$<json-server --watch database.json>

	visit http://localhost:3000

##0x02
	v-resource

	#<getList() {
	 	this.$http.get('http://localhost:3000/data').then(function(result) {
		console.log(result.body.list)
		})
	 },>


	$<
	created() {
		this.getList()
	},
	methods: {
		getList() {
			this.$http.get('http://localhost:3000/data').then(result => {
				if(result.status === 200) {
					this.list = result.body.list
				}else{
					console.log('fail to get data from server')
				}
			})
		},
	}>