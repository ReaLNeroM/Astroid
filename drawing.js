var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var size = Math.min(canvas.width, canvas.height) / 2;

var spikes = 4;
var ratio = 0.25;

// var spikes_slide = document.getElementById('spikes_slider');
// noUiSlider.create(spikes_slide, {
// 	start: spikes,
// 	step: 1,
// 	range: {
// 		'min': 0,
// 		'max': 100
// 	}
// });
// var ratio_slide = document.getElementById('ratio_slider');
// noUiSlider.create(ratio_slide, {
// 	start: ratio,
// 	step: 0.01,
// 	range: {
// 		'min': 0.0,
// 		'max': 1000.0
// 	}
// });


main();
function main(){
	// var spikes = parseFloat(spikes_slide.noUiSlider.get());
	// var ratio = parseFloat(ratio_slide.noUiSlider.get());
	// spikes_slide.noUiSlider.set(spikes + 1);
	// ratio_slide.noUiSlider.set(ratio + 0.03);

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

	spikes += 1;
	ratio += 0.03;
	
	setTimeout(main, 20);
}
