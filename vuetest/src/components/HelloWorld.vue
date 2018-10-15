<template>
  <div>
    <layout>

    <i-content  :style="{backgroundImage: 'url(' + img + ')'}" style="height: 1000px;background-repeat: no-repeat; background-size: cover">

      <Tabs value="name1" >
        <TabPane label="老婆" name="name1">
          <!--<div style="background: #57c5f7;padding: 20px">-->
            <div class="container">
              <img class="pic pic1" src="../assets/726f10e7a5715dab31c487100806c1f9.jpg" @click="show()"/>
              <img class="pic pic2" src="../assets/a4b31fa25656db28f532eca8523b5878.jpg" @click="show()"/>
              <img class="pic pic3" src="../assets/c7e9cbf6bb1009c9fbddf3a66db6c2ec.jpeg" @click="show()"/>
              <!--<img class="pic pic4" src="../assets/fa5d17fe9d099ddedfe0f20c873cb25d.jpg"/>-->
              <img class="pic pic5" src="../assets/timg.jpeg" @click="show()"/>
              <img class="pic pic6" src="../assets/timg-2.jpeg" @click="show()"/>
            </div>
          <!--</div>-->
          <!--<div style="background: #57c5f7;padding: 20px">-->
            <div class="container">
              <img class="pic pic1" src="../assets/726f10e7a5715dab31c487100806c1f9.jpg" @click="show()"/>
              <img class="pic pic2" src="../assets/a4b31fa25656db28f532eca8523b5878.jpg" @click="show()"/>
              <img class="pic pic3" src="../assets/c7e9cbf6bb1009c9fbddf3a66db6c2ec.jpeg" @click="show()"/>
              <!--<img class="pic pic4" src="../assets/fa5d17fe9d099ddedfe0f20c873cb25d.jpg"/>-->
              <img class="pic pic5" src="../assets/timg.jpeg" @click="show()"/>
              <img class="pic pic6" src="../assets/timg-2.jpeg" @click="show()"/>
            </div>
          <!--</div>-->

        </TabPane>
        <TabPane label="王者荣耀" name="name2">
          <!--<div style="background: #57c5f7;padding: 20px">-->

              <div class="container">
                <img class="pic pic1" src="../assets/04e496904f0aef2c7e888fb733a9028c.jpg" @click="show()"/>
                <img class="pic pic2" src="../assets/8b465432f9edb4409a04138b64379125.jpg" @click="show()"/>
                <img class="pic pic3" src="../assets/9fe0dcf5e17f61f6efae05fb1b1e2632.jpg" @click="show()"/>
                <!--<img class="pic pic4" src="../assets/67ae449a3c0441a6213cafc2d0ee5889.jpg" @click="show()"/>-->
                <img class="pic pic5" src="../assets/a6310a6d22c2418ea8a0d56a5f16df20.jpg" @click="show()"/>
                <img class="pic pic6" src="../assets/de26528850508a31fc6a2f97cdd92789.png" @click="show()"/>
              </div>

          <!--</div>-->
          <!--<div style="background: #57c5f7;padding: 20px">-->

            <div class="container">
              <img class="pic pic1" src="../assets/04e496904f0aef2c7e888fb733a9028c.jpg" @click="show()"/>
              <img class="pic pic2" src="../assets/8b465432f9edb4409a04138b64379125.jpg" @click="show()"/>
              <img class="pic pic3" src="../assets/9fe0dcf5e17f61f6efae05fb1b1e2632.jpg" @click="show()"/>
              <!--<img class="pic pic4" src="../assets/67ae449a3c0441a6213cafc2d0ee5889.jpg" @click="show()"/>-->
              <img class="pic pic5" src="../assets/a6310a6d22c2418ea8a0d56a5f16df20.jpg" @click="show()"/>
              <img class="pic pic6" src="../assets/de26528850508a31fc6a2f97cdd92789.png" @click="show()"/>
            </div>

          <!--</div>-->
        </TabPane>
        <TabPane label="风景" name="name3">
          <!--<div style="background: #57c5f7;padding: 20px">-->

            <div class="container">
              <img class="pic pic1" src="../assets/4e408f075f52ba475e4e3db17257f290.jpg" @click="show()"/>
              <img class="pic pic2" src="../assets/2314450707ae210e6f717beb47d3064f.jpg" @click="show()"/>
              <img class="pic pic3" src="../assets/5b305cb8261c7e623d0f4a02b00ca4d8.jpeg" @click="show()"/>
              <!--<img class="pic pic4" src="../assets/Amo081zdJsI.jpg"/>-->
              <img class="pic pic5" src="../assets/6f08e0e9cecf4d623f72e48be6d50ad7.jpg" @click="show()"/>
              <img class="pic pic6" src="../assets/12a377656caeb3ff676752af971716ac.jpg" @click="show()"/>
            </div>


          <!--</div>-->
          <!--<div style="background: #57c5f7;padding: 20px">-->

            <div class="container">
              <img class="pic pic1" src="../assets/4e408f075f52ba475e4e3db17257f290.jpg" @click="show()"/>
              <img class="pic pic2" src="../assets/2314450707ae210e6f717beb47d3064f.jpg" @click="show()"/>
              <img class="pic pic3" src="../assets/5b305cb8261c7e623d0f4a02b00ca4d8.jpeg" @click="show()"/>
              <!--<img class="pic pic4" src="../assets/Amo081zdJsI.jpg"/>-->
              <img class="pic pic5" src="../assets/6f08e0e9cecf4d623f72e48be6d50ad7.jpg" @click="show()"/>
              <img class="pic pic6" src="../assets/12a377656caeb3ff676752af971716ac.jpg" @click="show()"/>
            </div>


          <!--</div>-->
        </TabPane>


        <!--<TabPane label="偶像" name="name4">标签三的内容</TabPane>-->
        <!--<TabPane label="绝密图片" name="name5">-->

        <!--</TabPane>-->
      </Tabs>
    </i-content>

    </layout>
    <!-- <img src="../assets/HSJmJCRXBV8.jpg"  width="100%"/> -->
  </div>

