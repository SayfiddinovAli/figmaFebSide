<template>
    <div class="myLanguage">
      <ul aria-label="Programming Languages">
        <li v-for="(lang, index) in languages" :key="index">
          {{ lang.name }}
          <component :is="lang.icon" class="logo-icon" />
        </li>
      </ul>
    </div>

    
  </template>
  
  <script>
  import { ChevronLeftIcon, ChevronRightIcon, SlashIcon } from "@heroicons/vue/24/outline";
  
  export default {
    components: {
      ChevronLeftIcon,
      ChevronRightIcon,
      SlashIcon,
    },
    data() {
      return {
        languages: [
          {name:'',icon:'ChevronLeftIcon'},
          { name: "PHP", icon: "SlashIcon" },
          { name: "MySQL", icon: "SlashIcon" },
          { name: "Laravel", icon: "SlashIcon" },
          { name: "JavaScript", icon: "SlashIcon" },
          { name: "Vue.js", icon: "SlashIcon" },
          { name: "React", icon: "ChevronRightIcon" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .myLanguage {
    bottom: 0; /* Ekranning pastki qismida joylashadi */
    left: 0;
    background: #000;
    width: 100%;
    z-index: 1000; /* Yuqori qatlamda */
    height: 5vh; /* Balandligi ekran hajmiga mos */
    transform: rotate(4.93deg); /* Qiya effekt */
    animation: myLanguage 3s ease-out forwards;
    margin-bottom: 0px;
  }
  @keyframes myLanguage {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
    transform: rotate(-4.93deg); /* Qiya effekt */
    margin-bottom: 105px;
  }
}
  .myLanguage ul {
    display: flex; /* Inline elementlarni bir qatorga joylash */
    justify-content: center; /* Markazga tekislash */
    align-items: center; /* Vertikal markazlash */
    margin: 0;
    padding: 0;
    list-style: none; /* Belgilarni olib tashlash */
    height: 100%; /* Bo'limni to'ldirish */
  }
  
  .myLanguage ul li {
    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 1.5vw; /* Responsiv matn o'lchami */
    margin: 0 15px; /* Elementlar orasidagi bo'shliq */
    transition: transform 0.3s ease-in-out, color 0.3s; /* Hover effekti uchun */
  }
  
  .myLanguage ul li:hover {
    transform: scale(1.1); /* Matn va ikon kattalashadi */
    color: #e94d35;
  }
  
  .logo-icon {
    color: #e94d35;
    width: 2vw; /* Responsiv o'lcham */
    height: 2vw;
    margin-left: 8px;
    vertical-align: middle; /* Matn bilan bir tekislikda */
  }
  
  @media (max-width: 768px) {
    .myLanguage ul li {
      font-size: 3vw; /* Matn hajmini kichik ekranlar uchun oshirish */
    }
    .logo-icon {
      width: 3vw; /* Ikon o'lchamini kichik ekranlar uchun oshirish */
      height: 3vw;
    }
  }
  </style>
  