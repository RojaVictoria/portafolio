<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    Navbar: () => import("./components/App/Navbar.vue"),
    Footer: () => import("./components/App/Footer.vue"),
  },
  data: () => ({
    //
  }),
};
</script>
