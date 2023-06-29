<template >
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="style" />
        <!--<script src="jquery-3.4.1.js"></script>-->
        <meta name ="google-signin-client_id" content="801894587121-d56u7ru0iqn3v5udgch6qki1mmpqf46e.apps.googleusercontent.com">
      </head>
      <body>
        <section class="login-form">
          <h1>LOG-IN</h1>
          <form accesskey="">
            <div class="int-area">
              <input
                type="text"
                name="id"
                id="id"
                v-model="username"
                autocomplete="off"
                required
              />
              <label for="id">USER NAME</label>
            </div>
            <div class="int-area">
              <input
                type="password"
                name="pw"
                id="pw"
                v-model="password"
                autocomplete="off"
                required
              />
              <label for="id">PASSWORD</label>
            </div>
            <div class="btn-area">
              <button @click="fnLogin" type="submit">LOGIN</button>
            </div>
          </form>
          <div class="login_sns">
              <li id="Login-google" @click="init"><a href="javascript:void(0)"></a></li>
              <li><a href=""><i class="fromnaver"></i></a></li>
              <li><a href=""><i class="fromkakao"></i></a></li>
              <li><a href=""><i class="fromkakao"></i></a></li>
              </div>
          <div class="caption" @click="$router.push('/signup')">
            <a href="">Sign Up</a>
          </div>
        </section>
      </body>
    </html>
  </template>
  
  <script>
  import {mapState, mapActions} from "vuex";
  export default {
    data() {
      return {
        username: null,
        password: null,
      };
    },
    computed: {
      ...mapState({
        isLogin: state => state.isLogin,
        isLoginError: state => state.isLoginError
      })
  
    },
    methods: {
      ...mapActions(["login"]),
      fnLogin() {
        if (this.username === "") {
          alert("Please enter ID.");
          return;
        }
  
        if (this.password === "") {
          alert("Please enter PW.");
          return;
        }
  
        if (this.username !== "root") {
          alert("ID Incorrrect.");
          return;
        }
  
        if (this.password !== "    ") {
          alert("PW Incorrrect.");
          return;
        }
  
        if (this.username === "root" && this.password === "    ") {
          alert("LogIn succed.");
          this.$router.push("/finalplate");
          return;
        }
      },
    },
  };
  ///// 구글 로그인
  function init() {
      gapi.load('auth2', function() {
          gapi.auth2.init();
          options = new gapi.auth2.SigninOptionsBuilder();
          options.setPrompt('select_account');
          // 추가는 Oauth 승인 권한 추가 후 띄어쓰기 기준으로 추가
          options.setScope('email profile openid https://www.googleapis.com/auth/user.birthday.read');
          // 인스턴스의 함수 호출 - element에 로그인 기능 추가
          // GgCustomLogin은 li태그안에 있는 ID, 위에 설정한 options와 아래 성공,실패시 실행하는 함수들
          gapi.auth2.getAuthInstance().attachClickHandler('GgCustomLogin', options, onSignIn, onSignInFailure);
      })
  }
  
  function onSignIn(googleUser) {
      var access_token = googleUser.getAuthResponse().access_token
      $.ajax({
          // people api를 이용하여 프로필 및 생년월일에 대한 선택동의후 가져온다.
          url: 'https://people.googleapis.com/v1/people/me'
          // key에 자신의 API 키를 넣습니다.
          , data: {personFields:'birthdays', key:'AIzaSyBOdmeC4SOSzXmPGLEM2vZueqiBSWKg3wk', 'access_token': access_token}
          , method:'GET'
      })
      .done(function(e){
          //프로필을 가져온다.
        var profile = googleUser.getBasicProfile();
          console.log(profile)
      })
      .fail(function(e){
          console.log(e);
      })
  }
  function onSignInFailure(t){		
      console.log(t);
  }
  //구현중
  
  </script>
  
  <script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js?onload=init';
    script.async = true;
    script.defer = true;
  
    document.head.appendChild(script);
  });
  </script>
  
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Noto Sans KR", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url("bg.jpg") no-repeat center;
    background-size: cover;
    animation: fadein 5s ease 3s;
    -webkit-animation: fadein 3s;
  /*
    padding-top: 70px;
  
    padding-bottom: 40px;
    */
  }
  
  body::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
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
  
  .login-form {
    position: relative;
    z-index: 2;
  }
  .login-form h1 {
    font-size: 32px;
    color: #fff;
    text-align: center;
    margin-bottom: 60px;
  }
  
  .int-area {
    width: 400px;
    position: relative;
    margin-top: 20px;
  }
  
  .int-area:first-child {
    margin-top: 0;
  }
  
  .int-area input {
    width: 100%;
    padding: 20px 10px 10px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #999;
    font-size: 18px;
    color: #fff;
    outline: none;
  }
  
  .int-area label {
    position: absolute;
    left: 10px;
    top: 15px;
  
    font-size: 18px;
    color: #999;
    transition: all 0.5s ease;
  }
  /*
  .int-area label.warning {
      color: red !important;
      animation: warning .3s ease;
      animation-iteration-count: 3;
  }
  @keyframes warning {
      0% {transform: translateX(-8px);}
      25% {transform: translateX(8px);}
      50% {transform: translateX(-8px);}
      75% {transform: translateX(8px);}
  }
  */
  .int-area input:focus + label,
  .int-area input:valid + label {
    top: -2px;
    font-size: 13px;
    color: #166cea;
  }
  
  .btn-area {
    margin-top: 30px;
  }
  .btn-area button {
    width: 100%;
    height: 50px;
    background: #166cea;
    color: #fff;
    font-size: 20px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
  }
  .caption {
    margin-top: 20px;
    text-align: center;
  }
  
  .caption a {
    font-size: 15px;
    color: #999;
    text-decoration: none;
  }
  
  .login_sns {
    padding: 20px;
    display: flex;
  }
  
  .login_sns li {
    padding: 0px 15px;
  }
  
  .login_sns a {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 50px;
    background: white;
    font-size: 20px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4), -3px -3px 5px rgba(0, 0, 0, 0.1);
  }
  </style>
  
  
  