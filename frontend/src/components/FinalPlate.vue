<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <aside class="side-bar">
    <section class="side-bar__icon-box">
    <section class="side-bar__icon-1">
      <div></div>
      <div></div>
      <div></div>
    </section>
  </section>
    <ul>
        <li><a href="#" @click="clearCanvas"><i class="fa-solid fa-magnifying-glass"></i>RE-SEARCH</a></li>
        <li><a href="#" @click="resetCanvas"><i class="fa-solid fa-eraser"></i>CLEAR</a></li>
        <li><a href="#" >COLOR<input type="color" id="colorPicker" value="색상 설정" @input="setColor" /></a></li>
        <li><a href="#" @click="startDrawing"><i class="fa-solid fa-pen"></i>PEN</a></li>
        <li><a href="#" @click="EndDrawing"><i class="fa-solid fa-arrows-cross"></i>NO PEN</a></li>
        <li><a href="#" @click="undoCanvas"><i class="fa-solid fa-rotate-left"></i>UNDO</a></li>
        <li><a href="#" @click="logout"><i class="fa-solid fa-right-from-bracket"></i>LOGOUT</a></li>
    </ul>
</aside>

  
  <section>
    <div id="suggestions"></div>
  <div id="canvasContainer">
    <canvas id="canvas" ref="canvas" width="1400" height="750">
      This text is displayed if your browser does not support HTML5 Canvas.
    </canvas>
    <canvas id="canvas2" ref="canvas2" width="1400" height="750">
      This text is displayed if your browser does not support HTML5 Canvas.
    </canvas>
    <canvas id="canvas3" ref="canvas3" width="1400" height="750">
      This text is displayed if your browser does not support HTML5 Canvas.
    </canvas>
  </div>

  
</section>

</template>

<script>
import stencils from '../stencils.js';

