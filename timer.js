var startTimer = function (endTime){
    var now = new Date(),
        endTime = new Date( now.getTime() +  45 * 60000 ),
        parsedTime = Date.parse(now + (now.getMinutes() + 45 * 60000));
    console.log(now, endTime);
}

startTimer();