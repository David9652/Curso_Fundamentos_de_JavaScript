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

let setTimeoutP = function (time) {
    return new Promise(function (res,rej) {
        if(isNaN(time)){
            rej("A number is required")
        }
        setTimeout(res,time);
    })
}

setTimeoutP("test")
    .then(function () {
        console.log("Done")
    })
    .catch(function (err) {
        console.error(err)   
    })