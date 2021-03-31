<template>
  <div>
    <div class="flex items-center justify-center">

      <p class="font-mont text-3xl items-center justify-center">SIGN UP</p>

    </div><br><br>

    <form>
      <div class="flex items-center justify-center">
        <input class="border-gray border-2 rounded-lg py-2 px-3 text-grey font-mont w-72"
               type="text" name="Username" placeholder="Username">

      </div><br>

      <div class="flex items-center justify-center">
        <input class="border-gray border-2 rounded-lg py-2 px-3 text-grey font-mont w-72"
               type="password" name="Email"
               placeholder="Email">
      </div><br>

      <div class="flex items-center justify-center">
        <input class="border-gray border-2 rounded-lg py-2 px-3 text-grey font-mont w-72"
               type="password" name="password"
               placeholder="Password">
      </div><br>
    </form>

    <div class="flex items-center justify-center">
      <button
        class="w-72 bg-black text-white text-xl uppercase px-6 py-3 not-italic font-extrabold
      mr-1 mb-1  border-black border-2 rounded-lg font-mont" type="button">
        SIGN UP
      </button>
    </div>
    <br><br>

    <div class="border-t w-1/12" style="margin-left: 45%">
    </div>
    <br>

    <div class="flex items-center justify-center">

      <button
        class="w-72 font-sans  font-medium not-italic w-72  bg-white text-black text-l
      mr-1 mb-1  border-black border-2 rounded-lg" type="button">
        <p class="pl-10 px-4  py-4 -mb-6 pb-0" >Sign up with Google</p>
        <div class="pl-3 w-1/6 mb-5">
          <img class="-mb-3 ml-3"
               src="@/assets/google1.svg" style="height: 34px; width: 34px" alt="Google">
        </div>
      </button>
    </div>
    <br><br>
  </div>

</template>

<script>

export default {
  name: 'App',
  components: {

  }
}

</script>

<style scoped>


</style>
