<template>
  <div>
   <div :style="{backgroundImage: 'url(' + img + ')'}" style=" position: absolute; top: 0px;width: 1450px; height: 900px; background-repeat: no-repeat; background-size: cover">
     <div class="fade-in-words">
       <div class="first-words">
       <p style="font-size: 100px; position:absolute; color: white; top: 200px; left: 50%; margin-left:-350px">
         PICFAN.WALL
       </p>
       </div>
       <div class="second-words">
     <p style="font-size: 30px; position: absolute; color: white; top: 350px; left: 50%; font-family: 'Al Nile'; font-style: italic" >Designed By GingaJameStefan</p>
       </div>
   </div>
   </div>
    <div style="background-color: black; width: 1450px; height: 300px; position: absolute; top:900px">
      <img class="pic pic2" src="../assets/stars/5qMw3UqI-8M.jpg" @click="show()"/>
      <img class="pic pic3" src="../assets/stars/8zU6U07Ad1U.jpg" @click="show()"/>
      <img class="pic pic1" src="../assets/stars/dXy2PDCBDcE.jpg" @click="show()"/>
      <p style="font-size: 25px; color: white" class="pic pic4">
        手牵手<br/>一步两步三步四步望着天<br/>看星星<br/>一颗两颗三颗四颗连成线
      </p>
    </div>
    <div style="background-color: rgba(10,34,48,0.86); width: 1450px; height: 500px; position: absolute;top:1200px">
      <p style="font-size: 25px; color: white" class="pic6 pic5">
        自然之美<br/>心旷神怡<br/>山水之乐<br/>得之心而寓之酒
      </p>
      <img class="pic5 pic2" src="../assets/nature/56TWPYobJeU.jpg" @click="show()"/>
      <img class="pic5 pic3" src="../assets/nature/Amo081zdJsI.jpg" @click="show()"/>
      <img class="pic5 pic4" src="../assets/nature/pnX5rCRVGzw.jpg" @click="show()"/>
    </div>
    <div style="background-color: rgba(141,12,100,0.7); width: 1450px; height: 300px; position: absolute;top:1700px">
      <img class="pic8 pic1" src="../assets/girls/726f10e7a5715dab31c487100806c1f9.jpg" @click="show1()" id = img1/>
      <img class="pic8 pic2" src="../assets/girls/timg-2.jpeg" @click="show1()" id = img2/>
      <img class="pic8 pic3" src="../assets/girls/timg.jpeg" @click="show1()" id = img3/>
      <p style="font-size: 25px; color: white" class="pic8 pic4">
        你的美<br/>无声无息<br/>不知不觉让我追随～<br/>拔刀吧诸君！
      </p>
    </div>
    <div style="background-color: rgba(141,102,39,0.7); width: 1450px; height: 100px; position: absolute;top:2000px">
      <p style="font-size: 25px; color: white; position: absolute; top:25px; left:50%; margin-left: -300px">
        过了很久终于我才回头看，你就在对岸等我勇敢。<br/>听着《走马》，看着走马灯，历历在目，回忆尽收眼底～
      </p>
    </div>
    <div style="background-color: rgba(141,102,39,0.7); width: 1450px; height:150px; position: absolute;top:2100px">
      <Carousel autoplay v-model="value2" loop >
        <CarouselItem>
          <div class="demo-carousel">

            <img class="pic7" src="../assets/04e496904f0aef2c7e888fb733a9028c.jpg" @click="show()"/>


            <img class="pic7" src="../assets/8b465432f9edb4409a04138b64379125.jpg" @click="show()"/>
            <img class="pic7" src="../assets/9fe0dcf5e17f61f6efae05fb1b1e2632.jpg" @click="show()"/>
            <img class="pic7" src="../assets/67ae449a3c0441a6213cafc2d0ee5889.jpg" @click="show()"/>
            <img class="pic7" src="../assets/a6310a6d22c2418ea8a0d56a5f16df20.jpg" @click="show()"/>
            <img class="pic7" src="../assets/de26528850508a31fc6a2f97cdd92789.png" @click="show()"/>


          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img class="pic7 " src="../assets/4e408f075f52ba475e4e3db17257f290.jpg" @click="show()"/>
            <img class="pic7" src="../assets/2314450707ae210e6f717beb47d3064f.jpg" @click="show()"/>
            <img class="pic7" src="../assets/5b305cb8261c7e623d0f4a02b00ca4d8.jpeg" @click="show()"/>
            <img class="pic7" src="../assets/Amo081zdJsI.jpg" @click = "show()"/>
            <img class="pic7" src="../assets/6f08e0e9cecf4d623f72e48be6d50ad7.jpg" @click="show()"/>
            <img class="pic7" src="../assets/12a377656caeb3ff676752af971716ac.jpg" @click="show()"/>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img class="pic7" src="../assets/726f10e7a5715dab31c487100806c1f9.jpg" @click="show()"/>
            <img class="pic7" src="../assets/a4b31fa25656db28f532eca8523b5878.jpg" @click="show()"/>
            <img class="pic7" src="../assets/c7e9cbf6bb1009c9fbddf3a66db6c2ec.jpeg" @click="show()"/>
            <img class="pic7" src="../assets/fa5d17fe9d099ddedfe0f20c873cb25d.jpg"/>
            <img class="pic7" src="../assets/timg.jpeg" @click="show()"/>
            <img class="pic7" src="../assets/timg-2.jpeg" @click="show()"/>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
    <div :style="{backgroundImage: 'url(' + img + ')'}" style=" width: 1450px;  position: absolute;top:2250px; height: 900px; background-repeat: no-repeat; background-size: cover">
      <router-link to="/photo">
      <p style="font-size: 50px; color: white; position: absolute;top:200px;left: 50%;margin-left: -180px" >
        开始新的照片墙之旅
      </p>
      </router-link>
    </div>
  </div>

