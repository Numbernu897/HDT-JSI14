let [milliseconds,seconds,minutes] = [0,0,0];
//ko du thoi gian nen thoi ocpy and paste vay
let stopWatchRef1 = document.querySelector('.stopWatch');
let int1 = null;

let stopWatchRef2 = document.querySelector('.stopWatch2');
let int2 = null;

let stopWatchRef3 = document.querySelector('.stopWatch3');
let int3 = null;

let stopWatchRef4 = document.querySelector('.stopWatch4');
let int4 = null;

let stopWatchRef5 = document.querySelector('.stopWatch5');
let int5 = null;


let clockIdentifier1 = 1

//1stwatch

document.getElementById('start').addEventListener('click', ()=>{
    if(int1!==null){
        clearInterval(int1);
    }
    int1 = setInterval(displaystopWatch1,10);
});

document.getElementById('pause').addEventListener('click', ()=>{
    clearInterval(int1);
});

document.getElementById('reset').addEventListener('click', ()=>{
    clearInterval(int1);
    [milliseconds,seconds,minutes] = [0,0,0];
    stopWatchRef1.innerHTML = '00 m : 00 s : 000 ms';
});

function displaystopWatch1(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
    }
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    stopWatchRef1.innerHTML = `${m} ` + `m ` + ` : ${s} ` + `s` + ` : ${ms} ` + `ms`;
}

//2nd watch

document.getElementById('start2').addEventListener('click', ()=>{
    if(int2!==null){
        clearInterval(int2);
    }
    int2 = setInterval(displaystopWatch2,10);
});

document.getElementById('pause2').addEventListener('click', ()=>{
    clearInterval(int2);
});

document.getElementById('reset2').addEventListener('click', ()=>{
    clearInterval(int2);
    [milliseconds,seconds,minutes] = [0,0,0];
    stopWatchRef2.innerHTML = '00 m : 00 s : 000 ms';
});

function displaystopWatch2(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
    }
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    stopWatchRef2.innerHTML = `${m} ` + `m ` + ` : ${s} ` + `s` + ` : ${ms} ` + `ms`;
}


//3nd watch

document.getElementById('start3').addEventListener('click', ()=>{
    if(int3!==null){
        clearInterval(int3);
    }
    int3 = setInterval(displaystopWatch3,10);
});

document.getElementById('pause3').addEventListener('click', ()=>{
    clearInterval(int3);
});

document.getElementById('reset3').addEventListener('click', ()=>{
    clearInterval(int3);
    [milliseconds,seconds,minutes] = [0,0,0];
    stopWatchRef3.innerHTML = '00 m : 00 s : 000 ms';
});

function displaystopWatch3(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
    }
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    stopWatchRef3.innerHTML = `${m} ` + `m ` + ` : ${s} ` + `s` + ` : ${ms} ` + `ms`;
}

//4nd watch

document.getElementById('start4').addEventListener('click', ()=>{
    if(int4!==null){
        clearInterval(int4);
    }
    int4 = setInterval(displaystopWatch4,10);
});

document.getElementById('pause4').addEventListener('click', ()=>{
    clearInterval(int4);
});

document.getElementById('reset4').addEventListener('click', ()=>{
    clearInterval(int4);
    [milliseconds,seconds,minutes] = [0,0,0];
    stopWatchRef4.innerHTML = '00 m : 00 s : 000 ms';
});

function displaystopWatch4(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
    }
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    stopWatchRef4.innerHTML = `${m} ` + `m ` + ` : ${s} ` + `s` + ` : ${ms} ` + `ms`;
}

//5nd watch

document.getElementById('start5').addEventListener('click', ()=>{
    if(int5!==null){
        clearInterval(int5);
    }
    int5 = setInterval(displaystopWatch5,10);
});

document.getElementById('pause5').addEventListener('click', ()=>{
    clearInterval(int5);
});

document.getElementById('reset5').addEventListener('click', ()=>{
    clearInterval(int5);
    [milliseconds,seconds,minutes] = [0,0,0];
    stopWatchRef5.innerHTML = '00 m : 00 s : 000 ms';
});

function displaystopWatch5(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
    }
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    stopWatchRef5.innerHTML = `${m} ` + `m ` + ` : ${s} ` + `s` + ` : ${ms} ` + `ms`;
}


document.getElementById('stopAll').addEventListener('click', ()=>{
    clearInterval(int1);
    clearInterval(int2);
    clearInterval(int3);
    clearInterval(int4);
    clearInterval(int5);
    [milliseconds,seconds,minutes] = [0,0,0];
    stopWatchRef1.innerHTML = '00 m : 00 s : 000 ms';
    stopWatchRef2.innerHTML = '00 m : 00 s : 000 ms';
    stopWatchRef3.innerHTML = '00 m : 00 s : 000 ms';
    stopWatchRef4.innerHTML = '00 m : 00 s : 000 ms';
    stopWatchRef5.innerHTML = '00 m : 00 s : 000 ms';
}); 