export default {
  name: 'DrawingApp',
  mounted() {
    const canvas = this.$refs.canvas;
    const canvas2 = this.$refs.canvas2;
    const canvas3 = this.$refs.canvas3;

    canvas.addEventListener('mousemove', this.putPoint);
    canvas.addEventListener('mousedown', this.engage);
    canvas.addEventListener('mouseup', this.disengage);
    canvas.addEventListener('mouseout', this.disengage);

    this.ctx = canvas.getContext('2d');
    this.ctx2 = canvas2.getContext('2d');
    this.ctx3 = canvas3.getContext('2d');
    this.radius = 3;
    this.dragging = false;
    this.startTime = 0;
    this.ctx.lineWidth = this.radius * 2;
    this.inkArray = [];
    this.tempStroke = [];
    this.x = document.body;
    this.offsetX = this.x.offsetLeft;
    this.offsetY = this.x.offsetTop;
    this.emptyArray2 = [];
    this.emptyArray = [];
    this.emptyArray3 = [];
    this.sgsComplete = 1;

    this.sgs = document.getElementById('suggestions');
    this.sgs.addEventListener('click', this.btn);
  },
  methods: {
    logout() {
        // 로그인 페이지로 이동하는 코드를 작성하세요.
        this.$router.push('/login');
      },
    undoCanvas(){
        if (this.inkArray.length > 0) {
          this.inkArray.pop();
          if(this.inkArray.length == 0){
            this.resetCanvas();
          }
          this.redrawCanvas(this.inkArray);
          
        }
        
    },
    redrawCanvas(inkArray) {
      this.ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
      this.ctx.beginPath();

      this.inkArray.forEach((stroke) => {
        const { xcoords, ycoords } = stroke;

        this.ctx.moveTo(xcoords[0], ycoords[0]);

        for (let i = 1; i < xcoords.length; i++) {
          this.ctx.lineTo(xcoords[i], ycoords[i]);
        }
      }); 
      this.ctx.stroke();
    },
    EndDrawing(){
      this.isDrawing = false;
      
      
    },
    startDrawing(){
      this.isDrawing = true;
    },
    setColor(e) {
      this.color = e.target.value;
      this.ctx.fillStyle = this.color;
      
    },
    putPoint(e) {
      if(this.isDrawing){
      if (this.dragging) {
        const rect = this.$refs.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(x, y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.$refs.canvas.style.cursor = 'none';

        this.emptyArray3.push(Date.now() - this.startTime);
        this.emptyArray.push(x);
        this.emptyArray2.push(y);
      }
    }
    },
    btn(e) {
      try {
        this.sgsComplete = 0;
        const xMax = this.$refs.canvas.width;
        const yMax = this.$refs.canvas.height;

        const img = new Image();
        this.srcG = e.target.src.toString();
        img.src = this.srcG;

        this.xAv = (Math.max.apply(null, this.inkArray[0].xcoords) + Math.min.apply(null, this.inkArray[0].xcoords)) / 2;
        this.yAv = (Math.max.apply(null, this.inkArray[0].ycoords) + Math.min.apply(null, this.inkArray[0].ycoords)) / 2;

        this.w = 200;
        this.h = 200;

        this.ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
        this.ctx2.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
        img.onload = () => {
          this.ctx2.drawImage(img, (this.xAv - this.w / 2), (this.yAv - this.h / 2), this.w, this.h);
        };
        this.sgs.innerHTML = '';
      } catch (err) {
        console.warn('Null click has been handled.');
      }
    },
    engage(e) {
      this.dragging = true;
      this.emptyArray = [];
      this.emptyArray2 = [];
      this.emptyArray3 = [];
      this.startTime = Date.now();
      this.ctx.fillStyle = 'black';

      if (!this.sgsComplete) {
        const img = new Image();
        img.src = this.srcG;

        this.ctx2.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
        img.onload = () => {
          this.ctx3.drawImage(img, (this.xAv - this.w / 2), (this.yAv - this.h / 2), this.w, this.h);
          this.inkArray.length = 0;
        };
        this.sgs.innerHTML = '';
        this.sgsComplete = 0;
      }
      this.putPoint(e);
    },
    disengage() {
      if (this.dragging === true) {
        this.dragging = false;
        this.ctx.beginPath();
        this.$refs.canvas.style.cursor = 'pointer';

        const stroke = {
          xcoords: this.emptyArray,
          ycoords: this.emptyArray2,
          times: this.emptyArray3,
        };

        this.inkArray.push(stroke);
        const postArray = this.inkArray.map(function (inkObj) {
          return [inkObj.xcoords, inkObj.ycoords, inkObj.times];
        });

        const url = 'https://inputtools.google.com/request?ime=handwriting&app=autodraw&dbg=1&cs=1&oe=UTF-8';
        const requestBody = {
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
        }).then((jsonResponse) => {
          this.displaySuggestions(jsonResponse[1][0][1]);
        });
      }
    },
    displaySuggestions(arr) {
      let appnd = '';
      this.sgs.innerHTML = '';
      arr.forEach((a) => {
        if (a in window.stencils) {
          window.stencils[a].forEach((b) => {
            this.sgs.innerHTML += '<img class="img" src="' + b.src + '" s-name=""/>';
          });
        }
      });
    },
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
      this.inkArray.length = 0;
      this.sgs.innerHTML = '';
    },
    resetCanvas() {
      this.ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
      this.inkArray.length = 0;
      this.sgs.innerHTML = '';

      this.ctx2.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
      this.ctx3.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
      this.sgsComplete = 1;

    },
  },
};
</script>

<style>

#suggestions{
  align-items: center;
  position: relative;
  margin: 0 auto;
  width: 1400px;
  height: 55px;
  overflow: auto;
  

}
#canvasContainer {
  position: relative;
  width: 1400px;
  height: 750px;
  margin: 0 auto;
  border: 1px solid black;
  overflow: hidden;
  cursor: crosshair;
  z-index: 1;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.068);
}

#canvas {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.068);
}

#canvas2 {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.068);
}

#canvas3 {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.068);
}


#buttons {
  text-align: center;
  margin-top: 10px;

    right: -50px;
    width: 50px;
    margin-right: -5px;
  
}

.img {
  width: 50px;
  height: 50px;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
}

aside{
  z-index: 2;
}

