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
        <p>1. Make your BINGO card. Draw a 5x5 grid and label the columns with BINGO. For each column, use any number between 1 and 20 inclusive. You can repeat the same number if it is in a different column (ie B15 and I15), but you cannot have
          multiples of the number in the same column(ie you cannot have a column of G3s)</p>
        <img class="step-pic" src="../assets/step1.png">
      </div>
      <div class="step">
      <p>2. Click on the "BINGO" option in the menu, and get your first challenge by clicking on the orange face. Your prompt should appear in the light brown box below it.</p>
      <img class="step-pic" src="../assets/step2.png">
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
