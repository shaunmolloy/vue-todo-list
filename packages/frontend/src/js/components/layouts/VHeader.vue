<template>
  <header>
    <div class="container">
      <img class="logo" alt="logo" src="/img/logo.png">
      <ul>
        <li><router-link to="/">My Tasks</router-link></li>
      </ul>
      <div />
    </div>
  </header>
</template>

<style lang="scss">
header {
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
    margin: 0 20px;
  }

  a {
    font-size: 18px;
  }
}
</style>
