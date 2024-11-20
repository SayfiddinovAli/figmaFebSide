<template>
    <div class="selfContainer">
      <div class="selfName">
        <p>I'm <CodeBracketIcon class="logo-icon" /> Ali!</p>
        <h1>Full-stack Web Developer</h1>
      </div>
  
      <div class="selfMain">
        <div class="selfAbout">
          <p>I'm a full-stack web developer based in Gwangju, South Korea.</p>
        </div>
        <div class="selfAbout2">
          <p>Passionate about coding, learning new technologies, and solving real-world problems.</p>
        </div>
        <div class="selfFooter">
          <div class="footerSection">
            <h3>Location</h3>
            <p>Gwangju, South Korea</p>
          </div>
          <div class="footerSection">
            <h3>Experience</h3>
            <p>Freshman</p>
          </div>
          <div class="footerSection">
            <h3>Education</h3>
            <p>Chonnam National University</p>
          </div>
        </div>
      </div>
  
      <!-- Portfolios Section -->
      <div class="portifolios">
        <div class="Backend">
          <h3>Backend</h3>
          <p>Project 50 +</p>
        </div>
        <div class="fontend">
          <h3>Frontend</h3>
          <p>Project 50 +</p>

        </div>
        <div class="basic">
          <h3>Basic</h3>
          <p>Project 50 +</p>

        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { CodeBracketIcon } from "@heroicons/vue/24/outline";
  export default {
    components: {
      CodeBracketIcon,
    },
  };
  </script>
  
  <style scoped>
  /* Main container */
  .selfContainer {
    display: inline;
    align-items: center;
    
  }
  
  /* Name section */
  .selfName {
    float: left;
    width: 30%;
    text-align: center;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  .logo-icon {
    color: #e94d35;
    width: 3vw;
    height: 3vw;
    margin-right: 10px;
  }
  
  /* Main content area */
  .selfMain {
    float: right;
    width: 60%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 7vw;
  }
  
  /* About sections */
  .selfAbout,
  .selfAbout2 {
    padding: 20px;
    margin: 10px 0;
    border-radius: 8px;
    width: 80%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  /* Footer section */
  .selfFooter {
    display: flex;
    justify-content: space-around;
    padding: 20px;
    margin-top: 20px;
    width: 80%;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .footerSection {
    text-align: center;
  }
  
  .footerSection h3 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #e94d35;
  }
  
  .footerSection p {
    font-size: 16px;
    margin: 0;
  }
  
  /* Portfolios Section */
  .portifolios {
    width: 100%;
    display: flex;
   padding: 0px;
   border: #161616 solid 1px;
   border-radius: 8px;
   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    
  }
  
  .Backend,
  .fontend,
  .basic {
    text-align: center;
    
    width: 30%;
    border-radius: 8px;
    
  }
  
  /* Specific styling for frontend section */
  .fontend {
    background-color: #161616;
    color: #ffffff;
    border-radius: none;
  }
  p{
    font-weight: bold;
    size: 3vw;
    
  }
  /* Responsive Design */
  @media (max-width: 768px) {
    .selfAbout,
    .selfAbout2,
    .selfFooter {
      width: 90%;
    }
  
    .footerSection h3 {
      font-size: 18px;
    }
  
    .footerSection p {
      font-size: 14px;
    }
  
    .portifolios {
      flex-direction: column;
      align-items: center;
    }
  
    .Backend,
    .fontend,
    .basic {
      width: 90%;
      margin-bottom: 20px;
    }
  }
  </style>
  