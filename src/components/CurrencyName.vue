<template>
  <v-card class="primary" tile>
    <img :src="curr.icon_url">
    <strong id="names">{{ curr.name }} | {{ curr.full_name }}</strong>
    <v-spacer />
    <v-btn icon
           :color="favBtnColor"
           @click="addToFavourites"
    >
      <v-icon>mdi-star</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CurrencyName',
  props: ['curr'],
  // data() {
  //   return {
  //     favBtnColor: ''
  //   };
  // },
  computed: {
      favBtnColor() {
        return this.$store.getters.isFavourite(this.curr)? '#fcad03' : 'white'; // statement if....
      }
  },
  methods: {
    addToFavourites() {
      //this.favBtnColor = this.favBtnColor === 'white' ? '#fcad03' : 'white';
      axios
        .post('http://127.0.0.1:8000/api/favourite/' + this.curr.id, {}, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }).then(response => {
        // console.log(response.data);
        //console.log(this.$store.getters.isFavourite(this.curr));
      });

      if (this.$store.getters.isFavourite(this.curr)) {
        this.$store.commit('remove_favourite', this.curr);
      } else {
        this.$store.commit('add_favourite', this.curr);
      }
    }
   }
   // mounted() {
   //   // this.favBtnColor()
   //   this.favBtnColor = this.$store.getters.isFavourite(this.curr)? '#fcad03' : 'white';
   // }
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
