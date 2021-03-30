<template>

  <div class="main">
  <div class="flex-col">
<header>
  SIGN UP
</header>
  </div><br><br>
<div class="flex-col">
  <form>
    <div class="username">
      <input class="border-gray border-2 rounded-lg py-2 px-3 text-grey" type="text" name="Username" placeholder="Username"
      style="width: 400px">
    </div><br>

    <div class="email">
      <input class="border-gray border-2 rounded-lg py-2 px-3 text-grey" type="email" name="email"
             placeholder="Email"
             style="width: 400px">
    </div><br>
    <div class="password1">
      <input class="border-gray border-2 rounded-lg py-2 px-3 text-grey" type="password" name="password"
             placeholder="Password"
             style="width: 400px">
      <br>
    </div>
  </form>
</div>
<br>

<div>
 <button id="button1"
   class="bg-black text-white 2xl:font-bold uppercase text-sm px-6 py-3  mr-1 mb-1 w-1/4 border-black border-2 rounded-lg" type="button">
    SIGN UP
  </button><br><br>

  <div class="border-t w-1/12" style="margin-left: 45%">
  </div>
<br>


  <button
      class="bg-white text-black  px-4 py-2 rounded  inline-flex items-center font-bold w-1/4  border-gray-700 border-2 rounded-lg"
      type="button"
      style="height: 50px;">
    <img class="img"
         alt="google"
         src="../assets/google.png"/>
    <p   style="margin-left: 10px;">
      Sign up with Google</p>
  </button>


</div>
    <br>

  </div>

</template>

<script>
import SignNav from  '@/components/SignNav.vue'
export default {
  name: "DietSignup",
  components: {
    SignNav,
  }

}
</script>

<style scoped>
#button1
{
  font-style: italic;
  font-family: "Montserrat Subrayada";
}
.img
{

  margin-left:60px;
  width:20px;
  height:20px;
}
header
{
  font-family:"Montserrat Subrayada";
  font-style: italic;
  font-size: 30px;
  text-decoration: none;
}
p{
  font-family: "Roboto";
  font-size: 16px;
}
form {
  display: inline-block;
}
@media all {
  button{
    width: 400px;
  }
  @media all {
    input[type=text],input[type=email],input[type=password] {
      width: 700px;

    }
  }
}

</style>