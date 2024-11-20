<template>
  <div class="aboutContainer">
    <div class="about">
      <div class="name">
        <p class="some-text">Hi, MY NAME IS ALI<HandRaisedIcon class="logo-hand"/></p>
        <p class="some-text">
          I AM A <CodeBracketIcon class="logo-icon" /> FULL-STACK WEB DEVELOPER
        </p>
        <p class="some-text">BASED IN GWANJU</p>
      </div>
      <div class="field">
        <p><span>Frontend</span></p>
        <p><span><CodeBracketIcon class="logo-field" /></span></p>
        <p><span>Backend</span></p>
      </div>
      <div class="buttonABout">
        <button class="black_btn"><span class="span_btn">Got a project ?</span></button>
        <button><span class="span_btn">Let's talk</span></button>
      </div>
    </div>
    <div class="img">
      <img src="../aboutPage.svg" alt="Image">
    </div>
  </div>
</template>

<script>
import { CodeBracketIcon ,HandRaisedIcon } from '@heroicons/vue/24/outline';

export default {
  components: {
    CodeBracketIcon,
    HandRaisedIcon
  },
};
</script>

<style scoped>
.aboutContainer {
  margin-top: 5vw;
  margin-bottom: 50vw;
}
.about {
  float: left;
  width: 70%;
}
.buttonABout {
  display: inline-block;
}
button {
  padding: 10px 20px;
  border: 1px solid black;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  transform: scale(0.8);
  animation: growButton 0.6s ease-out forwards;
}
button:nth-child(1) {
  animation-delay: 2s;
}
button:nth-child(2) {
  animation-delay: 2.5s;
}
@keyframes growButton {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.black_btn {
  background: #161513;
  color: #FFFFFF;
}
.some-text {
  font-family: 'Bai Jamjuree', sans-serif;
  white-space: nowrap;
  margin: 0;
  font-size: 2vw;
  opacity: 0;
  transform: translateX(-20px);
  animation: fadeInText 1s ease-out forwards;
}
.some-text:nth-child(1) {
  animation-delay: 0.5s;
}
.some-text:nth-child(2) {
  animation-delay: 1s;
}
.some-text:nth-child(3) {
  animation-delay: 1.5s;
}
@keyframes fadeInText {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.img {
  float: right;
  width: 30%;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  animation: moveImage 3s ease-out forwards;
}
@keyframes moveImage {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.logo-field {
  color: #e94d35;
  width: 3vw;
  height: 3vw;
}
.logo-hand {
  color: #e94d35;
  width: 3vw;
  height: 3vw;
  transform: rotate(30deg); /* Qiya effekt */
  margin-left: 15px;
  animation: wave-animation 4s infinite; /* Animatsiyani qo'llash */
  transform-origin: center center; /* Animatsiya markazini belgilash */

}
@keyframes wave-animation {
  0% {
    transform: rotate(-35deg); /* Boshlanish holati */
  }
  16.67% {
    transform: rotate(-35deg); /* 1 soniya davomida tez harakat */
  }
  33.33% {
    transform: rotate(-88deg); /* 5 soniya davomida sukut */
  }
  50% {
    transform: rotate(-5deg); /* 1 soniya davomida tez harakat */
  }
  66.67% {
    transform: rotate(-88deg); /* 5 soniya davomida sukut */
  }
  83.33% {
    transform: rotate(-35deg); /* 1 soniya davomida tez harakat */
  }
  100% {
    transform: rotate(-35deg); /* Nihoyat, asl holatiga qaytadi */
  }
  100% {
    transform: rotate(-35deg); /* Nihoyat, asl holatiga qaytadi */
  }
}
.field {
  display: flex;
  margin-top: 3vw;
}
.field p span {
  margin: 4px;
  font-size: 23px;
  font-family: 'Bai Jamjuree', sans-serif;
  font-weight: 400;
  text-decoration: underline;
  text-decoration-color: #e94d35;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}
button:hover{

  color: #e94d35;
}
.black_btn:hover{
 }
</style>
