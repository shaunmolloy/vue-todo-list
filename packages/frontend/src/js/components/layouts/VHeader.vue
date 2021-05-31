<template>
  <header>
    <div class="container">
      <img class="logo" alt="logo" src="/img/logo.png">
      <ul>
        <li>Todo Lists:</li>
        <li><router-link to="/">Main</router-link></li>
      </ul>
      <div />
    </div>
  </header>
</template>

<style lang="scss">
header {
  background: #f3f3f3;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: inline-block;
  }

  & > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    height: 40px;
  }
}
</style>
