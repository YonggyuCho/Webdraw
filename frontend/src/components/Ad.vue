<template>
  <div id="canvasContainer">
    <canvas id="canvas" width="700" height="400">
      This text is displayed if your browser does not support HTML5 Canvas.
    </canvas>
    <canvas id="canvas2" width="700" height="400">
      This text is displayed if your browser does not support HTML5 Canvas.
    </canvas>
    <canvas id="canvas3" width="700" height="400">
      This text is displayed if your browser does not support HTML5 Canvas.
    </canvas>
    <div id="buttons">
      <button id="clear">Clear</button>
      <button id="reset">Reset</button>
    </div>
     <div id="suggestions">hi</div>
  </div>
  
</template>

<script>
//그대로 복사하면 되는데 나중에 다시 해보기
export default {
  mounted() {
    // JavaScript 코드
    class Ink {
      constructor(xcoords, ycoords, times) {
        this.xcoords = xcoords;
        this.ycoords = ycoords;
        this.times = times;
      }
    }

    var canvas = document.getElementById("canvas");
    var canvas2 = document.getElementById("canvas2");
    var canvas3 = document.getElementById("canvas3");
    var ctx = canvas.getContext("2d");
    var ctx2 = canvas2.getContext("2d");
    var ctx3 = canvas3.getContext("2d");
    var radius = 3;
    var dragging = false;
    var startTime = 0;
    ctx.lineWidth = radius * 2;
    var inkArray = [];
    var tempStroke = [];
    var x = document.body;
    var offsetX = x.offsetLeft;
    var offsetY = x.offsetTop;
    var emptyArray2 = []; //y
    var emptyArray = []; //x
    var emptyArray3 = []; //times

    var sgs = document.getElementById('suggestions');

    function displaySuggestions(arr) {
      var appnd = '';
      sgs.innerHTML = '';
      arr.forEach(function (a) {
        if (a in window.stencils) {
          window.stencils[a].forEach(function (b) {
            sgs.innerHTML += '<img class="img" src="' + b.src + '" s-name=""/>';
          });
        }
      });

      document.getElementById('suggestions').addEventListener('click', btn);
    }

    var putPoint = function (e) {
      if (dragging) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
        canvas.style.cursor = "none";

        var mouseX = parseInt(e.clientX - offsetX);
        var mouseY = parseInt(e.clientY - offsetY);
        var time = Date.now() - startTime;
        emptyArray3.push(time);
        emptyArray.push(mouseX);
        emptyArray2.push(mouseY);
      }
    };

    var srcG;
    var xAv, yAv, h, w;
    var sgsComplete = 1;

    var btn = function (e) {
      try {
        sgsComplete = 0;
        var xMax = canvas.width;
        var yMax = canvas.height;

        var img = new Image();
        srcG = e.target.src.toString();
        img.src = srcG;

        xAv = (Math.max.apply(null, inkArray[0].xcoords) + Math.min.apply(null, inkArray[0].xcoords)) / 2;
        yAv = (Math.max.apply(null, inkArray[0].ycoords) + Math.min.apply(null, inkArray[0].ycoords)) / 2;

        w = 200;
        h = 200;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx2.clearRect(0, 0, canvas.width, canvas.height);
        img.onload = function () {
          ctx2.drawImage(img, (xAv - w / 2), (yAv - h / 2), w, h);
        };
        //
        sgs.innerHTML = "";
        //
      }
      catch (err) {
        console.warn('Null click has been handled.');
      }
    }

    var engage = function (e) {
      dragging = true;
      emptyArray = [];
      emptyArray2 = [];
      emptyArray3 = [];
      startTime = Date.now();
      ctx.fillStyle = "black";

      if (!sgsComplete) {
        var img = new Image();
        img.src = srcG;

        ctx2.clearRect(0, 0, canvas.width, canvas.height);
        img.onload = function () {
            //
          console.log(ctx3);
          console.log(img + ' ' + (xAv - w / 2) + ' ' + (yAv - h / 2) + ' ' + w + ' ' + h);  
            //
          ctx3.drawImage(img, (xAv - w / 2), (yAv - h / 2), w, h);
          inkArray.length = 0;
        };
        sgs.innerHTML = "";
        sgsComplete = 0;
      }
      putPoint(e);
    };

    var disengage = function () {
      if (dragging === true) {
        dragging = false;
        ctx.beginPath();
        canvas.style.cursor = "pointer";

        var stroke = new Ink(emptyArray, emptyArray2, emptyArray3);
        inkArray.push(stroke);

        var postArray = inkArray.map(function (inkObj) {
          return [inkObj.xcoords, inkObj.ycoords, inkObj.times];
        });

        var url = 'https://inputtools.google.com/request?ime=handwriting&app=autodraw&dbg=1&cs=1&oe=UTF-8';
        var requestBody = {
          input_type: 0,
          requests: [{
            ink: postArray,
            language: 'autodraw',
            writing_guide: {
              height: 400,
              width: 700
            }
          }]
        };
        fetch(url, {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json; charset=utf-8'
          }),
          body: JSON.stringify(requestBody),
        }).then(function (response) {
          return response.json();
        }).then(function (jsonResponse) {
          displaySuggestions(jsonResponse[1][0][1]);
        });
      }
    };

    var mouseoutEvent = function () {
      dragging = false;
      ctx.beginPath();
      canvas.style.cursor = "pointer";
    };

    

    var clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      inkArray.length = 0;
      sgs.innerHTML = "";
    });

    var resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx3.clearRect(0, 0, canvas.width, canvas.height);
      ctx2.clearRect(0, 0, canvas.width, canvas.height);
      inkArray.length = 0;
      sgs.innerHTML = "";
      sgsComplete = 1;
    });

    canvas.addEventListener("mousemove", putPoint);
    canvas.addEventListener("mousedown", engage);
    canvas.addEventListener("mouseup", disengage);
    canvas.addEventListener("mouseout", disengage);

    displaySuggestions(["balloon"]);


  }
}
</script>

<style scoped>
canvas {
  border: 1px solid black;
}

#suggestions {
  width: 720px;
  margin: 0 -5px;
}

#suggestions img {
  margin: 4px 5px;
  width: 60px;
  height: 60px;
  border: 1px solid black;
}

#canvasContainer {
  width: 708px;
  height: 400px;
  position: relative;
  margin-bottom: 5px;
}

#canvasContainer canvas {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

#canvas {
  z-index: 99999;
}

#canvas2 {
  z-index: -99999;
}

#buttons {
  position: absolute;
  right: -50px;
  width: 50px;
  margin-right: -5px;
}

#buttons input {
  float: left;
  width: 100%;
  margin: 0 0 2px 0;
  padding: 8px;
  font-size: 12px;
}
</style>
