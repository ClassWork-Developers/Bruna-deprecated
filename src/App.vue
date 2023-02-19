<template>
  <v-layout class="po-absolute">
    <v-app-bar prominent>
      <v-app-bar-nav-icon
        variant="text"
        color="amber-darken-2"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>
        <RouterLink to="/">Bruna</RouterLink>
      </v-toolbar-title>
      <p>Coordinación</p>
      <v-spacer></v-spacer>
      <v-btn variant="text" icon="fas fa-plus"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="left" temporary>
      <v-list class="d-flex flex-column">
        <RouterLink to="/" class="ma-2">
          <font-awesome-icon icon="fa-home" />
          Inicio
        </RouterLink>
        <RouterLink to="usuario" class="ma-2">
          <font-awesome-icon icon="fa-user" />
          Perfil
        </RouterLink>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
  <RouterView />
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style>
#app > div.v-layout.po-absolute > nav > div > div {
  padding: 1.5rem 2rem;
  font-size: 1.2rem;
}
.po-absolute {
  /* position: absolute; */
}
</style>
