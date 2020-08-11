function domLoaded(){
    var c = document.getElementById('canvas');
    var ctx = c.getContext('2d');
    var j = 0, pixSize = 5, pixCount = 50;
    for(var r = 0; r< pixCount; r++) {
        for(var i =0; i <pixCount; i++){
            if(i % pixCount === 0){
                j++;
            }

            ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
            ctx.fillRect(i*pixSize, j * pixSize, 100, 100);
        }
    }
}

setInterval(domLoaded, 100);