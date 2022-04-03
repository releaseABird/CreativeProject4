<template>
<div class="home">
  <div class="menu-container">
    <img class="banner" src="../assets/banner.png">
    <hr>
    <h1>Your challenge is...</h1>

    <div class="generate-box">

      <button class="button" type="reset" v-on:click="generateChallenge()" title="Click get your challenge!" id="colorSubmit">
        <span>Cancel</span></button>
      <br>

      <div id="challenge-box">
      <p>Click the button above to get your challenge!</p>
      </div>
      <br>
      <div class=prize-message>
      <img class="bingo-message-img" src="../assets/message.png">
      <button class="button button2" type="reset" v-on:click="generateBingoNum()" title="Click when you have completed the challenge!" id="colorSubmit">
        <span>Cancel</span></button>

      </div>
      <br>

      <div id="prize-box">
      <p>I guess you COULD click the pink button without completing a task, but guess what? That's called CHEATING.</p>
      </div>

    </div>


  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    //HelloWorld
  },
  data() {
    return {
      challenge: ''

    }
  },
  methods: {
  generateBingoNum() {
    console.log("bingoooooo");
    const bingo = "BINGO";
    const letter = bingo.charAt(Math.floor(Math.random() * 5));
    const num = Math.floor(Math.random() * 20) + 1;
    let results = '<h2>Good job! Your Bingo Number is: ' + letter + num + '</h2>';
    results += '<p>Generate another challenge and try to get Bingo!</p>';

    document.getElementById("prize-box").innerHTML = results;


  },
    generateChallenge() {
      console.log("heyo");
      //const value = document.getElementById("challenge-box").value;
      let numPrompts = this.$root.$data.challenges.length;
      console.log(numPrompts);
      const indexNum = Math.floor(Math.random() * numPrompts);
      console.log(indexNum);
      let o = {
        id: this.$root.$data.challenges[indexNum].id,
        prompt: this.$root.$data.challenges[indexNum].prompt,
        description: this.$root.$data.challenges[indexNum].description,
        medium: this.$root.$data.challenges[indexNum].medium
      };
      let results = '<h2>' + o.prompt + '</h2>';
      results += '<p>' + o.description + '<br>' + "medium:" + o.medium + '</p>';
      results += '<hr> <p>Click the pink button below when you finish to get your bingo number prize.</p>'

      document.getElementById("challenge-box").innerHTML = results;
    },


  }
}
</script>

<style>
.banner {
  width: 100%;
  object-fit: contain;
}


button {
  background-image: url(../assets/button.png);
  background-color: #fafafa;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 242px;
  width: 609px;
  border: none;
  -webkit-appearance: none;

}

button:hover {
  background-image: url(../assets/button-click.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 242px;
  width: 609px;
  border: none;
  -webkit-appearance: none;

}

button:active {
  background-image: url(../assets/button-active.png);
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}


button span {
  display: none;
  border: none;
}

.button2{
  background-image: url(../assets/button2-norm.png);

  padding: 15px 32 px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  height: 267px;
  width: 238px;
}

.button2:hover {
  background-image: url(../assets/button2-wave.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border: none;
  -webkit-appearance: none;
  height: 267px;
  width: 238px;

}

.button2:active {
  background-image: url(../assets/button2-wave.png);
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  height: 267px;
  width: 238px;
}

#challenge-box, #prize-box {
  border-radius: 25px;
  background: #ddcbb8;
  padding: 1.5em;
  margin: 2em;
}

#challenge-box p,h2{
  color:#281310;
}

#prize-box p,h2{
  color:#281310;
}
.prize-message{
display: flex;
}
</style>
