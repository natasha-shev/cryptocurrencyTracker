<template>
<div>Oh shit here we go again</div>
</template>

<script>
import api from '../api';

export default {
  name: 'SalesDialog',

  data() {
    return {
      loaded: false,

    };
  },

  beforeCreate() {
    api.getSales().then(response => {
      this.loaded = true;
      console.log(response.data);
    });
  }
};
</script>

<style scoped>

</style>
