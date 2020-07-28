import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.pink.lighten3,
        secondary: colors.cyan.accent3,
        accent: colors.lightGreen.accent2
      },
      dark: {
        primary: colors.cyan.accent3,
        secondary: colors.lightGreen.accent2,
        accent: colors.pink.lighten3
      }
    }
  }
});
