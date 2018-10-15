<template>
  <div :style="{backgroundImage: 'url(' + img + ')' } " style="width: 1450px;height:2000px;background-repeat: no-repeat; background-size: cover; position: absolute; top: 0px">
<div id = container style="opacity: 0.8">
    <!--最外面的DIV，用来包含里面的结构-->
    <div id="game">
      <!--游戏区,大DIV方块-->
      <div id="d1" @click="move(1)">1</div>
      <!--小DIV，也就是8个小方块。当点击的时候执行move()函数，参数是显示的编号，这样我们就知道点击了哪个方块-->
      <div id="d2" @click="move(2)">2</div>
      <div id="d3" @click="move(3)">3</div>
      <div id="d4" @click="move(4)">4</div>
      <div id="d5" @click="move(5)">5</div>
      <div id="d6" @click="move(6)">6</div>
      <div id="d7" @click="move(7)">7</div>
      <div id="d8" @click="move(8)">8</div>
    </div>
    <div style="position: absolute; left:800px; top: 500px">
      <i-button type = "default" @click="playgame" style="opacity: 0.8">
        开始游戏
      </i-button>
    </div>

    <!--<div id="control">-->
      <!--&lt;!&ndash;游戏控制区&ndash;&gt;-->
      <!--<p>-->
        <!--<rowspan id="timeText">总用时</rowspan>-->
        <!--<rowspan id="timer"></rowspan>-->
      <!--</p>-->
      <!--&lt;!&ndash;显示游戏时间区域&ndash;&gt;-->
      <!--<p>-->
        <!--<rowspan id="start" onclick="start()">开始</rowspan>-->
        <!--<rowspan id="reset" onclick="reset()">重来</rowspan>-->
      <!--</p>-->
      <!--&lt;!&ndash;显示控制按钮区域&ndash;&gt;-->
    <!--</div>-->
  <!--</div>-->
  </div>
    <div style="opacity: 0.7">
      <div class="first-words">
        <p style="font-size: 100px; color: white; position: absolute; top: 100px;left: 50px;">
          爱拼才会赢
        </p>
      </div>
      <div class="second-words">
        <p style="font-size: 30px;color: white; position: absolute; top: 250px;left: 50px;" >请开始你的表演</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Img from '@/assets/Amo081zdJsI.jpg'
  export default {
    data(){
       return{
          d:[],
          judge: false,
         img: Img,

      }
    },
    methods:{

      playgame(){
        var time=0; //保存定时时间
        var pause=true; //设置是否暂停标志，true表示暂停
        var set_timer; //设置定时函数
        var d1=new Array(10); //保存大DIV当前装的小DIV的编号
        var d_direct=new Array(
          [0],//为了逻辑更简单，第一个元素我们不用，我们从下标1开始使用
          [2,4],//大DIV编号为1的DIV可以去的位置，比如第一块可以去2,4号位置
          [1,3,5],
          [2,6],
          [1,5,7],
          [2,4,6,8],
          [3,5,9],
          [4,8],
          [5,7,9],
          [6,8]
        ); //保存大DIV编号的可移动位置编号
        var d_posXY=new Array(
          [0],//同样，我们不使用第一个元素
          [0,0],//第一个表示left,第二个表示top，比如第一块的位置为let:0px,top:0px
          [150,0],
          [300,0],
          [0,150],
          [150,150],
          [300,150],
          [0,300],
          [150,300],
          [300,300]
        ); //大DIV编号的位置
        d1[1]=1;d1[2]=2;d1[3]=3;d1[4]=4;d1[5]=5;d1[6]=6;d1[7]=7;d1[8]=8;d1[9]=0; //默认按照顺序排好，大DIV第九块没有，所以为0，我们用0表示空白块
        for(var i=9; i>1; --i){
          var to=parseInt(Math.random()*(i-1)+1);//产生随机数，范围为1到i，不能超出范围，因为没这个id的DIV
          if(d1[i]!=0){
            document.getElementById("d"+d1[i]).style.left=d_posXY[to][0]+"px";
            document.getElementById("d"+d1[i]).style.top=d_posXY[to][1]+"px";
          }
          //把当前的DIV位置设置为随机产生的DIV的位置
          if(d1[to]!=0){
            document.getElementById("d"+d1[to]).style.left=d_posXY[i][0]+"px";
            document.getElementById("d"+d1[to]).style.top=d_posXY[i][1]+"px";
          }
          //把随机产生的DIV的位置设置为当前的DIV的位置
          var tem=d1[to];
          d1[to]=d1[i];
          d1[i]=tem;
          //然后把它们两个的DIV保存的编号对调一下

        }
        this.d = d1;
        console.log(this.d);
      },


      move(id){
        //移动函数，前面我们已将讲了
        var d=new Array(10);
        d = this.d;
        console.log(d);
        var d_direct=new Array(
          [0],//为了逻辑更简单，第一个元素我们不用，我们从下标1开始使用
          [2,4],//大DIV编号为1的DIV可以去的位置，比如第一块可以去2,4号位置
          [1,3,5],
          [2,6],
          [1,5,7],
          [2,4,6,8],
          [3,5,9],
          [4,8],
          [5,7,9],
          [6,8]
        ); //保存大DIV编号的可移动位置编号
        var d_posXY=new Array(
          [0],//同样，我们不使用第一个元素
          [0,0],//第一个表示left,第二个表示top，比如第一块的位置为let:0px,top:0px
          [150,0],
          [300,0],
          [0,150],
          [150,150],
          [300,150],
          [0,300],
          [150,300],
          [300,300]
        ); //大DIV编号的位置
        var i=1;
        for(i=1; i<10; ++i){
          if( d[i] == id )
            break;
        }
        //这个for循环是找出小DIV在大DIV中的位置
        var target_d=0;
        //保存小DIV可以去的编号，0表示不能移动
        var j=0;
        var move_flag=false;
        for(j=0; j<d_direct[i].length; ++j){
          //把所有可能去的位置循环遍历一下
          if( d[ d_direct[i][j] ] == 0 ){
            move_flag=true;
            break;
          }
          //如果目标的值为0，说明目标位置没有装小DIV，则可以移动，跳出循环
        }
        if(move_flag == true){
          target_d = d_direct[i][j];
        }else{
          target_d = 0;
        }

        //用来找出小DIV可以去的位置，如果返回0，表示不能移动，如果可以移动，则返回可以去的位置编号
        if( target_d != 0){
          d[i]=0;
          //把当前的大DIV编号设置为0，因为当前小DIV已经移走了，所以当前大DIV就没有装小DIV了
          d[target_d]=id;
          //把目标大DIV设置为被点击的小DIV的编号
          document.getElementById("d"+id).style.left=d_posXY[target_d][0]+"px";
          document.getElementById("d"+id).style.top=d_posXY[target_d][1]+"px";
          //最后设置被点击的小DIV的位置，把它移到目标大DIV的位置
        }
        //如果target_d不为0，则表示可以移动，且target_d就是小DIV要去的大DIV的位置编号
        var finish_flag=true;
        //设置游戏是否完成标志，true表示完成
        for(var k=1; k<9; ++k){
          if( d[k] != k){
            finish_flag=false;
            break;
            //如果大DIV保存的编号和它本身的编号不同，则表示还不是全部按照顺序排的，那么设置为false，跳出循环，后面不用再判断了，因为只要一个不符，就没完成游戏
          }
        }
        if(finish_flag){
          this.$Message.info("chenggong");
        }
        // var suc = 0;
        // for(var v = 1; v < 9; v++){
        //   if(d[v] = v){
        //     suc++;
        //   }
        // }
        // if(suc == 8){
        //   this.$Message.info("恭喜你成功");
        // }
        //从1开始，把每个大DIV保存的编号遍历一下，判断是否完成

        //如果为true，则表示游戏完成，如果当前没有暂停，则调用暂停韩式，并且弹出提示框，完成游戏。
        //start()这个函数是开始，暂停一起的函数，如果暂停，调用后会开始，如果开始，则调用后会暂停
      }
    }

  }
