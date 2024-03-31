<template>
  <div id="nav" class="padding-t flex gap-2 justify-center items-center"  >
    <router-link to="/" class="text-slate-600 text-xl leading-normal font-montserrat">Home</router-link> |
    <router-link to="/products" class="text-slate-600 text-xl leading-normal font-montserrat">Products</router-link>
  </div>
  <router-view/>
</template>

<style scoped></style>
