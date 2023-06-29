import VueDrawingCanvas from "vue-drawing-canvas";

export default {
  name: "ServeDev",
  components: {
    VueDrawingCanvas,
  },
  data() {
    return {
      initialImage: [
        {
          type: "dash",
          from: {
            x: 262,
            y: 154,
          },
          coordinates: [],
          color: "#000000",
          width: 5,
          fill: false,
        },
      ],
      x: 0,
      y: 0,
      image: "",
      eraser: false,
      disabled: false,
      fillShape: false,
      line: 5,
      color: "#000000",
      strokeType: "dash",
      lineCap: "square",
      lineJoin: "miter",
      backgroundColor: "#FFFFFF",
      backgroundImage: null,
      watermark: null,
      additionalImages: [],
      lastX : 0,
      lastY : 0,
      startX2 : 0,
      startY2 : 0,
    };
  },
  mounted() {
    if ("vue-drawing-canvas" in window.localStorage) {
      this.initialImage = JSON.parse(
        window.localStorage.getItem("vue-drawing-canvas")
      );
    }
  },
  methods: {
    async setImage(event) {
      let URL = window.URL;
      this.backgroundImage = URL.createObjectURL(event.target.files[0]);
      await this.$refs.VueCanvasDrawing.redraw();
    },
    async setWatermarkImage(event) {
      let URL = window.URL;
      this.watermark = {
        type: "Image",
        source: URL.createObjectURL(event.target.files[0]),
        x: 0,
        y: 0,
        imageStyle: {
          width: 600,
          height: 400,
        },
      };
      await this.$refs.VueCanvasDrawing.redraw();
    },
    getCoordinate(event) {
      let coordinates = this.$refs.VueCanvasDrawing.getCoordinates(event);
      this.x = coordinates.x;
      this.y = coordinates.y;
    },
    getStrokes() {
      window.localStorage.setItem(
        "vue-drawing-canvas",
        JSON.stringify(this.$refs.VueCanvasDrawing.getAllStrokes())
      );
      alert(
        "Strokes saved, reload your browser to see the canvas with previously saved image"
      );
    },
    removeSavedStrokes() {
      window.localStorage.removeItem("vue-drawing-canvas");
      alert("Strokes cleared from local storage");
    },
    
    addEventListner(e) {
        
        startX2 = e.clientX;
        startY2 = e.clientY;

        header.classList.add("active");

        document.addEventListner("mouseup", onRemoveEvent);

        document.addEventListner("mousemove", onMove);
    },

    onRemoveEvent() {
        header.classList.remove("active");
        document.removeEventListner("mouseup", onRemoveEvent);
        document.removeEventListner("mousemove", onMove);
    },

    onMove(e) {
  
        lastX = startX2 - e.clientX;
        lastY = startY2 - e.clientY;

        startX2 = e.clientX;
        startY2 = e.clientY;

        aside.style.top = `${aside.offsetTop - lastY}px`;
        aside.style.left = `${aside.offsetLeft - lastX}px`;
    }



   
  },
};