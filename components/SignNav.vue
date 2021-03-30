<template>
  <div id="allTheNav">
    <nav id="navigator" class="navbar float-left">
      <span>

          <div>
            <div class="bar" :class="{top}"></div>
            <div class="bar" :class="{mid}"></div>
            <div class="bar" :class="{end}" style="width: 29px;margin-left: -1px"></div>
          </div>
      </span>
    </nav>

    <div class="header">
      <h1 class="text-black 2xl:font-bold text-center">FITME</h1>

<div class="flex-column float-right">

  <img class="img-fluid" src="@/assets/Fitness_m.png" height="60" width="60"/></div>

  </div>
    <br><br>
  </div>
</template>

<script>
export default {
name: "SignNav",

}
</script>

<style scoped>

.bar{
  display: block;
  height: 5px;
  width: 35px;
  background: #000;
  margin: 5px auto;
}
h1
{
  font-family: Montserrat Subrayada;
  font-size: 32px;
  font-style: italic;

}
.img-fluid
{
  margin-top: -60px;
  margin-right: 300px;
}
@media all {
 .img-fluid
 {
   float: right;
   margin-right:100px
 }
}
</style>
