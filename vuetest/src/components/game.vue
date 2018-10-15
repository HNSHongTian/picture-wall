<template>
<div class = "background-forthis">
  <layout>

    <!--<i-header style="background-color: white">-->
       <!--<h1 align="left">-->
         <!--选择您心仪的图片-->
       <!--</h1>-->
    <!--</i-header>-->
    <i-content>
      <!--<div style="background: #57c5f7;padding: 20px">-->
        <div  :style="{backgroundImage: 'url(' + img + ')' } " style="height: 1000px;background-repeat: no-repeat; background-size: cover">
          <br/>
  <Carousel autoplay v-model="value2" loop >
    <CarouselItem>
      <div class="demo-carousel">

        <img class="pic" id = img1 src="../assets/04e496904f0aef2c7e888fb733a9028c.jpg" @click="show(1)"/>


        <img class="pic" id = img2 src="../assets/8b465432f9edb4409a04138b64379125.jpg" @click="show(2)"/>
        <img class="pic" id = img3 src="../assets/9fe0dcf5e17f61f6efae05fb1b1e2632.jpg" @click="show(3)"/>
        <img class="pic" id = img4 src="../assets/67ae449a3c0441a6213cafc2d0ee5889.jpg" @click="show(4)"/>
        <img class="pic" id = img5 src="../assets/a6310a6d22c2418ea8a0d56a5f16df20.jpg" @click="show(5)"/>
        <img class="pic" id = img6 src="../assets/de26528850508a31fc6a2f97cdd92789.png" @click="show(6)"/>


      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img class="pic" id = img7 src="../assets/4e408f075f52ba475e4e3db17257f290.jpg" @click="show(7)"/>
        <img class="pic" id = img8 src="../assets/2314450707ae210e6f717beb47d3064f.jpg" @click="show(8)"/>
        <img class="pic" id = img9 src="../assets/5b305cb8261c7e623d0f4a02b00ca4d8.jpeg" @click="show(9)"/>
        <img class="pic" id = img10 src="../assets/Amo081zdJsI.jpg" @click = "show(10)"/>
        <img class="pic" id = img11 src="../assets/6f08e0e9cecf4d623f72e48be6d50ad7.jpg" @click="show(11)"/>
        <img class="pic" id = img12 src="../assets/12a377656caeb3ff676752af971716ac.jpg" @click="show(12)"/>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img class="pic" id = img13 src="../assets/726f10e7a5715dab31c487100806c1f9.jpg" @click="show(13)"/>
        <img class="pic" id = img14 src="../assets/a4b31fa25656db28f532eca8523b5878.jpg" @click="show(14)"/>
        <img class="pic" id = img15 src="../assets/c7e9cbf6bb1009c9fbddf3a66db6c2ec.jpeg" @click="show(15)"/>
        <img class="pic" id = img16 src="../assets/fa5d17fe9d099ddedfe0f20c873cb25d.jpg" @click="show(16)"/>
        <img class="pic" id = img17 src="../assets/timg.jpeg" @click="show(17)"/>
        <img class="pic" id = img18 src="../assets/timg-2.jpeg" @click="show(18)"/>
      </div>
    </CarouselItem>
  </Carousel>




      </div>
    </i-content>

  </layout>
</div>
</template>

<script>
  import Img from '@/assets/Amo081zdJsI.jpg'
  export default {
    name: "game",

    data () {
      return {
        value2: 0,
        value1: 0,
        img: Img,
        judge:[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
      }
    },
    methods: {
      show(id) {
        if (this.judge[id] == false) {
          document.getElementById("img" + id).style.width = '400px';
          document.getElementById("img" + id).style.height = '240px';
          this.judge[id] = true;
        }
        else {
          document.getElementById("img" + id).style.width = '200px';
          document.getElementById("img" + id).style.height = '120px';
          this.judge[id] = false;
        }
      },
    }
  }
</script>

<style scoped>
  .container {
    width: 220px;
    height: 140px;
    /*margin: 60px auto;*/
    position: relative;
  }

  .pic {
    width: 200px;
    height: 120px;
    opacity: 0.8;
  }

  .pic:hover {
    box-shadow: 15px 15px 20px rgba(50, 50, 50, 0.4);
    transform: rotate(0deg) scale(1.20);
    -webkit-transform: rotate(0deg) scale(1.20);
    z-index: 2;
    opacity: 1.0;
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
    bottom: 200px;
    left: 500px;
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

  .background-forthis{


  }
</style>
