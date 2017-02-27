var _getRemainingTime = function (time) {
    var t = time;
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    return {
        seconds: seconds,
        minutes: minutes
    }
}
var _startTimer = function (){
    if(!this.currentTime){ this.currentTime = new Date() };
    var time = this.currentTime.getTime();
    _countDown(time);
}
var _countDown = function (time) {
    var updateLoop = setInterval(function () {
        time = time - 1000; 
        updateElement(_getRemainingTime(time));
    }, 1000 );
}

var updateElement = function (updatedTime) {
    var wakatiElem = document.querySelector('#wakati');
    var WKseconds = wakatiElem.querySelector('.seconds');
    var WKminutes = wakatiElem.querySelector('.minutes'); 
    WKminutes.innerHTML = updatedTime.minutes.toString();
    WKseconds.innerHTML = updatedTime.seconds.toString();
}

var WakatiFactory = function () {
    return {
        interval: 45,
        update: _countDown,
        start: _startTimer
    }
};



var WakatiTimer = WakatiFactory();
WakatiTimer.start()