</template>

<script>
 import Img from '@/assets/AwnggmGaFms.jpg'
  export default {
  name: 'HelloWorld',
  data () {
    return {
      value1: 0,
      img: Img,
      judge:false
    }

  },
  methods:{
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #eeeeee;
}

.container {
  width: 960px;
  height: 200px;
  margin: 70px auto;
  position: relative;

}

.pic {
  width: 250px;
  opacity:0.8;
}



.container img:hover {
  box-shadow: 15px 15px 20px rgba(50, 50, 50, 0.4);
  transform: rotate(0deg) scale(1.20);
  -webkit-transform: rotate(0deg) scale(1.20);
  z-index: 2;
  opacity:1.0;
  animation: Updown 0.8s infinite alternate;
}

.container img {
  padding: 10px 10px 15px;
  background: white;
  border: 1px solid #dddddd;
  box-shadow: 2px 2px 3px rgba(50, 50, 50, 0.4);
  -webkit-transition: all 0.5s ease-in;
  -moz-transition: all 0.5s ease-in;
  -ms-transition: all 0.5s ease-in;
  -o-transition: all 0.5s ease-in;
  transition: all 0.5s ease-in;
  position: absolute;
  z-index: 1;

}


.pic1 {
  left: 400px;
  top: 0;
  transform: rotate(-5deg);
  -webkit-transform: rotate(-5deg);
  -moz-transform: rotate(-5deg);
  -o-transform: rotate(-5deg);
}

.pic2 {
  left: 200px;
  top: 0;
  transform: rotate(-20deg);
  -webkit-transform: rotate(-20deg);
}

.pic3 {
  left: 0;
  right: 0;
  transform: rotate(5deg);
  -webkit-transform: rotate(5deg);
}

.pic4 {
  bottom: 100px;
  left: 550px;
  transform: rotate(-5deg);
  -webkit-transform: rotate(-5deg);
}

.pic5 {
  right: 100px;
  top: 0;
  transform: rotate(5deg);
  -webkit-transform: rotate(5deg);
}

.pic6 {
  left: 800px;
  top: 0;
  transform: rotate(10deg);
  -webkit-transform: rotate(10deg);
}
@keyframes Updown {
  from {
    margin-top: 30px;
  }
  to {
    margin-top: 10px;
  }
}



</style>
