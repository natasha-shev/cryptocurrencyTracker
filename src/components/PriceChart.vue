<template>
  <v-dialog
    v-model="dialogLocal"
    max-width="490"
  >
    there will be a plot
  </v-dialog>
</template>

<script>
export default {
  name: 'PriceChart',
  props: ['dialog', 'curr'],

  data() {
    return {
      dialogLocal: false,
    };
  },

  watch: {
    dialog: function () {
      this.dialogLocal = !this.dialogLocal;
    },
  },
};
</script>

<style scoped>

</style>
