<template>
  <div class="page">
    <Menu />
    <div class="max-w-7xl mx-auto mt-5 px-2">
      <Nuxt />
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="postcss">
.page {
  position: relative;
}
.page:before {
  background-image: url('/background.webp');
  background-size: cover;

  opacity: 0.5;
  display: block;
  content: ' ';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

body,
html,
.page {
  min-height: 100vh;
}
</style>
