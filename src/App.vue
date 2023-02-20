<template>
  <v-layout>
    <v-app-bar color="amber-accent-3" prominent>
      <v-app-bar-nav-icon
        variant="text"
        color="white"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <i class="logo" />
      <v-toolbar-title>
        <RouterLink to="/">
          <span class="titulo-logo"> Bruna </span>
        </RouterLink>
      </v-toolbar-title>
      <v-row no-gutters justify="end" align="center">
        <v-col>
          <p class="color-heading bold">Coordinación</p>
        </v-col>
        <v-col cols="2">
          <v-switch v-model="temaLight" inset />
        </v-col>
        <v-col cols="2">
          <v-btn
            variant="text"
            color="grey-lighten-5"
            icon="fas fa-right-from-bracket"
          ></v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="left" temporary>
      <v-list class="d-flex flex-column">
        <RouterLink to="/" class="ma-2 nav-link">
          <font-awesome-icon icon="fa-home" />
          Inicio
        </RouterLink>
        <RouterLink to="usuario" class="ma-2 nav-link">
          <font-awesome-icon icon="fa-user" />
          Perfil
        </RouterLink>
      </v-list>
    </v-navigation-drawer>
    <v-main class="h-screen">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    temaLight: true,
  }),
  watch: {
    tema() {
      document.documentElement.setAttribute(
        "tema",
        this.temaLight ? "light" : "dark"
      );
      console.log(document.documentElement)
    },
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style lang="scss">
div.v-row.v-row--no-gutters > div > div > div.v-input__details {
  display: none;
}
.nav-link {
  padding: 1.5rem 2rem;
  font-size: 1.2rem;
}
</style>
