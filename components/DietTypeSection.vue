<template>
  <div class="w-full flex flex-col py-24  items-center justify-center text-center" style="height: fit-content">
    <p class="font-mont text-3xl mb-10 ">Diet Plan Generated according to your needs</p>
    <div class="w-11/12 sm:w-10/12 md:w-3/5 h-auto flex flex-row flex-wrap justify-around">
      <diet-plan v-for="(item,index) in plans" v-bind:diet-plan-item="item" v-bind:key="index"></diet-plan>
    </div>
  </div>
</template>

<script>
import DietPlan from "@/components/DietPlan";

export default {
name: "DietTypeSection",
  data() {
  return {
    plans: [
      {
        name: 'FIT',
        image: 'https://res.cloudinary.com/dbhzlzsgs/image/upload/v1616889591/gains_juuimo.jpg'
      },
      {
        name: 'CUT',
        image: 'https://res.cloudinary.com/dbhzlzsgs/image/upload/v1616910706/healthy_i8nhyu.jpg'
      },
      {
        name: 'HEALTHY',
        image: 'https://res.cloudinary.com/dbhzlzsgs/image/upload/v1616910741/cut_gsqrzx.jpg'
      }
    ]
  }
  },
  components: {
  DietPlan,
  }
}
</script>

<style scoped>

</style>
