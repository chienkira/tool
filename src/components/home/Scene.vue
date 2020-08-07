<template>
  <div class="scene">
    <div class="layer layer-1">
      <div class="desk"></div>
      <div class="clock">
        {{hour}}<span> : </span>{{minute}}
      </div>
      <div class="lamp">
        <div class="lamp-base"></div>
        <div class="lamp-mid">
          <div class="lamp-mid-knob"></div>
        </div>
        <div class="lamp-top"></div>
      </div>
      <div class="lamp-light"></div>
      <div class="laptop">
        <div class="laptop-screen">
          <div class="editor">
            <div class="window-bar">Terminal</div>
            <div class="line-short"></div>
            <div class="line-med"></div>
            <div class="line-long"></div>
          </div>
        </div>
        <div class="laptop-base"></div>
      </div>
      <div class="book"></div>
      <div class="book-1"></div>
      <div class="book-2"></div>
      <div class="coffee">
        <div class="coffee-handle"></div>
        <div class="coffee-brew"></div>
      </div>
    </div>
    <div class="layer layer-2">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scene',
  data: () => {
    return {
      hour: new Date().getHours(),
      minute: (new Date().getMinutes() + '').padStart(2, '0')
    }
  }
}
</script>

<style lang="scss">
$brown-light: #957c43;
$green-light: #21bf21;
$blue-light: #7fcbdd;
$blue-med: #00a3f6;
$yellow-light: #f8f8a9;

$z-top: 10;
$z-mid: 5;
$z-bot: 1;

* {
  box-sizing: border-box;
}

.scene {
  background-color: #333;
  position: absolute;
  width: 800px;
  height: 360px;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
}

.layer {
  position: absolute;
  width: 100%;
  height: 100%;

  
  &-1 {
    z-index: $z-top;
  }
  
  &-2 {
    z-index: $z-mid;
  }
  
  &-3 {
    z-index: $z-bot;
  }
  
  div {
    position: absolute;
  }
}

/*
*   .layer-1 styles START
*/

.desk {
  width: 100%;
  height: 2%;
  background-color: $brown-light;
  bottom: 0;
  z-index: $z-top;
}

.clock {
  z-index: $z-top;
  bottom: 2%;
  left: 2%;
  padding: 4px 12px;
  border: 6px solid #525151;
  background: radial-gradient(#333,#000);
  color: #FFF;
  font-weight: bold;
  font-size: 24px;
  border-radius: 6px;
  span {
    animation: steam 1.5s infinite;
  }
}

.lamp {
  width: 25%;
  height: 90%;
  bottom: 2%;
  right: 5px;
  z-index: $z-mid;

  &-base {
    width: 60%;
    height: 4%;
    bottom: 0;
    right: 0;
    background-color: $blue-med;
    border-radius: 3px;
    z-index: $z-top;

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      bottom: 100%;
      background-color: #fff;
    }

    &:before {
      height: 80%;
      width: 75%;
      border-radius: 3px;
    }

    &:after {
      height: 180%;
      width: 20%;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
    }
  }

  &-mid {
    width: 100%;
    height: 100%;
    z-index: $z-bot;

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      background-color: #fff;
    }

    &:before {
      width: 5%;
      height: 50%;
      bottom: 47%;
      right: 3%;
      transform-origin: 50% 100%;
      transform: rotate(-48deg);
    }

    &:after {
      height: 50%;
      width: 5%;
      bottom: 1%;
      right: 32%;
      transform-origin: 50% 100%;
      transform: rotate(23deg);
    }

    &-knob {
      width: 12%;
      height: 8%;
      background-color: #fff;
      top: 50%;
      right: 0;
      border-radius: 50%;
    }
  }

  &-top {
    width: 16%;
    height: 10%;
    top: 16%;
    right: 44%;
    background-color: $blue-med;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    transform-origin: 50% 0;
    transform: rotate(42deg);
    z-index: $z-top;

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      //margin: auto;
      left: 0;
      right: 0;
      //bottom: 100%;
    }

    &:before {
      width: 300%;
      height: 150%;
      background-color: $blue-med;
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;
      top: 50%;
      left: -100%;
      right: -100%;
      z-index: $z-bot;
    }

    &:after {
      width: 340%;
      height: 30%;
      background-color: #fff;
      border-radius: 3px;
      top: 190%;
      left: -120%;
      //right: -200%;
      z-index: $z-mid;
    }
  }

  &-light {
    width: 120%;
    height: 80%;
    bottom: 0;
    background-color: $yellow-light;
    opacity: 0;
    transform: rotate(-15deg);
    transform-origin: 100% 0;
    right: 18%;
    top: 28%;
    z-index: $z-bot;
    animation: flicker-on 1s forwards;
    animation-delay: 0.1s;
  }
}

