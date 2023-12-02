const {readFile,writeFile} = require('fs');
console.log("start");
//asynchro 需要call back
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log("1"+err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{ 
    if(err){
        console.log("2"+err);
        return;
    }
    const second = result;
    writeFile('./content/result-async.txt',
    `Hey, this is the result: ${first},${second}`
    ,(err,result)=>{
        if(err){
            console.log("3"+err);
            return
        }
        console.log("done woth this task")
    })
   })
})
//result 是readFile 裡的東西
//err 是error
console.log("ready to next task");
//可以同步進行很多Task