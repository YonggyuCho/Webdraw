<template>
    <div class="ground">
        <Header/>
        <Content/>
        <Footer/>
        </div>
        
        
</template>

<script>

import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Login from "./Login.vue";
import Content from "./Content.vue";


export default {
    components:{Header, Footer, Login,Content}


}
</script>


