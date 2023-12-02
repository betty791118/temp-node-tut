const num1 = 3
const num2 = 5

function addValues() {
    console.log(`this is the sum ${num1+num2}`)
}

addValues()
//如果module 裡面已經執行function 了, 那調用module 的時候, 這邊不需要exports