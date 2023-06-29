<template>
  <header>
    <div id=webdraw @click="$router.push('/')"><a>Web<span>Draw</span></a></div>
  </header>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");

header {
  font-family: 'Ubuntu', sans-serif;
  font-size: 30px;

  text-align: center;
  padding: 25px;
  /*
  border-bottom: 1px solid #eee;
  */
  /*
  background: #f7f7f7;
  */
  height: 70px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 30;
  background: #443c6d;

}

#webdraw .a{
    font-size: 30px;
    font-weight: 600;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
}

#webdraw .a{
    color: white;
    text-decoration: none;
}

#webdraw a span{
    color: rgb(255,164,45);
    transition: all 0.3s ease;
}



</style>