<template>
<div class="w-full h-screen  flex items-center justify-center" style="height: 80vh;">
  <div class="w-full h-full xl:w-3/4 lg:h-3/4 flex-col lg:flex-row items-start flex items-center relative justify-start">
    <div class="w-full sm:w-3/5 md:w-2/5 ">
      <p class="text-4xl">Personalized Diet plans for you.</p>
      <br>
      <p class="text-xl">HIFIT uses artificial intelligence to generate personalized home workouts routines for you.</p>
    </div>
    <div class="lg:hidden w-full h-3/4 flex items-end justify-center ">
      <img src="@/assets/prtrait.png" class="lg:hidden" style="max-height: 100%; z-index: 2; max-width: 200px; object-fit: contain" alt="mobile view">
      <img src="@/assets/rotate.png" class="hidden sm:block" style="max-height: 100%; z-index: 1; max-width: 350px; transform: translateX(-100px);  object-fit: contain" alt="mobile view">

    </div>
      <img src="@/assets/prtrait.png" class="hidden lg:block absolute right-7" style="max-height: 130%; z-index: 2; max-width: 400px; object-fit: contain" alt="mobile view">
      <img src="@/assets/rotate.png" class="hidden lg:block absolute bottom-0 right-4 max-w-xl" style="max-height: 100%; z-index: 1; transform: rotate(180deg); object-fit: contain" alt="mobile view">
  </div>
</div>
</template>

<script>
export default {
name: "PersonalizedSection"
}
</script>

<style scoped>

</style>
