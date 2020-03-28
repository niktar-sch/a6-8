
let progressPercent;

function addProgressPercent(percent) {
	progressPercent += percent;
	$("div.progress-bar").width(`${progressPercent}%`);
}

function init() {
	progressPercent = 0;
	addProgressPercent(0);
	$('#buttonPlus1').click(() => {addProgressPercent(1)});
	$('#buttonPlus3').click(() => {addProgressPercent(3)});
	$('#buttonPlus7').click(() => {addProgressPercent(7)});
}

$(document).ready(init);