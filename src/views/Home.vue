<template>
  <div>
    <v-container id="home" class="pa-0 pt-5" fluid>
      <v-img src="../assets/Banner.png" ></v-img>
    </v-container>
    <v-container id="about" fluid>
      <AboutSection />
    </v-container>
    <v-container id="work" class="work-section" fluid>
      <WorkSection />
    </v-container>
    <v-container id="contact" fluid>
      <ContactSection />
    </v-container>
  </div> 
</template>
 
<script>
export default {
  name: "Home",
  components: {
    AboutSection: () => import("../components/Home/AboutSection.vue"),
    WorkSection: () => import("../components/Home/WorkSection.vue"),
    ContactSection: () => import("../components/Home/ContactSection.vue"),
  },
};
</script>

<style scoped>
.work-section {
  background-color: #FDE0E3;
}
</style>