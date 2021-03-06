function asyncFunction() {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("asyncFunction has been resolved");
        },5000)
    }
)}

function asyncFunction2() {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("asyncFunction2 is done");
        },1000)
    }
)}

asyncFunction()
.then(function(val){
    console.log(`Yeah! ${val}`)
    return asyncFunction2()
})
.then(function(val){
    console.log(`Second Promise! ${val}`)
})

console.log("The code is Asynchronous.")