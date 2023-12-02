//npm - global command, comes with node
//npm -- version

//local dependency - use it only in this particular project
//npm i < packageName> ==> 安裝package

//global dependency - use it in any project
//npm install - g <pakageName>
// sudo install -g <packageName> (mac)

//package.json -manifest file(stores important info about project/package)
//manual approach (create pakcage.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default, faster )

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)