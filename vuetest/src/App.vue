<template>
  <div id="app">
          <i-menu mode="horizontal" theme="dark" active-name="1" style="opacity: 0.7">
            <div class="layout-logo"></div>
            <div class="layout-nav">
              <router-link to="/">
              <menu-item name="1">
                  <h1>
                    <font color=#f0f8ff>
                      PICFAN.WALL
                    </font>
                  </h1>
              </menu-item>
              </router-link>
                <menu-item name="2">
                  <h2>
                  <font color=#f0f8ff>
                  DESINED BY GINAJAMESTEFAN
                  </font>
                  </h2>
                </menu-item>
              <router-link to="/photo">

              <menu-item name="3">
                <Icon type="md-photos" />
                照片墙
              </menu-item>
              </router-link>

              <router-link to="/game">
              <menu-item name="4">
                <Icon type="ios-game-controller-a" />
                走马灯
              </menu-item>
              </router-link>
              <router-link to="/play">
              <menu-item name="5">
                <Icon type="ios-game-controller-a" />
                拼图游戏
              </menu-item>
              </router-link>
            </div>
          </i-menu>
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;

}

</style>
