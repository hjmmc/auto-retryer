# auto-retryer
extend the automatic retry function for the Promise function

## Build Setup

``` bash
# install dependencies
npm install auto-retryer --save

# node test
cd node_modules/auto-retryer
npm run test
```

## Usage

```js
const AutoRetryer = require('auto-retryer')
const _fetch = require('node-fetch')

//max retry 3 time
//sleep 300ms before retry
var fetch = new AutoRetryer(_fetch,3,300)

fetch('http://example.com',{method:'GET'}).then(ret=>{
    console.log('succcess',ret)
}).catch(err=>{
    console.log('err',err)
})
```