<template>
  <div>
  <nav-bar></nav-bar>
<diet-sign></diet-sign>
    <footer-section></footer-section>
  </div>
</template>

<script>
import DietSign from "../components/DietSign";
import NavBar from "../components/NavBar";
import FooterSection from "../components/FooterSection";
export default {
name: "Signin",
  components:
{
  FooterSection,
  NavBar,
  DietSign
}

}
</script>

<style scoped>

</style>
