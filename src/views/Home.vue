<template>
  <div>
    <v-container id="home" fluid>
      <HeroSection />
    </v-container>
    <v-container id="about" class="bg-section" fluid>
      <AboutSection />
    </v-container>
    <v-container id="work" fluid>
      <WorkSection :projects="projects"/>
    </v-container>
    <v-container id="contact" class="bg-section" fluid>
      <ContactSection />
    </v-container>
  </div> 
</template>
 
<script>
import Store from "../store";
export default {
  name: "Home",
  components: {
    HeroSection: () => import("../components/Home/HeroSection.vue"),
    AboutSection: () => import("../components/Home/AboutSection.vue"),
    WorkSection: () => import("../components/Home/WorkSection.vue"),
    ContactSection: () => import("../components/Home/ContactSection.vue"),
  },
  beforeRouteEnter(to, from, next) {
      Store.dispatch("projects/getProjects");
      next();
  },
};
</script>

<style>
.bg-section {
  background-color: #F5F5F5;
}
h1, h2, h3, h4, h5 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
}
h1 {
    font-size: 50px;
}
h2 {
    font-size: 40px;
}
h3 {
    font-size: 35px;
}
h4 {
    font-size: 30px;
}
h5 {
    font-size: 20px;
}
p, button, a, li {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px !important;
}
</style>