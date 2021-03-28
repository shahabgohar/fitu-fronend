<template>
  <div class="w-full lg:w-64 m-5 h-80 relative">
    <img class="w-full h-full bg-red-500 rounded-2xl object-cover" v-bind:src="dietPlanItem.image"/>
    <div class="absolute w-full h-full bg-black z-0 top-0 rounded-2xl opacity-40" ></div>
    <div class="absolute w-full h-full z-10 top-0 flex items-center justify-center rounded-2xl" >
      <p class="font-mont text-3xl text-white">{{dietPlanItem.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
name: "DietPlan",
  props: ['dietPlanItem'],
}
</script>

<style scoped>

</style>
