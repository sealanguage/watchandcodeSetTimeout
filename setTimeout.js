//runWithDebugger code
function logTenNumbers () {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}
function runWithDebugger(ourFunction) {
    debugger;
    ourFunction();
}
runWithDebugger(function logTenNumbers () {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
});

//setTimeout code
//simple text based alarm clock

setTimeout(function( ) { 
    console.log('wake up Gordon');
        }, 
    5000);