</script>

<style>

  *{
    padding: 0;
    margin: 0;
    border: 0;
  }
  /* *是通配符，给所有的元素去掉默认样式，因为有的浏览器会默认加上一些样式，这可能会给布局带来问题 */
  body{
    width: 100%;
    height: 100%;
  }
  /* 给body设置100%的高度和宽度，这样就会根据浏览器屏幕大小自动适配 */
  #container{
    position: relative;
    width: 620px;
    height: 450px;
    margin: 0 auto;
    margin-top: 100px;
    border-radius: 1px;
  }
  /* 这是包裹所有元素的DIV，给他设置620px的宽和450px的高，这个大小可以设置为更大，但是不能小，至少要能包含里面所有的元素 */
  #game{
    position: absolute;
    width: 450px;
    height: 450px;
    border-radius: 5px;
    display: inline-block;
    background-color: #ffe171;
    box-shadow: 0 0 10px #ffe171;
  }
  /* 这是游戏区的DIV，这个大小是计算出来的，取决于你的小方块的大小。这里我们设置小方块的大小为150px 150px，所以这个大小是150px*3，为450px */
  #game div{
    position: absolute;
    width: 149px;
    height: 149px;
    box-shadow: 1px 1px 2px #777;
    background-color: #20a6fa;
    color: white;
    text-align: center;
    font-size: 150px;
    line-height: 150px;
    cursor: pointer;
    -webkit-transition: 0.3s;/*浏览器前缀，兼容其他浏览器 chrome*/
    -moz-transition: 0.3s;/*firefox*/
    -ms-transition: 0.3s;/*ie*/
    -o-transition: 0.3s;/*opera*/
    transition: 0.3s;
  }
  /* 这就是小方块的大小了，定位为绝对定位，这样改变位置不会影响其他元素的位置。宽高都是149px。注意了，我们还设置了box-shadow:1px 1px 2px #777 ；
  它还有边框阴影，所以149px 加上边框1px，它的总宽度是150px 下面的transition：0.3s是设置过渡时间，这是css3的属性，它会让属性改变呈现过渡动画，所以
  当我们改变方块的位置时，它会有一个动画，我们不必自己编写动画函数，这回让你疯狂*/
  #game div:hover{
    color: #ffe171;
  }
  /*给方块设置鼠标悬停动画，当鼠标悬停在元素上面时，会用这里的属性替换上面的属性，移开后又会变为原来的，这里我们是把字体颜色改变*/
  #control{
    width: 150px;
    height: 450px;
    display: inline-block;
    float: right;
  }
  /*控制区，display:inline-block会让元素呈现块状元素的特性，使得可以改变大小，同时也会具有行内元素的特性，使得不会占据一行空间，float:right让元素浮动到右边*/
  #control rowspan{
    height: 25px;
    font-size: 20px;
    color: #222;
    margin-top: 10px;
  }
  /*设置控制区按钮的共同样式*/
  #start{
    display: inline-block;
    font-size: 28px;
    width: 100px;
    height: 28px;
    background-color: #20a6fa;
    color: #ffe171;
    text-shadow: 1px 1px 2px #ffe171;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #4c98f5;
    text-align: center;
    cursor: pointer;
  }
  /*给start按钮设置属性。cursor:pointer属性让鼠标移到元素上面时会显示不同的鼠标形状，pointer是手型*/
  #reset{
    display: inline-block;
    font-size: 28px;
    width: 100px;
    height: 28px;
    background-color: #20a6fa;
    color: #ffe171;
    text-shadow: 1px 1px 2px #ffe171;/*字体阴影*/
    border-radius: 5px;/*圆角属性*/
    box-shadow: 2px 2px 5px #4c98f5;/*盒子阴影*/
    text-align: center;/*文字居中*/
    cursor: pointer;
  }
  /*给Reset按钮设置属性*/
  #d1{
    left: 0px;
  }
  #d2{
    left: 150px;
  }
  #d3{
    left: 300px;
  }
  #d4{
    top: 150px;
  }
  #d5{
    top: 150px;
    left: 150px;
  }
  #d6{
    top: 150px;
    left: 300px;
  }
  #d7{
    top: 300px;
  }
  #d8{
    left: 150px;
    top: 300px;
  }
  /*这是预先给每个小方块按照顺序排好位置*/
 /*自定义一个透明度从0到1的动画,它的名称是fade-in*/
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
