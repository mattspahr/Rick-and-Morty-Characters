<template>
  <div class="home">
    <div class="left pt-10 pl-10">
      <h1 class="primary--text title">
        Click the button for a random character!
      </h1>
    </div>
    <div class="right pt-10 pl-10">
      <v-btn
        @click="getCharacter"
        class="button ml-15"
        x-large
        color="accent"
        outlined
        >CLICK ME</v-btn
      >
      <CharacterCard class="card ml-15 mt-10" />
    </div>
  </div>
</template>

<script scoped>
import { mapActions } from 'vuex';
import CharacterCard from '../components/CharacterCard';
export default {
  name: 'Home',
  components: {
    CharacterCard
  },
  methods: {
    ...mapActions(['getCharacter'])
  }
};
</script>

<style scoped>
.home {
  display: flex;
  width: 100%;
}

.left {
  flex-basis: 50%;
}

.right {
  flex-basis: 50%;
  max-width: 500px;
}

.title {
  font-size: 90px !important;
  line-height: 0.9;
}

.button {
  min-width: 30% !important;
}

@media (max-width: 900px) {
  .home {
    display: flex;
    flex-direction: column;
  }
}
</style>
