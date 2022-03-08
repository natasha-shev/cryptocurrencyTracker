<template>
<!--  <v-dialog-->
<!--    v-model="dialogLocal"-->
<!--    max-width="490"-->
<!--  >-->
<!--    <v-card>-->
<!--      <v-card-title class="text-h5">-->
<!--        <span>{{ curr.full_name }}</span>-->
<!--      </v-card-title>-->

      <v-card-text>
          <PriceChartContainer v-if="curr.id < 4"></PriceChartContainer>
      </v-card-text>

<!--      <v-card-actions>-->
<!--        <v-spacer></v-spacer>-->

<!--        <v-btn-->
<!--          @click="dialogLocal = false"-->
<!--        >-->
<!--          Close-->
<!--        </v-btn>-->
<!--      </v-card-actions>-->
<!--    </v-card>-->
<!--  </v-dialog>-->
</template>

<script>
import PriceChartContainer from './PriceChartContainer';

export default {
  name: 'PriceChartDialog',
  props: ['dialog', 'curr'],
  components: {
    PriceChartContainer
  },

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