.laptop {
  z-index: $z-top;
  bottom: 2%;
  left: 25%;
  height: 50%;
  width: 35%;
  .laptop-screen {
    border-radius: 5px;
    border: 2px solid #CBC8C3;
    background: #32383C;
    width: 96%;
    height: 94%;
    left: 2%;
    top: 0;
    padding: 5px;
    .editor {
      width: 80%;
      height: 80%;
      top: 10%;
      left: 10%;
      padding: 1px;
      border: 1px solid #CBC8C3;
      border-radius: 4px;
      .window-bar {
        background: #212F3D;
        height: 10px;
        width: calc(100% - 2px);
        line-height: 8px;
        font-size: 9px;
        color: #FFF;
        text-align: center;
        &:before {
          position: absolute;
          content: '';
          top: 20%;
          left: 5%;
          height: 70%;
          width: 3%;
          background: #C74F44;
          border-radius: 50%;
          box-shadow: 10px 0 0 #F2CC8F, 20px 0 0 #81B29A;
        }
      }
      .line-short {
        height: 5px;
        left: 10px;
        top: 15%;
        width: 0;
        background: #FFFBF7;
        animation-name: grow-short;
        animation-duration: 5s;
        animation-timing-function: ease-in;
        animation-iteration-count: infinite;
      }
      .line-med {
        height: 5px;
        left: 10px;
        top: 25%;
        width: 0;
        background: #C74F44;
        animation-name: grow-med;
        animation-duration: 5s;
        animation-timing-function: ease-in;
        animation-iteration-count: infinite;
      }
      .line-long {
        height: 5px;
        left: 10px;
        top: 35%;
        width: 0;
        background: #48A9A6;
        animation-name: grow-long;
        animation-duration: 5s;
        animation-duration: 5s;
        animation-timing-function: ease-in;
        animation-iteration-count: infinite;
      }
    }
  }
  .laptop-base {
    bottom: 0;
    height: 8%;
    width: 100%;
    background: #CBC8C3;
    border-radius: 1px 1px 8px 8px;
    border: 2px solid #32383C;
  }
}

.book {
  height: 4%;
  width: 12%;
  background-color: #fff;
  border: 3px solid #f00;
  border-left: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  bottom: 2%;
  left: 71%;
  z-index: $z-mid;

  &-1 {
    height: 1%;
    width: 12%;
    bottom: 6%;
    left: 69%;
    background-color: $blue-med;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    z-index: $z-mid;
  }

  &-2 {
    height: 4%;
    width: 12%;
    background-color: #fff;
    border: 3px solid $green-light;
    border-left: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    bottom: 7%;
    left: 73%;
    z-index: $z-mid;
  }
}

.coffee {
  width: 7%;
  height: 15%;
  bottom: 11%;
  left: 74%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: inset 5px 0px 0px #fff;
  z-index: $z-top;
  animation: flicker-on-shadow 1s forwards;
  animation-delay: 0.1s;
  
  &:before,
  &:after {
    content: '';
    display: block;
    width: 10%;
    height: 25%;
    position: absolute;
    background-color: #fff;
    bottom: 110%;
    border-radius: 3px;
  }
  
  &:before {
    left: 33%;
    animation: steam 2.5s ease infinite;
  }
  
  &:after {
    left: 66%;
    animation: steam 3s ease infinite;
    bottom: 130%;
  }
  
  &-handle {
    width: 40%;
    height: 50%;
    left: 85%;
    top: 25%;
    border: 3px solid #fff;
    border-radius: 15%;
    z-index: $z-bot;
  }
  
  &-brew {
    width: 75%;
    height: 8%;
    margin: auto;
    background-color: #471803;
    border-radius: 5px;
    top: 5%;
    left: 0;
    right: 0;
  }
}


