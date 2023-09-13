<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Zaid Al-ruwaishan</strong>, a computer science graduate from OSU, and a hobbyist graphics programmer and game developer.<br /><br />
        My passion for playing games like Age of Empires 2, Fallout: New Vegas, and The Witcher 3 led me to game development. My goal is to work on
        memorable games like these that other players can enjoy. <br /><br />
        I started out using the Unity engine to develop games, which made me curious how Unity works. This curiosity led me towards engine 
        programming, and the most exciting aspect of engine programming for me was graphics. How can a screen, a 2D grid of pixels, come to life 
        and give us a window into a 3D world? I've been exploring this question for years through textbooks, university courses, and projects. <br /><br />
        A mix of theoretical and practical work was necessary to gain a better understanding of computer graphics, but the most satisfying part was
        creating projects. I could finally take the theoretical knowledge I had learned, and write a program that gave me instant feedback. 
      </div>

      <div style="margin-top: 20px;">Check out my <router-link to="/game-projects">projects</router-link>, or reach out to me <router-link to="/contact">here</router-link>.</div>
    </div>

    <div class="photo">
      <img width=200px height=200px src="img/portrait.png" alt="Avatar of Zaid" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>