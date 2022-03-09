<template>
  <v-card class="primary" tile>
    <img :src="curr.icon_url">
    <strong id="names">{{ curr.name }} | {{ curr.full_name }}</strong>
    <v-spacer />
    <v-btn v-if="this.$store.getters.isLoggedIn"
           icon
           :color="(curr.user_id)? '#fcad03' : 'white'"
           @mousedown.stop="dialog = true"
           @mouseup.stop="dialog = false"
    >
      <v-icon>mdi-star</v-icon>
      <AddCoinDialog :dialog="dialog" :curr="curr"></AddCoinDialog>
    </v-btn>
  </v-card>
</template>

<script>
import AddCoinDialog from './AddCoinDialog';

export default {
  name: 'CurrencyName',
  components: { AddCoinDialog },
  props: ['curr'],

  data() {
      return {
        dialog: false,
      };
  },

  computed: {
  },

  methods: {
    // открыть готовый диалог. передать туда нынешний коин
      // this.favBtnColor = (this.favBtnColor == 'white')? '#fcad03' : 'white';
   }
};
</script>

<style scoped>
img {
  width: 50px;
  padding: 5px 10px;
}
div {
  display: flex;
  height: 100%;
}
#names {
  align-self: center;
}
</style>
