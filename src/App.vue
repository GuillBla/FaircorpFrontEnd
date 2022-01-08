<template>
  <div id="app">
    <div id="entete">
      <h1>
        <router-link to="/"> <img src="../src/assets/logo.png" /> </router-link>
      </h1>
    </div>

    <div id="items">
      <router-link to="/buildings">Buildings</router-link>
      <router-link to="/rooms">Rooms</router-link>
      <router-link to="/windows">Windows</router-link>
      <router-link to="/heaters">Heaters</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  justify-self: self-end;
  color: #000000;
}

h1 {
  text-align: center;
}

h2 {
  text-align: left;
  color: #000000;
}

#entete {
  color: #000000;
  background-color: rgb(192, 0, 16);
  border-bottom: 1px solid #000000;
  border-top: 1px solid #000000;
  border-left: 1px solid #000000;
  border-right: 1px solid #000000;
  text-align: center;
  padding: 1px;
  text-decoration: none;
}

#items {
  background-color: rgb(245, 227, 67);
  border-bottom: 1px solid #2c3e50;
  border-right: 1px solid #000000;
  border-left: 1px solid #000000;
  text-align: center;
  padding: 10px;
  text-size-adjust: auto;
}

#items a {
  font-weight: bold;
  font-size: 120%;
  color: #000000;
  padding: 10px;
  display: inline;
  text-decoration: none;
}
</style>
