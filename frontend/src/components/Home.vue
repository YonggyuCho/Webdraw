<template>
    <div class="home" @wheel.prevent >
      <div class="text">
        <p>저희 웹사이트는 구글에서 개발한 AutoDraw의 도구를 활용하여, 
        사용자가 그린 스케치를 인식하고 해당하는 
        그림으로 자동 완성해주는 기능을 제공합니다. </p>
        <p>사용자는 간단한 스케치를 AutoDraw에 그리면, 
        AI 알고리즘이 그림의 특징을 분석하고 관련된 
        그림 목록을 제시합니다.</p>
        <p>사용자는 제시된 목록에서 
        원하는 그림을 선택하여 
        완성시킬 수 있습니다.</p> 
        <span class="space"></span>
        

        
        <div class="button-container">
      <button class="start-button" @click="startDrawing">Start</button>
        </div>

      </div>
      
    </div>
    
  </template>
  
  <script>
  

  export default {
    methods: {
      startDrawing() {
        // 로그인 페이지로 이동하는 코드를 작성하세요.
        this.$router.push('/login');
      },
      handleScroll(event) {
      event.preventDefault(); // 스크롤 이벤트의 기본 동작 막기
    },
    }
  }
  </script>
  
  <style scoped>
  .home {
    font-family: "Noto Sans KR", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url("bg.jpg") no-repeat center;
    background-size: cover;
    margin-top: 0px;
    overflow-y: scroll; /* 세로 스크롤 숨기기 */
    -ms-overflow-style: none;
    scrollbar-width: none; /* 파이어폭스 */
  }

  .home::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
  
  .text {
    text-align: center;
    color: #fff;
    font-size: 24px; /* Adjust the font size here */
  }
  .space {
  margin: 0 5px; /* 원하는 간격 크기로 조정하세요 */
}
  .button-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  
}

.start-button {
  padding: 15px 30px;
  font-size: 20px;
  width: 400px;
  height: 50px;
  background: #166cea;
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}



  </style>