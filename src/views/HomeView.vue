
<template>
  <div class="container">
    <nav class="navbar">
      <!-- Logo section with icon and text -->
      <div class="logo">
        <CodeBracketIcon class="logo-icon" />
        <h2>Ali</h2>
      </div>

      <!-- Navigation links -->
      <div class="link">
        <router-link to="#about" class="custom-link">About</router-link>
        <router-link to="#education" class="custom-link">Education</router-link>
        <router-link to="#portfolio" class="custom-link">Portfolio</router-link>
        <router-link to="#contact" class="custom-link">Contact</router-link>
        
        
      
      </div>

      <!-- Button -->
       <div><button><span class="span_btn">Let's talk</span></button></div>
     
    </nav>

    <section id="about">
      <AboutView/>
    </section>
    <aboutFooter/>
    <section>
      <selfAbout/>
    </section>
    <section id="education">
     <education/>
    </section>

    <section id="portfolio">
      <Portfolio/>
    </section>
    <section id="contact">
      <contact/>
    </section>
  </div>
</template>
 <script>
 import AboutView from './AboutView.vue';
 import contact from './contact.vue';
 import Portfolio from './Portfolio.vue';
 import education from './education.vue';
 import aboutFooter from './aboutFooter.vue';
 import selfAbout from './selfAbout.vue';
 import {CodeBracketIcon } from '@heroicons/vue/24/outline'
 export default{
  components:{
   AboutView,
   Portfolio,
   contact,
   education,
   aboutFooter,
   selfAbout,
   CodeBracketIcon,
  }
 }
</script>

<style scoped>
/* Navigation bar styles */
.container {
  width: 100%;  /* Barcha kenglikni egallash */
  margin: 0 auto;  /* Yaxshi markazlashtirish uchun marginni avtomatik qilish */
  box-sizing: border-box;
}

/* Navigation bar styles */
.navbar {
  display: flex;
  justify-content: space-between; /* Bu usulni ishlatishda barcha elementlar orasidagi masofa teng bo'ladi */
  align-items: center;            /* Barcha elementlarni vertikal ravishda markazga joylashtirish */
  width: 100%;
  padding: 10px 7vh;
  box-sizing: border-box;
  background: rgba(242, 241, 239, 0.7);  /* Yengil oppoq fon, orqa fon ko'rinib turadi */
  backdrop-filter: blur(10px); /* 10px blurlash, orqa fonni biroz noaniq qiladi */
  margin-top: 15px;
 
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between; /* Changed from space-around to space-between */
  align-items: center;           /* To center align items vertically */
  z-index: 1000;   
  height: 80px;        
}
.custom-link{
color: #161513;
font-size: 16px;
font-family: 'Bai Jamjuree', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
  margin: 15px;
  transition: transform 0.3s ease-in-out, color 0.3s; /* Hover effekti uchun */
}
button {
  width: 126px;
  height: 42px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;

}

.span_btn {
  font-weight: 400;
  font-size: 16px;
}

/* Logo styling */
.logo {
  display: flex;
  align-items: center;  /* Ensures the icon and text are vertically aligned */
}

.logo-icon {
  color: #E94D35;
  width: 30px;    /* Set width for the icon */
  height: 30px;   /* Set height for the icon */
  margin-right: 10px; /* Adds space between the icon and the text */
}


section {
  padding: 50px;
  min-height: 100vh;
  padding-top: 100px;
  margin-bottom: -150px;

}

#about{
  padding: 50px;
  min-height: 46vh;
  padding-top: 100px;
  
  border-bottom: none;
}

div {
  scroll-behavior: smooth; /* This should be applied on the 'html' or 'body' tag, not 'div' */
}

body {
  scroll-behavior: smooth;
}
button:hover{
  color: #E94D35;
}
.custom-link:hover{
  color: #E94D35;
  transform: scale(1.1); /* Matn va ikon kattalashadi */
}
h2{
  font-family: 'Bai Jamjuree', sans-serif;
 
}

</style>