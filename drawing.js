var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
ctx.arc(200, 200, 125, 0, 2 * Math.PI);
ctx.stroke();
for(var i = 0.0; i < 2.0 * Math.PI; i += 0.001){
	console.log(i);
	var big_y = Math.sin(i);
	var big_x = Math.cos(i);

	var other_y = Math.sin(-3.0 * i);
	var other_x = Math.cos(-3.0 * i);

	ctx.fillRect(200 + (big_y * 100 + other_y * 25), 200 + (big_x * 100 + other_x * 25), 1, 1);
}