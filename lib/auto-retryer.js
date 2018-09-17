class AutoRetryer {
	constructor(func, max_retry, rest) {
		this.func = func
		this.MAX_RETRY = max_retry || 0
		this.rest = rest || 0
		return (...args) => {
			return new Promise((resolve, reject) => {
				this._do(resolve, reject, 0, ...args)
			})
		}
	}

	_do(resolve, reject, retry, ...args) {
		this.func(...args).then(ret => {
			resolve(ret)
		}).catch(err => {
			retry++
			if (retry <= this.MAX_RETRY) {
				// console.log('retry', retry, this.rest)
				if (this.rest > 0) {
					setTimeout(() => {
						this._do(resolve, reject, retry, ...args)
					}, this.rest)
				} else {
					this._do(resolve, reject, retry, ...args)
				}
			} else {
				reject(err)
			}
		})
	}
}

module.exports = AutoRetryer