:root {
  --side-bar-width: 250px;
  --side-bar-height: 90vh;
}

.side-bar > ul ul {
  display: none;
}
ul, li {
  margin: 0;
  padding: 0;
  list-style: none;   	    /* 해당 태그의 list-style을 none으로 하는 것으로 ●을 제거한다 */
}

a {
  color: inherit;   	    /* 부모 엘리먼트의 값을 물려받는다 */
  text-decoration: none;    /* 해당 태그의 text-decoration 속성을 none 값으로 하는 것으로 밑줄을 제거한다 */
}

.side-bar {
  position: fixed;    /* 스크롤을 따라오도록 지정 */
  background-color: black;
  width: var(--side-bar-width);
  min-height: var(--side-bar-height);   /* 사이드바의 높이를 전체 화면 높이의 90%로 지정 */
  margin-top: calc((100vh - var(--side-bar-height)) / 2);    /* 사이드바 위와 아래의 마진을 동일하게 지정 */
  
}

/* 모든 메뉴의 a에 속성값 부여 */
.side-bar ul > li > a {
  display: block;
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
}

.side-bar > ul > li {
  position: relative;
}

/* 모든 메뉴가 마우스 인식 시 반응 */
.side-bar ul > li:hover > a {
  background-color: #555;
  border-bottom: 1px solid #999;
}

.side-bar > ul > li:hover > ul {
  display: block;
  position: absolute;
  background-color: #888;
  top: 0;         /* 2차 메뉴의 상단을 1차 메뉴의 상단에 고정 */
  left: 100%;     /* 2차 메뉴를 1차 메뉴의 너비만큼 이동 */
  width: 100%;    /* 1차 메뉴의 너비를 상속 */
}

/* 사이드바 너비의 80%만큼 왼쪽으로 이동 */
.side-bar {
  border-radius: 20px;
  transform: translate(-200px,0);  /* X축 이동, Y축 고정 */
  transition: .5s;
}

.side-bar:hover {
  transform: translate(-40px, 0);   /* 둥근 모서리의 너비만큼 X축 이동, Y축 고정 */
}


.side-bar__icon-box {
  display: flex;
  justify-content: flex-end;
}

.side-bar__icon-1 {
  position: relative;
  width: 23px;
  height: 17px;
  margin: 15px;
  margin-top: 20px;
  transition: .5s;
}

:root {
  --side-bar__icon: .5s;
}

.side-bar__icon-1 > div {
  position: absolute;
  width: 100%;
  height: 20%;
  background-color: white;
  transition: all var(--side-bar__icon);
}

.side-bar__icon-1 > div:nth-of-type(1) {
  top: 0;
  width: auto;
  left: 0;
  right: 0;
  transition: all var(--side-bar__icon), left calc(var(--side-bar__icon) / 2) calc(var(--side-bar__icon) / 2), right calc(var(--side-bar__icon) / 2) calc(var(--side-bar__icon) / 2), height calc(var(--side-bar__icon) / 2) 0s;
}

.side-bar__icon-1 > div:nth-of-type(2) {
  top: 40%;
  transform-origin:bottom left;
}

.side-bar__icon-1 > div:nth-of-type(3) {
  top: 80%;
  left: auto;
  right: 0;
  transform-origin:bottom right;
}


.side-bar:hover .side-bar__icon-1 {
  transform: translate(-198px, 0);
}

.side-bar:hover .side-bar__icon-1 > div:nth-of-type(2) {
  transform:rotate(45deg);
  width: 70.5%;
  height: 25%;
}

.side-bar:hover .side-bar__icon-1 > div:nth-of-type(3) {
  top: 40%;
  transform:rotate(-45deg);
  width: 70.5%;
  height: 25%;
}

.side-bar:hover .side-bar__icon-1 > div:nth-of-type(1) {
  left: 41%;
  right: 41%;
  height: 100%;
  transition: all var(--side-bar__icon), left calc(var(--side-bar__icon) / 2) 0s, right calc(var(--side-bar__icon) / 2) 0s, height calc(var(--side-bar__icon) / 2) calc(var(--side-bar__icon) / 2);
}

</style>
