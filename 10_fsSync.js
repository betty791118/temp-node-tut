const { log } = require('console');
const {readFileSync,writeFileSync} = require('fs');
console.log("start");
//和以下是一樣的意思
//const fs = require('fs')
//fs.readFileSync
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/subfolder/second.txt','utf8')
console.log("done with this task");
writeFileSync(
    './content/result-sync.txt',
    `Hey, this is the result: ${first},${second}`,
    {flag:'a'}
)
//如果加flag:a, 文字不會覆蓋, 繼續加下去

console.log("ready to next task");