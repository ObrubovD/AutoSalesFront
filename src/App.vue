<template>
  <div id="app">
    <div>
      <b-navbar type="white" variant="white">
        <b-container>
          <b-navbar-nav>
            <b-navbar-brand>AutoSales</b-navbar-brand>
            <b>
              <b-nav-item href="#/">Главная</b-nav-item>
            </b>
            
            <b>
              <b-nav-item href="#/Catalog">Каталог</b-nav-item>
            </b>
            <b>
              <b-nav-item href="#/Cart" >Корзина</b-nav-item>
            </b>
            <b>
              <b-nav-item href="#/About">О нас</b-nav-item>
            </b>
          </b-navbar-nav>
        </b-container>
      </b-navbar>
    </div><router-view></router-view>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
</style>
