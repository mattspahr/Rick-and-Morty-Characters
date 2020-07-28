<template>
  <div>
    <v-app-bar>
      <router-link class="text-decoration-none" to="/">
        <h2 class="primary--text font-weight-regular">Rick and Morty</h2>
      </router-link>
      <v-spacer></v-spacer>
      <v-switch v-model="$vuetify.theme.dark" hide-details inset>
        <template v-slot:label>
          <h3 class="primary--text font-weight-regular">Change theme</h3>
        </template>
      </v-switch>
      <div class="pl-2 pr-2 primary--text font-weight-bold"></div>
      <v-btn text large>
        <router-link class="text-decoration-none" to="/about">
          <h3 class="primary--text font-weight-medium text-capitalize">About</h3>
        </router-link>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
</style>