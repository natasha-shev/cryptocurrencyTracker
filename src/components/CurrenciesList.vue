<template>
  <v-container>
    <v-responsive width="80%" class="ml-auto mr-auto">
      <v-row>
        <v-col v-for="(curr) of currencies" :key="curr.id"
               cols="4" class="d-flex justify-center align-content-center"
        >
          <v-responsive width="75%">
            <CurrencyPane class="pane mb-0" :curr="curr"></CurrencyPane>
          </v-responsive>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import CurrencyPane from './CurrencyPane';

export default {
  name: 'CurrenciesList',
  components: { CurrencyPane },
  props: ['currencies'],
};
</script>

<style scoped>

</style>
