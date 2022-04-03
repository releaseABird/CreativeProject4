<template>
<div class="rules">
  <div class="menu-container">
    <img class="banner" src="../assets/welcome-banner.png">
    <hr>
    <p>Sketchbooking is a great way to improve your art, but sometimes it is intimidating or difficult to think of things to draw.
      Sketchbook bingo combines sketchbook-ing and bingo, such that you make your bingo board and by accomplishing a drawing challenge, you can get a BINGO number and try to get BINGO!</p>
    <h2>Steps</h2>
    <div class="steps">
      <div class="step">
        <p>1. Make your BINGO card. Draw a 5x5 grid and label the columns with BINGO. For each column, use any number between 1 and 20 inclusive.<br> You can repeat the same number if it is in a different column (ie B15 and I15), but you cannot have
          multiples of the number in the same column(ie you cannot have a column of G3s).<br>BONUS: come up with a way to treat yourself for when you get bingo</p>
        <img class="step-pic" src="../assets/step1.png">
      </div>
      <br>
      <div class="step">
      <p>2. Click on the "BINGO" option in the menu, and get your first challenge by clicking on the orange face.<br> Your prompt should appear in the light brown box below it.
      If you don't like the prompt, you can click the face again until you get a challenge you like. However, sometimes it is nice to go outside your comfort zone!</p>
      <img class="step-pic" src="../assets/step2.png">
      </div>
      <br>
      <div class ="step">
      <p>3. Do your best to accomplish the challenge and have the most fun you can with it. <br> It does not have to be perfect. It's called a SKETCHbook, and not a perfectly-fully-rendered-book, for a reason.<br>Spend as much time as you would like. I wouldn't spend more than a day on the challenge. </p>
      <img class="step-pic" src="../assets/step3.png">
      </div>
      <br>
      <div class="step">
      <p>4. After you finish your challenge, click on the pink button below the light brown box to reveal the bingo letter you received. <br>You should receive a letter and number that follows the same parameters as your bingo card. <br>
      If you are playing on easy mode, you can keep pressing the pink button until you get something on your card. Otherwise, you can get back to drawing. <br>
      You can do one challenge a day or repeat steps 2-4 until you get a BINGO! If you get a BINGO, you should treat yourself.</p>
      <img class="step-pic" src="../assets/button2-norm.png">
      </div>
    </div>
  </div>
</div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.menu-container {
  width: 100%;

}

.rules {
  width: 100%;
  background-size: cover;

}

.banner {
  width: 100%;
  object-fit: contain;
}

.steps {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em;
  width: 100%;
}

.step {
  display: flex;
  flex-direction: row;
  padding: 1em;
  background: #fff2cc;
  border-radius: 25px;

}

.steps {
  text-align: left;
}

.step p,
h2 {
  color: #281310;

}

.step-pic {
  width: 50%;
  object-fit: contain;
}
</style>
