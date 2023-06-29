<template>
  <div class="wrap">
        <div class="login">
            <h2>Log-in</h2>
            <div class="login_sns">
            <li><a href=""><i class="fromgoogle"></i></a></li>
            <li><a href=""><i class="fromnaver"></i></a></li>
            <li><a href=""><i class="fromkakao"></i></a></li>
            </div>
            <div class="login_id">
                <h4>E-mail</h4>
                <input type="email" class="w3-input" name="uid"  v-model="user_id" placeholder="Email">
            </div>
            <div class="login_pw">
                <h4>Password</h4>
                <input name="password" class="w3-input" placeholder="Enter your password" v-model="user_pw" type="password">
            </div>
            <div class="login_etc">
                <div class="checkbox">
                <input type="checkbox" name="" id=""> Remember Me?
                </div>
                <div class="forgot_pw">
                <a href="">Forgot Password?</a>
            </div>
            </div>
            <div class="submit">
                <input @click="fnLogin" type="submit" class= "w3-button w3-green w3-round" value="Login">
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      user_id: '',
      user_pw: ''
    }
  },
  methods: {
    fnLogin() {
      if (this.user_id === '') {
        alert('Email을 입력하세요.')
        return
      }

        if (this.user_pw === '') {
        alert('비밀번호를 입력하세요.')
        return
      }


      if (this.user_id !== 'root') {
        alert('ID Incorrrect.')
        return
      }

        if (this.user_pw !== '    ') {
        alert('P/W Incorrrect.')
        return
      }

      if (this.user_id === 'root' && this.user_pw === '    ') {
        alert('로그인 되었습니다.')
      this.$router.push('/plate')
        return
      }
    
    

    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
}

a {
  text-decoration: none;
  color: black;
}

li {
  list-style: none;
}

.wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
}

.login {
  width: 30%;
  height: 600px;
  background: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h2 {
  color: tomato;
  font-size: 2em;
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

.login_id {
  margin-top: 20px;
  width: 80%;
}

.login_id input {
  width: 100%;
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0px 20px;
  border: 1px solid lightgray;
  outline: none;
}

.login_pw {
  margin-top: 20px;
  width: 80%;
}

.login_pw input {
  width: 100%;
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0px 20px;
  border: 1px solid lightgray;
  outline: none;
}

.login_etc {
  padding: 10px;
  width: 80%;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.submit {
  margin-top: 50px;
  width: 80%;
}
.submit input {
  width: 100%;
  height: 50px;
  border: 0;
  outline: none;
  border-radius: 40px;
  background: linear-gradient(to left, rgb(255, 77, 46), rgb(255, 155, 47));
  color: white;
  font-size: 1.2em;
  letter-spacing: 2px;
}

</style>