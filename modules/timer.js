var os = require('os');

function formatTime(uptime) {
	var uptime = os.uptime();
	var hours = Math.floor(uptime / 3600);
	var minutes = Math.floor((uptime % 3600) / 60);
	var seconds = Math.floor(uptime % 60);

	return hours + ' hours ' + minutes + ' min ' + seconds + ' sec';
}
exports.print = formatTime;
