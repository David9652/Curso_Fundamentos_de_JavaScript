let a = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Done")
    }, 4000);
});
console.log(a)

a.then(function(val){
    console.log(val)
}, function(val){
    console.log(`Rejected: ${val}`)
})


console.log("See this is asynch code");