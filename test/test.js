const AutoRetryer = require('../')

var _fetch = function(url, options) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			//10% success
			if (Math.random() < 0.1) {
				resolve(url)
			} else {
				reject(url)
			}
		}, 500)
	})
}


var fetch = new AutoRetryer(_fetch, 30, 300)

fetch('http://example.com', {}).then(ret => {
	console.log('succcess', ret)
}).catch(err => {
	console.log('err', err)
})