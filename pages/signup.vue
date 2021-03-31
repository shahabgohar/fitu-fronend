<template>
  <div>
  <nav-bar></nav-bar>
<diet-signup></diet-signup>
  <footer-section></footer-section>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import DietSignup from "../components/DietSignup";
import FooterSection from "../components/FooterSection";
export default {
  name: "signup",
  components: {NavBar,
    DietSignup,
    FooterSection
  }
}
</script>

<style scoped>

</style>
