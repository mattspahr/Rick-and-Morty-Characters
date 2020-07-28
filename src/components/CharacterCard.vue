<template>
  <v-card v-if="character.episode && character.origin" min-width="350" outlined>
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-avatar class="ma-3" size="125" tile>
        <v-img :src="character.image"></v-img>
      </v-avatar>

      <div>
        <v-card-title class="secondary--text text-h6">
          {{
          character.name
          }}
        </v-card-title>
        <v-card-subtitle class="secondary--text">Featured in {{ character.episode.length }} episodes</v-card-subtitle>
        <v-card-subtitle class="secondary--text pb-0 pt-0">Species: {{ character.species }}</v-card-subtitle>

        <v-card-subtitle class="secondary--text pb-0 pt-0">Status: {{ character.status }}</v-card-subtitle>

        <v-card-subtitle class="secondary--text pt-0">Origin: {{ character.origin.name }}</v-card-subtitle>
      </div>
    </div>
  </v-card>
  <div v-else></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CharacterCard",
  computed: mapGetters(["character"])
};
</script>

<style scoped></style>
