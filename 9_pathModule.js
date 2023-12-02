console.log(__dirname);

const path = require("path")
console.log(path.sep);

//資料夾路徑, join 只是把string 合在一起變成路徑
const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath)

//call the text from filePath
const base = path.basename(filePath)
console.log(base);

//path.resolve 將路徑解讀為絕對路徑
//如果遇到绝对路径（以/或驱动器盘符开始），则之前的路径会被忽略。
const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute)