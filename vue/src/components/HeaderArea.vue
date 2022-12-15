<template>
      <header>
            <v-app-bar
      app
      class="app-header"
      color
      width="100%"
      height="83px"
    >
      <router-link to="/vue/main"><h1 class="logo">백년가게 로고</h1></router-link>
      <v-btn class="d-md-none" text @click="toggleClass()">
      <v-app-bar-nav-icon />
      </v-btn>
      <nav class="navigation" v-bind:class="[isActive ? 'd-block' : '']">
				<h2 class="hidden">글로벌네비게이션영역</h2>
				<ul class="navbar-nav">
					<li class="nav-item"><h3 class="nav-link"><router-link to="/vue/main">사업소개</router-link></h3></li>
					<li class="nav-item"><h3 class="nav-link"><router-link to="/vue/sub">점포안내</router-link></h3></li>
				</ul>
      </nav>
          </v-app-bar>
    </header>
</template>

<style>
		header{
    padding: 0; border: 0; font-size: 100%;}

    .logo{color: #f0f0f0;
    text-decoration: none;
    background: url(../assets/logo2.png) no-repeat;
    text-indent: -1000px;
    display: block;
    width: 300px;
    height: 107px;
    float: left;
    }

		nav{float: right;}
		nav ul{overflow: hidden;}
		nav ul li{float: left; margin-right: 15px; margin-top: 20px; font-size: 1.2rem;}

    .v-toolbar__content, .v-toolbar__extension {justify-content: space-around;}

    .d-md-none{display: none;}

@media (max-width: 767px) {
  .v-toolbar__content, .v-toolbar__extension {justify-content: center;}

  .app-header .navbar-nav {
    display: flex;
    position: absolute;
    left: 0;
    top: 80px;
    width: 100%;
    flex-direction: column;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.12);
    background: #f0f0f0;
  }
  .app-header .navbar-nav .nav-item {
    text-align: center;
  }
  .app-header .navbar-nav .nav-item .nav-link {
    line-height: 55px;
  }

  .navigation{display: none;}
  .d-block{display: block;}

  .d-md-none {display: block;}
}
</style>

<script>
export default {
    props:(`plogo`),
    data() {
    return {
      isActive: false,
    };
  },methods: {
    toggleClass: function () {
      this.isActive = !this.isActive;
    },
  }, 
};
</script>