<template>
    <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <link rel="stylesheet" href="style" />
      <!--<script src="jquery-3.4.1.js"></script>-->
    </head>
    <body>
    <section class="formContainer">
        <h1>SIGN-UP</h1>
        <form class = "login-form">
            <div class="int-area">
              <!--
            <input 
                type="text"
                name="username"
                v-model="username"
                autocomplete="off"
                required
               />
               <label for="id">ID</label>-->
            </div>
            

            <div class="int-area">
            <input 
                type="text"
                name="email"
                v-model="email"
                autocomplete="off"
                required
               />
               <label for="id">E-MAIL</label>

            </div>

            <div class="int-area">
                <input 
                    type="password"
                    name="userpassword1"
                    v-model="password1"
                    autocomplete="off"
                    required
               />
               <label for="id">PASSWORD</label>

            </div>

               <div class="int-area">
                 <input 
                    type="password"
                    name="userpassword2"
                    v-model="password2"
                    autocomplete="off"
                    required
                    />
                     <label for="id">CHECK PASSWORD</label>
            </div>

            <br>
        </form>
        <br>
        <div class="login-btn">
            <!--<input 
                type="submit"
                class="button"
                name="submit"
                @click="signup({username, email, password1, password2})"
                value="SIGN-UP!"/>-->

                <input 
                type="submit"
                class="button"
                name="submit"
                @click="signup({ email, password1, password2})"
                value="SIGN-UP!"/>


        </div>
    </section>
    </body>
    </html>
</template>
<script>
import {mapState, mapActions} from "vuex";
export default{
    data() {
        return {
            username: null,
            email: null,
            password1: null,
            password2: null

        };
    },

    methods: {
        ...mapActions(["signup"])
    }
};
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

.formContainer{
    position: relative;
  z-index: 2;
}


.formContainer h1{
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

.login-btn{
    margin-top: 30px;
}

.button{
    width: 100%;
  height: 50px;
  background: #166cea;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
}

.button:hover {
  background: rgb(255, 164, 45);
    transition: all 1s ease;
    transform: scale(1.05);
}
</style>