</template>

<script>
  import Img from '@/assets/TJikaVje188.jpg'
    export default {
        name: "index",
      data () {
        return {

          img: Img,
          value1: 0,
          value2:0,
          judge:false
        }
      },
      methods:{
          show() {
          }
      }
    }
</script>

<style scoped>
  .pic5{
    width: 350px;
    height: 400px;
    position: absolute;

    opacity: 0.8;
  }
.pic{
  width: 350px;
  height: 200px;
  position: absolute;

  opacity: 0.3;
}
.pic:hover{

  opacity: 0.3; /*实先规定文字的状态是不显示的*/
  animation: fade-in2 4s ease 0s 1;
  /*调用名称为fade-in的动画,全程动画显示时间4S,进入方式为ease,延时0S进入,播放次数1次*/
  -webkit-animation: fade-in2 4s ease 0s 1;
  -moz-animation: fade-in2 4s ease 0s 1;
  -o-animation: fade-in2 4s ease 0s 1;
  -ms-animation: fade-in2 4s ease 0s 1; /*规定动画的最后状态为结束状态*/
  animation-fill-mode:forwards;
  -webkit-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  -ms-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
}
.pic1{
  left: 20px;
  top: 50px;
}
.pic2{
  left: 380px;
  top: 50px;
}
.pic3{
  left:740px;
  top: 50px;
}
.pic4{
  left:1100px;
  top: 50px;
}
.pic6{
  left:20px;
  top: 150px;
}
  .pic7 {
    width: 200px;
    height: 120px;
    opacity: 0.8;
  }
  .pic8{
    width: 350px;
    height: 200px;
    position: absolute;


  }
.fade-in-words{ width: 200px; margin: 0 auto; text-align: center;}/*自定义一个透明度从0到1的动画,它的名称是fade-in*/
@keyframes fade-in{ 0%{ opacity: 0;} 100%{opacity:1;}}
@-webkit-keyframes fade-in{ 0%{ opacity: 0;} 100%{opacity:1;}}
@-ms-keyframes fade-in{ 0%{ opacity: 0;} 100%{opacity:1;}}
@-o-keyframes fade-in{ 0%{ opacity: 0;} 100%{opacity:1;}}
@-moz-keyframes fade-in{ 0%{ opacity: 0;} 100%{opacity:1;}}
.first-words{
  opacity: 0; /*实先规定文字的状态是不显示的*/
  animation: fade-in 4s ease 0s 1;
  /*调用名称为fade-in的动画,全程动画显示时间4S,进入方式为ease,延时0S进入,播放次数1次*/
  -webkit-animation: fade-in 4s ease 0s 1;
  -moz-animation: fade-in 4s ease 0s 1;
  -o-animation: fade-in 4s ease 0s 1;
  -ms-animation: fade-in 4s ease 0s 1; /*规定动画的最后状态为结束状态*/
  animation-fill-mode:forwards;
  -webkit-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  -ms-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
}
.second-words{
  opacity: 0;
  animation: fade-in 2s ease 2s 1;
  -webkit-animation: fade-in 2s ease 2s 1;
  -moz-animation: fade-in 2s ease 2s 1;
  -o-animation: fade-in 2s ease 2s 1;
  -ms-animation: fade-in 2s ease 2s 1;
  /*规定动画的最后状态为结束状态*/
  animation-fill-mode:forwards;
  -webkit-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  -ms-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
}
  @keyframes fade-in2{ 0%{ opacity: 0.3;} 100%{opacity:1;}}
  @-webkit-keyframes fade-in2{ 0%{ opacity: 0.3;} 100%{opacity:1;}}
  @-ms-keyframes fade-in2{ 0%{ opacity: 0.3;} 100%{opacity:1;}}
  @-o-keyframes fade-in2{ 0%{ opacity: 0.3;} 100%{opacity:1;}}
  @-moz-keyframes fade-in2{ 0%{ opacity: 0.3;} 100%{opacity:1;}}

</style>
