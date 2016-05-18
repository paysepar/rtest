// Register events
window.addEventListener("keydown", register);
window.addEventListener("mousedown", register);
window.addEventListener("touchstart", register);

var times = []; // times when user clicked
var marknum = 0; // index in times[]
var xvis = true; // x is visible
var minWait = 500; // minimum time until next appearance of X
var nextAppear = minWait + Math.random(); // time until next appearance of X

function register(evt)
{
    times[marknum] = performance.now();
    console.log("Marker number: " + marknum.toString() + "\n Time: " + times[marknum]);
    marknum++;
}

function tstart()
{
    
}