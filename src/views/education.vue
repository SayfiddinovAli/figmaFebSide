<template>
    <div class="Education">
      <span><CodeBracketIcon class="logo-icon" /></span>
      <h1>Education</h1>
  
      <div class="mainEducation">
        <div class="chonnam">
          <h3>1</h3>
          <h2 class="centered-link" ><a href="https://global.jnu.ac.kr//">Chonnam</a></h2>
          <p>I am studying a bachelor's degree at Chonnam National University, Faculty of Software Engineering.</p>
        </div>
        <div class="kadirov">
          <h3>2</h3>
          <div class="about">
            <h2><a href="https://kadirov.dev/" class="centered-link">Kadirov Dev</a></h2>
            <p>In 2022, I studied online at the Kadirov Dev educational center. During the lessons, I studied HTML, CSS, Bootstrap 5, PHP, MySQL, Symfony, JavaScript, and Vue.js.</p>
          </div>
        </div>
        <div class="pdp">
          <h3>3</h3>
          <h2 class="centered-link"><a href="https://pdp.uz/">PDP center</a></h2>
          <p>In 2023, I studied online at the PDP educational center. During the lessons, I studied JavaScript and React.</p>
        </div>
        <div class="ElshodTeacher">
          <h3>4</h3>
          <h2 class="centered-link">Elshod Teacher</h2>
          <p>In 2024, I studied online at the ElshodTeacher educational center. During the lessons, I studied Vue.js.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { CodeBracketIcon } from '@heroicons/vue/24/outline'
  
  export default {
    components: {
      CodeBracketIcon,
    }
  }
  </script>
  
  <style scoped>
  .Education {
    text-align: center;
    padding: 20px;
  }
  
  .Education h1 {
    font-size: 4.5vw;
    margin: 0;
    color: #333;
  }
  
  .logo-icon {
    margin: 0;
  }
  
  .mainEducation {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
  }
  
  .kadirov,
  .pdp,
  .chonnam,
  .ElshodTeacher {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin: 5px;
    height: auto;
    
    border-radius: 8px;
    padding: 20px;
    background-color: #f4f4f4;
    box-sizing: border-box;
    opacity: 0; /* Initial opacity is 0 */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Shadow effect on hover */
    transform: translateY(20px); /* Initially move the card down */
    animation: fadeInUp 0.8s ease-out forwards; /* Apply animation */
  }
  
  /* Keyframe for fade-in and slide-up animation */
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px); /* Start position */
    }
    100% {
      opacity: 1;
      transform: translateY(0); /* End position */
    }
  }
  
  h3 {
    display: inline-block;
    margin: 0;
    width: auto;
    padding: 5px 10px;
    background: #E94D35;
    color: #fff;
    font-size: 18px;
    border-radius: 8px;
  }
  
  h2 {
    margin-top: 10px;
    font-size: 1.8em;
    font-weight: bold;
    color: #141414;
  }
  
  a {
    text-decoration: none;
    color: #141414;
    font-weight: bold;
    display: inline-block;
  }
  
  a:hover {
    color: #E94D35;
    text-decoration: underline; /* Optionally add underline on hover */
    text-decoration-skip-ink:5px ;
  }
  
  /* Custom style for Kadirov Dev link */
  .centered-link {
    text-align: center; /* Center the link text */
    width: 100%; /* Ensure it takes full width */
  }
  
  /* Hover effects */
  .kadirov:hover,
  .pdp:hover,
  .chonnam:hover,
  .ElshodTeacher:hover {
    transform: translateY(-10px); /* Lift the card slightly */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Shadow effect on hover */
  }
  
  /* Media Query for Larger Screens */
  @media (min-width: 768px) {
    .kadirov,
    .pdp,
    .chonnam,
    .ElshodTeacher {
      width: 45%;
    }
  }
  
  @media (min-width: 1024px) {
    .kadirov,
    .pdp,
    .chonnam,
    .ElshodTeacher {
      width: 22%;
    }
  }
  </style>
  