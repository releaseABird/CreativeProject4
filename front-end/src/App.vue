<template>
<div id="app">

  <div class="wrapper">
    <nav id="sidebar">
      <div class="sidebar-header">
        <img class="sidebar-logo" alt="SKETCHBOOK BINGO" src="../images/sketchbookLogo.png">
      </div>

      <ul class="list-unstyled components">

        <li>
          <router-link to="/">
            <a href="#">BINGO</a>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <a href="#">SKETCHBOOK</a>
          </router-link>
        </li>
        <li>
          <router-link to="/rules">
            <a href="#">RULES</a>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <a href="#">CONTRIBUTE</a>
          </router-link>
        </li>

      </ul>
      <p id="sub-title">by release a bird</p>

    </nav>


    <div id="content">
      <button type="button" id="sidebarCollapse" class="navbar-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>


    </div>

    <div class="page">
      <router-view />
    </div>

</div>

<div class="footer-container">
    <footer>
      <div class="footer-item">
        <br>
        <p>My github: <a href="https://github.com/releaseABird/CreativeProject3.git">https://github.com/releaseABird/CreativeProject3.git</a></p>
      </div>
    </footer>
  </div>
</div>
</template>''


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.cartImg{
height: 100%;
width: 100%;
object-fit: contain;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.footer-container {
  background-color: #aa7946;
  height: 5em;

}

#sub-title p {
  color: black;
}

.page {
  padding: 2em;
}
</style>
