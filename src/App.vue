<template>
  <v-app>
    <v-navigation-drawer color="rgb(158, 255, 255)" v-model="drawer" app>
      <v-list>
      <v-list-item link to="/dashboard" @click="drawer = !drawer">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/cadastro-funcionario" @click="drawer = !drawer">
          <v-list-item-icon>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Cadastro de Funcionário</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/cadastro-produtos" @click="drawer = !drawer">
          <v-list-item-icon>
            <v-icon>mdi-cart-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Cadastro de Produtos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/venda" @click="drawer = !drawer">
          <v-list-item-icon>
            <v-icon>mdi-cash-register</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Venda</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
    <v-app-bar app color="rgb(158, 255, 255)" v-if="showToolbar">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Magnetic Store</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    showToolbar() {
      return this.$route.path !== '/';
    },
  },
  methods: {
    logout() {
      this.drawer = false;
      this.$router.push('/');
    },
  },
};
</script>

<style>
.bg_color{
  background-color:  rgb(158, 255, 255);
}
</style>