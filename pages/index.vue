<template>
  <div class="w-full">
  <nav-bar></nav-bar>
  <hero-section></hero-section>
  <personalized-section></personalized-section>
  <testimonial-section></testimonial-section>
    <diet-type></diet-type>
  <divider-section></divider-section>
    <contact-us></contact-us>
  <footer-section></footer-section>
  <copyright-section></copyright-section>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar";
import HeroSection from "~/components/HeroSection";
import TestimonialSection from "~/components/TestimonialSection";
import DividerSection from "@/components/DividerSection";
import FooterSection from "@/components/FooterSection";
import CopyrightSection from "@/components/CopyrightSection";
import PersonalizedSection from "@/components/PersonalizedSection";
import ContactUs from "@/components/ContactUs";
import DietType from "@/components/DietTypeSection";

export default {
  components: {
    NavBar,
    HeroSection,
    TestimonialSection,
    DividerSection,
    FooterSection,
    CopyrightSection,
    PersonalizedSection,
    ContactUs,
    DietType,
  },
}
</script>
