<template>
    <html lang="en">
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <meta charset="UTF-8">
            <meta http-equive="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!--
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <script src="https://sdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js"></script>
            -->
            
            <title>Document</title>
        </head>

        <body>
            <header>
            <nav class="navbar">
                <div class="max-width">
                    <div class="logo"><a href="#home">Web<span>Draw</span></a></div>
                    <ul class="menubar">
                        <li><a href="#home" class="menu-btn" id="homeID">Home</a></li>
                        <li><a href="#about" class="menu-btn" id="aboutID">About</a></li>
                        <li><a href="#skills" class="menu-btn" id="skillsID">Skills</a></li>
                        <li><a href="#member" class="menu-btn" id="memberID">Member</a></li>
                        <li><a href="#start" class="menu-btn" id="startID">Get Start</a></li>
                    </ul>
                    <div class="menu-btn">
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
            </nav>
        </header>


            <!--Home-->
            <section class="home" id="home">
                <div class="max-width">
                    <div class="home-section">
                        <div class="text-1">Team SNM</div>
                        <div class="text-2">Web <span>Draw</span></div>
                        <div class="text-3">Draw <span class="typing1">Automaticaly</span></div>
                    </div>
                </div>
            </section>

            <!--About-->
            <section class="about" id="about">
                <div class="max-width">
                    <h2 class="title">About</h2>
                    <div class="about-content">
                        <p>저희 웹사이트는  
        사용자가 그린 스케치를 인식하고 해당하는 
        그림으로 자동 완성해주는 기능을 제공합니다.</p>
        <span class="space"></span>
  
        <p>사용자가 간단한 스케치를 Web Draw에 그리면, 
        AI 알고리즘이 그림의 특징을 분석해 관련된 
        그림 목록을 제시합니다.</p>
        <span class="space"></span>
  
        <p>사용자는 제시된 목록에서 
        원하는 그림을 선택하여 
        완성시킬 수 있습니다.</p> 
                    </div>
                </div>
            </section>

            <!--skills-->
            <section class="skills" id="skills">
                <div class="max-width">
                    <h2 class="title">Skills</h2>
                    <div class="skills-content">
                        <div class="left column"><div class="sk">
                            <div class="skills-images">
                                <img src="./vue.png" alt="">
                                <div class="skills-text">Vue3</div>
                            </div>
                                                </div>
                        </div>
                        <div class="center column">
                            <div class="sk">
                            <div class="skills-images">
                                <img src="./frontimg.png" alt="">
                                <div class="skills-text">HTML5, CSS3, JS</div>
                            </div>
                                                </div>
                        </div>
                        <div class="right column">
                            <div class="sk">
                            <div class="skills-images">
                                <img src="./pythonimg.jpg" alt="">
                                <div class="skills-text">Python</div>
                            </div>
                                                </div>
                        </div>
                    </div>
                </div>
            </section>

            <!--members-->
            <section class="member" id="member">
                <div class="max-width">
                    <h2 class="title">Members</h2>
                    <div class="member-content">
                        <div class="left column"><div class="mb">
                            <div class="member-images">
                                <img src="./y.jpg" alt="">
                                <div class="member-text">조용규</div>
                                <p>-Front End</p>
                                <p>-API</p>

                            </div>
                                                </div>
                        </div>
                        <div class="center column">
                            <div class="mb">
                            <div class="member-images">
                                <img src="./s.jpg" alt="">
                                <div class="member-text">진승민</div>
                                <p>-Team Leader</p>
                                <p>-Front End</p>
                                <p>-API</p>
                            </div>
                                                </div>
                        </div>
                        <div class="right column">
                            <div class="mb">
                            <div class="member-images">
                                <img src="./g.jpg" alt="">
                                <div class="member-text">홍기평</div>
                                <p>-Back End</p>
                                <p>-Searching</p>
                            </div>
                                                </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="start" id="start">
                <div class="max-width">
                    <h2 class="title" @click="startDrawing">Let's Get Start!</h2>

                </div>

            </section>

        </body>
    </html>

</template>

<style>
/*초기화*/
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&family=Hi+Melody&family=Noto+Serif+KR:wght@500&family=Poppins:wght@400;500;600;700&family=Stylish&family=Ubuntu:wght@400;500;700&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@-webkit-keyframes fadein {
  from{
    opacity: 0;

  }
  to {
    opacity: 1;
  }
}

.home .about .skills .member .start{
    padding-top: 86px;
}

html{
    scroll-behavior: smooth;
}
body{
    animation: fadein 5s ease 3s;
  -webkit-animation: fadein 3s;
}

.max-width{
    max-width: 1300px;
    padding: 0 20px;
    margin: auto;
}

/* 공통 부분*/

.section{
    padding: 100px 0;
}

.about, .skills, .member, .start{
    font-family: 'Poppins', sans-serif;
}


.skills .title,
.member .title{
    position: relative;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    margin: 30px 0 100px 0;
    padding-bottom: 8px;
    font-family: 'Ubuntu', sans-serif;
}

.about .title{
    color: aliceblue;
    position: relative;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    margin: 30px 0 100px 0;
    padding-bottom: 8px;
    font-family: 'Ubuntu', sans-serif;

}

.start .title{
    position: relative;
    text-align: center;
    font-size: 80px;
    font-weight: 500;
    margin: 30px 0 100px 0;
    padding-bottom: 8px;
    font-family: 'Ubuntu', sans-serif;
}

.start .title:hover{
    color: rgb(255, 164, 45);
    transition: all 1s ease;
    transform: scale(1.05);

}


