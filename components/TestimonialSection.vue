<template>
<div class="w-full flex flex-col items-center justify-center bg-gray-200" style="height: 600px;">
  <carousel :per-page="1" :loop="true"  :mouse-drag="true">
    <slide>
      <testimonial-person></testimonial-person>
    </slide>
    <slide>
      <testimonial-person></testimonial-person>
    </slide>
    <slide>
      <testimonial-person></testimonial-person>
    </slide>
    <slide>
      <testimonial-person></testimonial-person>
    </slide>
  </carousel>
</div>
</template>

<script>
import TestimonialPerson from "@/components/TestimonialPerson";
export default {
  name: "TestimonialSection",
  components: {TestimonialPerson}
}
</script>

<style scoped>

</style>
