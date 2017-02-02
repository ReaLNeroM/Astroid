var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var spikes = 3.0;
var size = Math.min(canvas.width, canvas.height) / 2;
var ratio = 2.0;

main();
function main(){
	spikes = document.getElementById('spikesrange').value;
	ratio = document.getElementById('ratiorange').value / 100;
	var c_x = canvas.width / 2;
	var c_y = canvas.height / 2;
	var bigradius = size / (ratio + 1.0);
	var smallradius = size - bigradius;
	ctx.fillStyle = '#fff';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = '#000';
	ctx.beginPath();
	ctx.arc(c_x, c_y, size, 0, 2 * Math.PI);
	ctx.stroke();
	for(var i = 0.0; i < 2.0 * Math.PI; i += 0.0001){
		var big_y = Math.sin(i) * bigradius;
		var big_x = Math.cos(i) * bigradius;

		var other_y = Math.sin(-(spikes - 1.0) * i) * smallradius;
		var other_x = Math.cos(-(spikes - 1.0) * i) * smallradius;

		ctx.fillRect(c_x + big_x + other_x, c_y + big_y + other_y, 1, 1);
	}
	setTimeout(main, 15);
}