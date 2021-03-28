<template>
<div class="w-full h-20 flex flex-row items-center justify-center">
<!--  desktop-->
  <div class="hidden sm:my-1 sm:flex sm:items-center sm:justify-between sm:mx-2 sm:w-full">
      <p class="font-mont text-3xl">FITU</p>
    <div class="flex items-center justify-center">
      <div class="w-36 flex items-center justify-center">
        <p class="font-mont text-2xl">Try It</p>
      </div>
      <div class="w-36 flex items-center justify-center">
        <p class="font-mont text-2xl">About</p>
      </div>
      <div class="w-36 flex items-center justify-center">
        <p class="font-mont text-2xl">Contact</p>
      </div>
      <div class="w-36 flex items-center justify-center">
        <img class="rounded-full object-contain" src="https://ui-avatars.com/api/?name=John+Doe" alt="user avatart">
      </div>
    </div>
  </div>
<!--  mobile -->
  <div class="w-full items-center h-full flex flex-row sm:hidden">
    <div class="w-16 mx-2 h-14 flex flex-col items-center justify-around">
      <div class="w-full h-1 bg-black"></div>
      <div class="w-full h-1 bg-black"></div>
      <div class="w-full h-1 bg-black"></div>
    </div>
    <p class="font-mont text-3xl">FITU</p>
  </div>
</div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>

</style>
