<template>
<div class="w-full bg-black flex flex-row relative" style="height: 90vh;">
  <div class="absolute z-10 w-full flex items-center justify-center flex-col h-full">
    <div class="w-1/3 h-2/5 items-center flex text-center justify-center">
    <p class="text-3xl sm:text-6xl md:text-6xl font-mont opacity-100 text-blue-50">
      AI Based Diet Recommendation Made Possible
    </p>
    </div>
    <div class="w-1/2 h-2/5 flex flex-col items-center justify-end">
      <img src="@/assets/down-arrow.svg" class="animate-bounce" style="width: 50px; height: 50px;" alt="downward pointer">
    </div>
  </div>
<div class="absolute z-0 w-full h-full bg-pink-50">
  <video src="https://res.cloudinary.com/dbhzlzsgs/video/upload/v1616884179/hero-video_jezzs5.webm" class="w-full h-full" style="filter: brightness(77%); object-fit: cover" muted loop autoplay></video>
</div>
</div>
</template>

<script>
export default {
  name: "HeroSection"
}
</script>

<style scoped>

</style>
