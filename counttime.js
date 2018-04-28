////////////////////////////Countdown player 1
var c1 = 60;
var t1;
var timer_is_on1 = 0;
function timedCount1() {
    document.getElementById('userTime1').value = c1;
    c1 = c1 - 1;
    if (c1 == -1){
		document.getElementById("result").innerHTML = colorChoosePlayer1 + ' lose';
		document.getElementById("result").style.color = colorChoosePlayer1;
		document.getElementById("btnPlayAgain").style.visibility = "visible";
    	return;
	}
    t1 = setTimeout(function(){ timedCount1() }, 1000);
}
function startCount1() {
    if (!timer_is_on1) {
        timer_is_on1 = 1;
        timedCount1();
    }
}

function stopCount1() {
    clearTimeout(t1);
    timer_is_on1 = 0;
}
////////////////////////////Countdown player 1
////////////////////////////Countdown player 2/////////////////////
var c2 = 60;
var t2;
var timer_is_on2 = 0;
function timedCount2() {
    document.getElementById('userTime2').value = c2;
    c2 = c2 - 1;
    if (c2 == -1){
		document.getElementById("result").innerHTML = colorChoosePlayer2 + ' lose';
		document.getElementById("result").style.color = colorChoosePlayer2;
		document.getElementById("btnPlayAgain").style.visibility = "visible";
    	return;
	}
    t2 = setTimeout(function(){ timedCount2() }, 1000);
}
function startCount2() {
    if (!timer_is_on2) {
        timer_is_on2 = 1;
        timedCount2();
    }
}

function stopCount2() {
    clearTimeout(t2);
    timer_is_on2 = 0;
}
////////////////////////////Countdown player 2/////////////////////
//Countdown




/////////Help////////////////////////
//////////muon bat dau tinh gio thi dungf startCount1()///////////////
////////// muon pause thi dung stopCount1()/////////////
///////////////tuong tu voi player2//////////////