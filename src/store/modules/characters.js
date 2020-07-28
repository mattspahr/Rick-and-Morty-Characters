import { getCharacter } from 'rickmortyapi';

const state = {
  character: {}
};

const getters = {
  character: state => state.character
};

const actions = {
  async getCharacter({ commit }) {
    let randomId = Math.floor(Math.random() * (591 - 1 + 1)) + 1;
    const res = await getCharacter(randomId);

    commit('setCharacter', res);
  }
};

const mutations = {
  setCharacter: (state, characterData) => (state.character = characterData)
};

export default {
  state,
  getters,
  actions,
  mutations
};
