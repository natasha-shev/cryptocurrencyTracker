<template>
  <v-card class="primary" tile>
    <img :src="curr.icon_url">
    <strong id="names">{{ curr.name }} | {{ curr.full_name }}</strong>
    <v-spacer />
    <v-btn
      icon
      color="#fcad03"
    >
      <v-icon>mdi-star</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'CurrencyName',
  props: ['curr'] // Add to favourites
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
