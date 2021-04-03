var drawFrame = function () {
    if (typeof window !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        window.requestAnimationFrame(draw);
    }
};
var move = Math.random();
var draw = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    for (var x = 0; x < 256; x++) {
        for (var y = 0; y < 256; y++) {
            if ((x ^ y) % 9) {
                context.fillRect(x * 5, y * 4, 4, 4);
            }
        }
    }
    drawFrame();
};
var init = function () {
    drawFrame();
};
init();
