<template>
<div class="w-full flex flex-col items-center justify-center sm:p-24" style="height: fit-content;">


  <p class="font-mont text-4xl my-8">Contact Us</p>


<div class="w-11/12 sm:w-10/12 md:w-3/5 h-auto">
  <div class="flex w-full justify-between">
    <input type="text" placeholder="First Name" class="w-3/6 sm:w-2/5 h-16 mr-3 mt-3 mb-3 rounded-xl bg-gray-200">
    <input type="text" placeholder="Second Name" class="w-3/6 sm:w-2/5 h-16 ml-3 mt-3 mb-3 rounded-xl bg-gray-200">
  </div>
  <input type="email" placeholder="Your Email" class="w-full h-16 my-3 rounded-xl bg-gray-200" />
  <input type="text" multiple class="w-full my-3 rounded-xl h-56 bg-gray-200">
</div>

<button class="bg-black text-white font-mont m-3 w-44 h-16">SUBMIT</button>
</div>
</template>

<script>
export default {
  name: "ContactUs"
}
</script>

<style scoped>

</style>
