let seconds = 0;
let timeInterval = null;

document.getElementById('btnStart').addEventListener('click', ()=>{
    timeInterval = setInterval(()=>{
        seconds++;
        const time = formatSecond(seconds);
        document.getElementById('time').innerHTML = time
    }, 1000);

})
document.getElementById('btnPause').addEventListener('click', ()=>{
    if (timeInterval){
        clearInterval(timeInterval);
    }
})
document.getElementById('btnStop').addEventListener('click', ()=>{
    if (timeInterval){
        clearInterval(timeInterval);
    }
    seconds = 0;
    document.getElementById('time').innerHTML = formatSecond(seconds);
})

function formatSecond(seconds){
    const n = Math.floor(seconds / 60);
    const s = seconds % 60;
    return n + ':' + s;
}