/*
*   .layer-1 styles END
*/

/*
*   .layer-2 styles START
*/

.self {
  width: 25%;
  height: 40%;
  left: 30%;
  bottom: 47%;
  background-color: #fff;
  
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 30%;
    background-color: #f00;
    position: absolute;
    bottom: -15%;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
  }
  
  &-head {
    width: 50%;
    height: 70%;
    margin: auto;
    bottom: 13%;
    left: 0;
    right: 0;
    border-top-left-radius: 25%;
    border-top-right-radius: 25%;
    border-bottom-right-radius: 40% 60%;
    border-bottom-left-radius: 40% 60%;
    background-color: $brown-light;
    z-index: $z-top;
    
    &:after {
      content: '';
      display: block;
      width: 110%;
      height: 70%;
      margin: auto;
      position: absolute;
      left: -100%;
      right: -100%;
      background-color: darken($brown-light, 20%);
      border-top-left-radius: 35%;
      border-top-right-radius: 35%;
      border-bottom-right-radius: 40% 60%;
      border-bottom-left-radius: 40% 60%;
      z-index: $z-bot;
    }
  }
}

/*
*   .layer-2 styles END
*/

/*
*  animations
*/

@keyframes flicker-on {
  0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: .8;
  }
  51% {
    opacity: 0;
  }
  75% {
    opacity: .7
  }
  77% {
    opacity: 0;
  }
  78% {
    opacity: .8;
  }
  79% {
    opacity: 0;
  }
  80% {
    opacity: .7;
  }
  100% {
    opacity: .7;
  }
}

@keyframes flicker-on-shadow {
  0% {
    box-shadow: inset 5px 0px 0px #fff;
  }
  49% {
    box-shadow: inset 5px 0px 0px #fff;
  }
  50% {
    box-shadow: inset 5px 0px 0px #545454;
  }
  51% {
    box-shadow: inset 5px 0px 0px #fff;
  }
  75% {
    box-shadow: inset 5px 0px 0px #545454;
  }
  77% {
    box-shadow: inset 5px 0px 0px #fff;
  }
  78% {
    box-shadow: inset 5px 0px 0px #545454;
  }
  79% {
    box-shadow: inset 5px 0px 0px #fff;
  }
  80% {
    box-shadow: inset 5px 0px 0px #545454;
  }
  100% {
    box-shadow: inset 5px 0px 0px #545454;
  }
}

@keyframes leaf-dance {
  0% {
    
  }
  25% {
    transform: rotate(-6deg);
  }
  75% {
    transform: rotate(6deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes leaf-dance-reverse {
  0% {
    
  }
  25% {
    transform: rotate(6deg);
  }
  75% {
    transform: rotate(-6deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes steam {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  30% {
    transform: translateY(-30%);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@mixin grow {
  animation-duration: 5s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
}

@mixin grow-short {
  animation-name: grow-short;
  animation-duration: 5s;
  @include grow;
}

@keyframes grow-short {
  0% {
    width: 0%;
  }
  100% {
    width: 20%;
  }
}

@mixin grow-med {
  animation-name: grow-med;
  animation-duration: 5s;
  @include grow;
}

@keyframes grow-med {
  0% {
    width: 0%;
  }
  100% {
    width: 30%;
  }
}

@mixin grow-long {
  animation-name: grow-long;
  animation-duration: 5s;
  @include grow;
}

@keyframes grow-long {
  0% {
    width: 0%;
  }
  100% {
    width: 40%;
  }
}

</style>