.skills .title::after,
.member .title::after{
    content: "";
    position: absolute;
    bottom: -38px;
    left: 50%;
    font-size: 20px;
    color: rgb(255, 164, 45);
    padding: 5px;
    background-color: white;
    transform: translate(-50px);
}

.about .about-content,
.skills .skills-content,
.member .member-content,
.start .start-content{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
}

header{
    position: fixed;
    width: 100%;
    z-index: 20;

}
.navbar{
    position: fixed;
    width: 100%;
    padding: 20px 0;
    font-family: 'Ubuntu', sans-serif;
    z-index: 10;
    transition: all 0.3s ease;
    left: 0;
    right: 0;
    top: 0;
    background-color: aliceblue;
}

.navbar .max-width{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar .logo{
    font-size: 30px;
    font-weight: 600;
    margin-left: 20px;
    color: black;
}

.navbar .logo a{
    color: black;
    text-decoration: none;
}

.navbar .logo a span{
    color: rgb(255,164,45);
    transition: all 0.3s ease;
}

.navbar .menubar li{
    list-style: none;
    margin: 5px 20px 0 0;
    display: inline-block;
}

.navbar .menubar li a{
    display: block;
    color: black;
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    margin-left: 15px;
    transition: all 0.3s ease;
}

.navbar .menubar li a:hover{
    color: rgb(255,164,45);
}

.navbar.sticky{
    padding: 20px 0;
    background-color: rgb(25, 8, 53);
}

.navbar.sticky .logo a span{
    color: white;
}

.navbar.sticky .menubar li a:hover{
    color: white;
}

.navbar .menu-btn{
    color: white;
    font-size: 25px;
    display: none;
    cursor: pointer;
}

.home{
    display: flex;
    background: url(./bg.jpg) no-repeat center;
    height: 100vh;
    background-size: cover;
    min-height: 500px;
    color: white;
    font-family: 'Ubuntu', sans-serif; 
}

.home .max-width{
    margin: auto 0 auto 40px;
}

.home .home-section .text-1{
    font-size: 30px;
}

.home .home-section .text-2{
    font-size: 75px;
    font-weight: 600;
}

.home .home-section .text-2 span{
    font-size: 75px;
    font-weight: 600;
    color: rgb(255,164,45);

}

.home .home-section .text3{
    font-size: 40px;
}

.home .home-section .text3 span{
    color: rgb(255,164,45);
    font-weight: 500;
}

.about{
    padding: 100px 0;
    transition: all 0.3s ease;

    background: url(./bg3.jpg) no-repeat center;
    height: 100vh;
    background-size: cover;
}


.about .about-content{
    margin-bottom: 100px;
}

.about .about-content p{
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 500;
    text-align: justify;
    color: #fff;
}

.space {
  margin: 100px 0px; /* 원하는 간격 크기로 조정하세요 */
}

.skills{
    padding: 100px 0;
    transition: all 0.3s ease;
    
}

.skills .title::after{
    content: "Language";
}

.skills .skills-content{
    margin-bottom: 100px;
}

.skills .skills-content .left{
    width: 32%;
}

.skills .skills-content .center{
    width: 32%;
}

.skills .skills-content .right{
    width: 32%;
}

.skills .skills-content .sk{
    background-color: rgb(240, 236, 236);
    border-radius: 6px;
    padding: 25px 35px;
    transition: all 0.3s ease;
    align-items: center;
}

.skills .skills-content .sk img{
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 20%;
    border: 5px solid rgb(255, 164,45);
    transition: all 0.3s ease;
}

.skills .skills-content .sk:hover{
    background-color: rgb(25, 8, 53);
    color: white;
    transform: scale(1.05);
}

.skills .skills-content .sk:hover img{
    border-color: white;
}

.skills .skills-content .sk .skills-text{
    font-size: 18px;
    text-align: justify;
}


.member{
    padding: 100px 0;
    transition: all 0.3s ease;
}

.member .title::after{
    content: "member";
}

.member .member-content{
    margin-bottom: 100px;
}

.member .member-content .left{
    width: 32%;
    align-items: center;
}

.member .member-content .center{
    width: 32%;
}

.member .member-content .right{
    width: 32%;
}

.member .member-content .mb{
    background-color: rgb(240, 236, 236);
    border-radius: 6px;
    padding: 25px 35px;
    transition: all 0.3s ease;
    align-items: center;
}

.member .member-content .mb img{
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid rgb(255, 164,45);
    transition: all 0.3s ease;
}

.member .member-content .mb:hover{
    background-color: rgb(25, 8, 53);
    color: white;
    transform: scale(1.05);
}

.member .member-content .mb:hover img{
    border-color: white;
}

.member .member-content p{
    font-size: 18px;
    text-align: justify;
}

.start{
    display: flex;
    background: url(./bg.jpg) no-repeat center;
    height: 100vh;
    background-size: cover;
    min-height: 500px;
    color: white;
    font-family: 'Ubuntu', sans-serif; 
}

.start .max-width{
    margin: auto 0 auto 40px;
}



</style>

<script>
export default {
  name: 'App',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    const menuBtn = document.querySelector('.menu-btn');
    const menubar = document.querySelector('.navbar .menubar');

    menuBtn.addEventListener('click', () => {
      menubar.classList.toggle('active');
      menuBtn.classList.toggle('active');
    });
  },
  methods: {
    startDrawing() {
        // 로그인 페이지로 이동하는 코드를 작성하세요.
        this.$router.push('/login');
      },
      /*
    handleScroll() {
      if (this.scrollY > 20) {
        const navbar = document.querySelector('.navbar');
        navbar.classList.add('sticky');
      } else {
        const navbar = document.querySelector('.navbar');
        navbar.classList.remove('sticky');
      }
    }*/
  }
}
</script>